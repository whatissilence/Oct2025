import express  from 'express';
import formidable from 'formidable';
import path  from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.post('/upload', (req, res) => {
  const form = formidable({
    uploadDir: path.join(__dirname, 'uploads'),
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ fields, files });
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});