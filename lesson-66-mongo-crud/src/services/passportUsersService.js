import { db } from '../db.js';
import { ObjectId } from 'mongodb';

export async function findUser(name) {
  const usersColl = db.collection('passport_users');

  const person = await usersColl.findOne({username: name});
  return person;
}

export async function getUsers() {
  const usersColl = db.collection('passport_users');

  const persons = await usersColl.find({}).toArray();
  return persons;
}

export async function createUser(newUser) {
  const usersColl = db.collection('passport_users');

  let result = await usersColl.insertOne(newUser);

  if (result.acknowledged) {
    result = await usersColl.findOne({ _id: result.insertedId });
  } else {
    result = { success: false };
  }

  return result;
}