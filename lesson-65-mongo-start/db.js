import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.MONGO_CONNECTION_STRING;
const dbClient = new MongoClient(connectionString);

export let db;

export async function dbConnect() {
  await dbClient.connect();
  db = await dbClient.db('sample_mflix');
  console.log("Connected to MongoDB");
}