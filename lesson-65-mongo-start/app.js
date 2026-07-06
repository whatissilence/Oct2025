import dotenv from 'dotenv';
import express from 'express';
import { dbConnect, db } from './db.js';
import { moviesRouter } from './routes/moviesRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(moviesRouter);

async function connect() {
  try {
    await dbConnect();

    app.listen(PORT, () => {
      console.log(`Server started and listening to http://localhost:${PORT}`);
    })

  } catch (e) {
    console.error('Error connection with Database', e);
  }
}

connect();