import express from 'express';
import cors from 'cors';
import { logger } from './middlewares/logger.js';
import usersData from './models/users.json' with { type: 'json' };
import bodyParser from 'body-parser';
import { validateUser } from './validators/validateUser.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json())

app.use(cors({
  origin: true,
}))

app.use(logger);

app.get('/', (req, res) => {
  res.status(200).send('Hello from server');
})

app.get('/users', (req, res) => {
  res.status(200).json(usersData);
})

app.post('/users', validateUser, (req, res) => {
  const maxId = Math.max(...usersData.map(user => user.id));
  const newUser = {
    id: maxId + 1,
    name: req.body.name,
    email: req.body.email,
  }

  usersData.push(newUser);
  return res.status(200).send('User created successfully.');
})

app.get('/test', (req, res) => {
  let someVariable;
  console.log(someVariable.someMethod())

  res.status(200).send('Test test test');
})

const errorHandler = (err, req, res, next) => {
  console.log('======================')
  console.log(err);
  console.log('======================')
  res.status(err.status || 500).send('Something went wrong. Please try again later or contact us.');
}

app.use(errorHandler);



app.listen(PORT, () => {
  console.log(`Server started and listening to port ${PORT}`);
})