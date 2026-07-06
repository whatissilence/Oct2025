import { getMovieById, getMovies, getMoviesByYear } from '../services/movies.js';
import express from 'express';

export const moviesRouter = express.Router();

moviesRouter.get('/movies', async (req, res) => {
  res.json(await getMovies());
})

moviesRouter.get('/movies/:movieId', async (req, res) => {
  const { movieId } = req.params;
  try {
    res.json(await getMovieById(movieId));
  } catch (e) {
    res.status(400).send(e.message)
  }
})

moviesRouter.get('/movies/years/:year', async (req, res) => {
  const { year } = req.params;
  res.json(await getMoviesByYear(year));
})