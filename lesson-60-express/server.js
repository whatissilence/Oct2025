import express from 'express';
import { usersRouter } from './src/routes/users.js';
import { articlesRouter } from './src/routes/articles.js';
import { logger } from './src/middlewares/logger.js';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(logger);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

app.use(usersRouter);
app.use(articlesRouter);

app.listen(PORT, () => {
  console.log('Server is started and listening port ' + PORT);
})