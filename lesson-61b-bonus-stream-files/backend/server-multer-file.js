import express from 'express';
import multer from 'multer';
import path from 'node:path';
import cors from 'cors';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },

  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/\s+/g, '_');
    const fileName = `${Date.now()}_${safeName}`;
    cb(null, fileName);
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('avatar'), (req, res) => {
  const { name, email } = req.body;

  res.json({
    fields: { name, email },
    file: req.file
  });
});

app.listen(PORT, () => {
  console.log(`DiskStorage server on port ${PORT}`);
});