import express from 'express';
import multer from 'multer';
import path from 'node:path';
import fs from 'node:fs/promises';
import cors from 'cors';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

// файл хранится в памяти
const upload = multer({
  storage: multer.memoryStorage(),
});

app.post('/upload', upload.single('avatar'), async (req, res) => {
  try {
    const { name, email } = req.body;
    const file = req.file;

    console.log(req.file);

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const safeName = file.originalname.replace(/\s+/g, '_');
    const fileName = `${Date.now()}_${safeName}`;

    const savePath = path.join(__dirname, 'uploads', fileName);

    await fs.writeFile(savePath, file.buffer);

    res.json({
      fields: { name, email },
      file: {
        originalName: file.originalname,
        savedAs: fileName,
        size: file.size
      }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`MemoryStorage server on port ${PORT}`);
});