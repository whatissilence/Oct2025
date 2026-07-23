import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import Person from './models/Person.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const connectionString = process.env.MONGO_CONNECTION_STRING;

app.get('/', (req, res) => {
  res.send('Works!');
})

app.get('/test', async (req, res) => {
  try {
    const person = new Person({
      name: 'Grzegorz Brzęczyszczykiewicz',
      // age: 33,
      email: 'grz10@example.com'
    })

    await person.save();

    console.log(person);

    res.json(person);
  } catch (err) {
    console.log(err);
    res.status(400).send(`ERROR: ${err.message}`);
  }
})

app.get('/update', async (req, res) => {
  const person = await Person.findById('6a625a5c2721709ce113b584');

  person.mother = '6a4fd5adfa76e8c9f833c2e5'
  person.age = 21;

  console.log(person);
  await person.save()

  res.json(person);
})

app.get('/mother', async (req, res) => {
  const { childName } = req.query;

  if (!childName) {
    return res.status(400).send('Name is not defined');
  }

  const childPerson = await Person.findOne({ name: childName })

  if(!childPerson) {
    return res.status(404).send(`Child ${childName} not found`);
  }

  const mother = await Person.findById(childPerson.mother);

  if(!mother) {
    return res.status(404).send(`Mother for child ${childName} not found`);
  }

  return res.status(200).send(mother);
})

app.get('/search', async (req, res) => {
  const persons = await Person.where('age').gt(30).lt(50).sort('age')

  res.json(persons)
})


async function startServer() {
  try {
    await mongoose.connect(connectionString);
    console.log('MongoDB Connected!');

    app.listen(PORT, () => {
      console.log(`Server started and listening to http://localhost:${PORT}`);
    })

  } catch (e) {
    console.error('Error connection with Database', e);
  }
}

startServer();

// Класичний красивий REST
/*
app.get('/persons', async (req, res) => {})             // взяти персон (тут може бути фільтр пошук сортування)
app.get('/persons/:personId', async (req, res) => {})   // взяти персону по айді
app.post('/persons', async (req, res) => {})            // створити нову персону (req.body - дані для створення)
app.put('/persons/:personId', async (req, res) => {})   // оновити персону (req.body - дані для оновлення)
app.delete('/persons/:personId', async (req, res) => {})// видалити персону по айді
*/