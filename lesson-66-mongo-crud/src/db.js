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

  await ensureCollectionExists('passport_users');
}

async function ensureCollectionExists(collectionName) {
  const collections = await db.listCollections().toArray();
  const collectionNames = collections.map(collection => collection.name);

  if (!collectionNames.includes(collectionName)) {
    await db.createCollection(collectionName);
    console.log(`Collection '${collectionName}' created.`);
  } else {
    console.log(`Collection '${collectionName}' already exists.`);
  }

}