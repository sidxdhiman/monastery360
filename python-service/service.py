# python-service/service.py
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse, JSONResponse
import numpy as np
import cv2
from pathlib import Path
import uuid
import os

app = FastAPI()

OUT_DIR = Path("outputs")
OUT_DIR.mkdir(exist_ok=True)

@app.post("/stitch")
async def stitch(images: list[UploadFile] = File(...)):
    imgs = []
    # read uploaded files into OpenCV images
    for f in images:
        content = await f.read()
        nparr = np.frombuffer(content, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if img is None:
            return JSONResponse({"error": f"invalid image {f.filename}"}, status_code=400)
        imgs.append(img)

    if len(imgs) < 2:
        return JSONResponse({"error": "Need at least 2 images"}, status_code=400)

    # optional debug
    print(f"[stitch] got {len(imgs)} images; shapes: {[i.shape for i in imgs]}")

    stitcher = cv2.Stitcher_create()
    status, pano = stitcher.stitch(imgs)

    if status != cv2.Stitcher_OK:
        print(f"[stitch] stitch failed status={status}")
        return JSONResponse({"error": f"Stitching failed with status {status}"}, status_code=500)

    filename = f"{uuid.uuid4().hex}.jpg"
    out_path = OUT_DIR / filename
    cv2.imwrite(str(out_path), pano)
    print(f"[stitch] wrote panorama: {out_path}")

    return FileResponse(str(out_path), media_type="image/jpeg", filename=filename)
