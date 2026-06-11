import express from 'express';
import { logger } from '../middlewares/logger.js';

export const articlesRouter = express.Router();

const handleGetArticles = (req, res) => {
  return res.json('List of articles');
}

const handleCreateArticle = (req, res) => {
  return res.status(201).send('Article created successfully.');
}

articlesRouter.route('/articles')
  .get(logger, handleGetArticles)
  .post(logger, handleCreateArticle);