import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { dbConnect, db } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/movies', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;

  const moviesCollection = db.collection('movies');
  const totalCount = await moviesCollection.countDocuments();

  const skip = (page - 1) * perPage;
  const limit = perPage;

  const result = await moviesCollection.find({}).sort({ title: 1}).skip(skip).limit(limit).toArray();

  res.json({
    totalCount,
    data: result,
  });
})

app.get('/create-orders', async (req, res) => {
  await db.createCollection('orders');
  const ordersCollection = await db.collection('orders');

  const orders = [
    {product: "toothbrush", total: 4.75, customer: "Mike"},
    {product: "guitar", total: 199.99, customer: "Tom"},
    {product: "milk", total: 11.33, customer: "Mike"},
    {product: "pizza", total: 8.50, customer: "Karen"},
    {product: "toothbrush", total: 4.75, customer: "Karen"},
    {product: "pizza", total: 4.75, customer: "Dave"},
    {product: "toothbrush", total: 4.75, customer: "Mike"},
  ];

  const result = await ordersCollection.insertMany(orders);
  res.json(result);
})

app.get('/orders', async (req, res) => {
  const ordersCollection = await db.collection('orders');

  // const result = await ordersCollection.count({ product: 'toothbrush' });
  // const result = await ordersCollection.distinct('product');

  const result = await ordersCollection.aggregate([
    { $match: { product: {$in: ['toothbrush', 'pizza'] } } },
    {
      $group: {
        _id: '$product',
        totalSales: { $sum: '$total' },
        kilkist: { $sum: 1 },
        averagePrice: { $avg: '$total' }
      }
    },
    { $sort: {kilkist: 1, _id: 1}}
  ]).toArray();

  res.json(result)
})

app.get('/indexes', async (req, res) => {
  // const ordersCollection = await db.collection('orders');
  // await ordersCollection.createIndex({ product: 1 })

  // const personsCollection = await db.collection('persons');
  // await personsCollection.createIndex({ email: 1}, {unique: true});

  // const moviesCollection = await db.collection('movies');
  // await moviesCollection.createIndex({ 'tomatoes.viewer.rating': 1});

  const result = await personsCollection.insertOne({
    email: 'jill@gmail.com'
  })

  res.send(result)
})

app.get('/explain', async (req, res) => {
  const moviesCollection = await db.collection('movies');

  // const result = await moviesCollection.indexes();

  const titleSearch = await moviesCollection.find({title: 'Dinosaur'}).explain();
  // const textSearch = await moviesCollection.find({ $text: { $search: 'dinosaur' }}).explain();
  const regexSearch = await moviesCollection.find({title: {$regex: /^dinosaur$/i}}).explain();

  res.json(regexSearch);
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