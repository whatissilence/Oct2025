import { db } from '../db.js';
import { ObjectId } from 'mongodb';

export async function getPersons() {
  const personsCollection = db.collection('persons');

  const persons = await personsCollection.find({}).toArray();
  return persons;
}

export async function addPerson(newPerson) {
  const personsCollection = db.collection('persons');

  let result = await personsCollection.insertOne(newPerson);

  if (result.acknowledged) {
    result = await personsCollection.findOne({ _id: result.insertedId });
  } else {
    result = { success: false };
  }

  return result;
}

export async function addMany(persons) {
  const personsCollection = db.collection('persons');

  // persons - це масив елементів
  const result = await personsCollection.insertMany(persons);

  console.log('===================================')
  console.log(result);
  console.log('===================================')

  return result;
}

export async function findPerson() {
  const personsCollection = db.collection('persons');

  // const result = await personsCollection.find().sort({ name: -1 }).skip(6).limit(3).toArray();
  // const result = await personsCollection.find({name: 'Leanne Graham' }).toArray();
  // const result = await personsCollection.find({age: { $ne: 26 } }).toArray();
  // const result = await personsCollection.find({name: { $in: ['Patricia Lebsack', 'Chelsey Dietrich'] } }).toArray();
  // const result = await personsCollection.find({name: { $nin: ['Patricia Lebsack', 'Chelsey Dietrich'] } }).toArray();

  // const result = await personsCollection.find({
  //   age: { $gte:26, $lte: 35 }
  // }).sort({age: 1}).toArray();

  // const result = await personsCollection.find({
  //   $or: [
  //     {age: 29},
  //     {name: 'Chelsey Dietrich'}
  //   ]
  // }).toArray();

  // const result = await personsCollection.find({someField: { $exists: true } }).toArray();

  // const result = await personsCollection.find({ 'address.city': { $in: ['Wisokyburgh', 'South Elvis'] }}).toArray();

  const result = await personsCollection.find({}, { projection: { name: 1, email: 1, _id: 0 } }).toArray();

  return result;
}

export async function editPerson() {
  const personsCollection = db.collection('persons');
  const filterObj = { _id: new ObjectId('6a4fd3bd183706516dcbb777') };
  // const updateObj = { $set: { age: 81 }}
  const updateObj = { $set: { age: 12, name: 'Stranger' }}
  // const updateObj = { $rename: { age: 'circlesAroundSun' }}
  // const updateObj = { $push: { hobbies: 'hiking' }}

  const optionsObj = { upsert: true };

  const result = await personsCollection.updateOne(filterObj, updateObj, optionsObj);

  console.log('===================================')
  console.log(result);
  console.log('===================================')

  return result;
}
