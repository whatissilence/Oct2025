import dotenv from 'dotenv';
import express from 'express';
import { dbConnect } from './db.js';
import { addMany, addPerson, editPerson, findPerson, getPersons } from './services/personsService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
  const result = await editPerson();
  res.json(result);
})

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