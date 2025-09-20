# python-service/service.py
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse, JSONResponse
import numpy as np
import cv2
from pathlib import Path
import uuid

app = FastAPI()

# Output directory
OUT_DIR = Path("outputs")
OUT_DIR.mkdir(exist_ok=True)

# Maximum width/height for resizing before stitching
MAX_DIM = 1000  # Resize to max 1000px to reduce memory usage

@app.post("/stitch")
async def stitch(images: list[UploadFile] = File(...)):
    imgs = []

    # Read uploaded files into OpenCV images
    for f in images:
        content = await f.read()
        nparr = np.frombuffer(content, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if img is None:
            return JSONResponse({"error": f"Invalid image {f.filename}"}, status_code=400)

        # Resize large images to MAX_DIM while maintaining aspect ratio
        h, w = img.shape[:2]
        scale = min(MAX_DIM / w, MAX_DIM / h, 1.0)  # Only shrink if needed
        if scale < 1.0:
            img = cv2.resize(img, (int(w * scale), int(h * scale)))
        imgs.append(img)

    if len(imgs) < 2:
        return JSONResponse({"error": "Need at least 2 images"}, status_code=400)

    # Debug info
    print(f"[stitch] got {len(imgs)} images; shapes: {[i.shape for i in imgs]}")

    # Use PANORAMA mode for better results with wide images
    stitcher = cv2.Stitcher_create(cv2.Stitcher_PANORAMA)
    status, pano = stitcher.stitch(imgs)

    if status != cv2.Stitcher_OK:
        print(f"[stitch] Stitching failed. Status={status}")
        return JSONResponse({"error": f"Stitching failed with status {status}"}, status_code=500)

    # Save panorama
    filename = f"{uuid.uuid4().hex}.jpg"
    out_path = OUT_DIR / filename
    cv2.imwrite(str(out_path), pano)
    print(f"[stitch] Wrote panorama: {out_path}")

    return FileResponse(str(out_path), media_type="image/jpeg", filename=filename)

