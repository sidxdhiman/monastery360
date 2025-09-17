// backend/server.js (ES module)
import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path, { dirname } from 'path';
import FormData from 'form-data';
import axios from 'axios';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';
import { fileURLToPath } from 'url';

// ---------- fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ---------- directories
const UPLOAD_DIR = path.join(__dirname, 'uploads');
const PUBLIC_DIR = path.join(__dirname, 'public');
const PAN_DIR = path.join(PUBLIC_DIR, 'panoramas');

fs.mkdirSync(UPLOAD_DIR, { recursive: true });
fs.mkdirSync(PAN_DIR, { recursive: true });

// ---------- express setup
const app = express();
app.use(cors());
app.use(express.json());
app.use('/static', express.static(PUBLIC_DIR));

const upload = multer({ dest: UPLOAD_DIR });

// ---------- MongoDB
mongoose.connect('mongodb://localhost:27017/monastery360', { useNewUrlParser: true, useUnifiedTopology: true });

const tourSchema = new mongoose.Schema({
  adminId: String,
  title: String,
  imageUrl: String,
  status: { type: String, enum: ['processing','completed','failed'], default: 'processing' },
  createdAt: { type: Date, default: Date.now }
});
const Tour = mongoose.model('Tour', tourSchema);

// ---------- POST /api/tours (upload images)
app.post('/api/tours', upload.array('images', 50), async (req, res) => {
  const { title, adminId } = req.body;
  const tour = new Tour({ title: title || 'Untitled Tour', adminId: adminId || 'admin', status: 'processing' });
  await tour.save();

  try {
    const form = new FormData();
    req.files.forEach(file => {
      form.append('images', fs.createReadStream(file.path), { filename: file.originalname || file.filename });
    });

    const pythonUrl = 'http://localhost:5000/stitch';
    const response = await axios.post(pythonUrl, form, {
      headers: form.getHeaders(),
      responseType: 'stream',
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      timeout: 0
    });

    const contentType = response.headers['content-type'] || '';
    if (contentType.startsWith('image/')) {
      const outPath = path.join(PAN_DIR, `${tour._id}.jpg`);
      const writer = fs.createWriteStream(outPath);
      response.data.pipe(writer);

      writer.on('finish', async () => {
        tour.status = 'completed';
        tour.imageUrl = `/static/panoramas/${tour._id}.jpg`;
        await tour.save();

        req.files.forEach(f => fs.unlink(f.path, ()=>{}));
        return res.json({ tourId: tour._id, url: tour.imageUrl });
      });

      writer.on('error', async (err) => {
        console.error('write error', err);
        tour.status = 'failed';
        await tour.save();
        req.files.forEach(f => fs.unlink(f.path, ()=>{}));
        return res.status(500).json({ error: 'Failed to save panorama' });
      });

    } else {
      const chunks = [];
      response.data.on('data', c => chunks.push(c));
      response.data.on('end', async () => {
        const body = Buffer.concat(chunks).toString();
        console.error('python error response:', body);
        tour.status = 'failed';
        await tour.save();
        req.files.forEach(f => fs.unlink(f.path, ()=>{}));
        return res.status(500).json({ error: 'Stitch failed', details: body });
      });
    }

  } catch (err) {
    console.error('forward error', err?.message || err);
    tour.status = 'failed';
    await tour.save();
    req.files.forEach(f => fs.unlink(f.path, ()=>{}));
    return res.status(500).json({ error: 'Failed to process 360 images', message: err?.message || err });
  }
});

// ---------- GET tour status
app.get('/api/tours/:id', async (req, res) => {
  const t = await Tour.findById(req.params.id).lean();
  if (!t) return res.status(404).json({ error: 'not found' });
  return res.json(t);
});

app.listen(3000, () => console.log('Node API running on http://localhost:3000'));
