import { db } from '../db.js';
import { ObjectId } from 'mongodb';

export async function getMovies() {
  const moviesCollection = await db.collection('movies');
  const foundMovies = await moviesCollection.find({year: 1999}).limit(11).toArray();
  return foundMovies;
}

export async function getMoviesByYear(year) {
  const moviesCollection = await db.collection('movies');
  const foundMovies = await moviesCollection.find({year: Number(year)}).limit(10).toArray();
  return foundMovies;
}

export async function getMovieById(id) {
  const moviesCollection = await db.collection('movies');

  if(!ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }

  const foundMovie = await moviesCollection.findOne({ _id: new ObjectId(id) });

  return foundMovie;
}