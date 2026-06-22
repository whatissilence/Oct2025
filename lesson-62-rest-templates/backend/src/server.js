import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createUser, deleteUser, editUser, getUserById, getUsers } from './services/usersService.js';
import { deletePost, editPost, getPostById, getPosts, getPostsByUserId } from './services/postsService.js';
import { deleteComment, getCommentsByPostId } from './services/commentsService.js';

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Server is running!');
})

// TODO Винести users в окремий роутер =================================
app.get('/users', (req, res) => {
  res.json(getUsers());
})

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;

  const user = getUserById(userId);

  if (!user) {
    res.status(404).send(`User with id ${userId} not found`);
  }

  res.json(user);
})

app.get('/users/:userId/posts', (req, res) => {
  const { userId } = req.params;
  const user = getUserById(userId);
  if (!user) {
    res.status(404).send(`User with id ${userId} not found`);
  }

  res.json(getPostsByUserId(userId));
})

app.post('/users', (req, res) => {
  const newUserData = req.body;
  // TODO validation

  const result = createUser(newUserData)
  res.json(result);
})

app.put('/users/:userId', (req, res) => {
  const { userId } = req.params;

  const user = getUserById(userId);

  if (!user) {
    res.status(404).send(`User with id ${userId} not found`);
  }

  const newUserData = req.body;
  // TODO validation

  const result = editUser(userId, newUserData)
  res.json(result);
})

app.delete('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const user = getUserById(userId);
  if (!user) {
    res.status(404).send(`User with id ${userId} not found`);
  }

  deleteUser(user.id)
  res.json(user);
})

// TODO Винести posts в окремий роутер =================================

app.get('/posts', (req, res) => {
  res.json(getPosts());
})

app.get('/posts/:postId', (req, res) => {
  const { postId } = req.params;

  const post = getPostById(Number(postId));
  if (!post) {
    res.status(404).send(`Post with id ${postId} not found`);
  }

  res.json(post);
})

app.post('/posts', (req, res) => {
  const newPostData = req.body;
  // TODO validation

  const result = createUser(newPostData)
  res.json(result);
})

app.put('/posts/:postId', (req, res) => {
  const { postId } = req.params;

  const post = getPostById(postId);
  if (!post) {
    res.status(404).send(`Post with id ${postId} not found`);
  }

  const newPostData = req.body;
  // TODO validation

  const editedPost = editPost(postId, newPostData);
  res.json(editedPost)
})

app.delete('/posts/:postId', (req, res) => {
  const { postId } = req.params;
  const post = getPostById(postId);
  if (!post) {
    res.status(404).send(`Post with id ${postId} not found`);
  }

  deletePost(postId);
  res.json(post);
})

app.get('/posts/:id/comments', (req, res) => {
  const postId = req.params.id;
  const post = getPostById(postId);

  if(!post) {
    res.status(404).send('No such post');
    return;
  }

  const comments = getCommentsByPostId(postId);
  res.json(comments);
})

app.delete('/posts/:postId/comments/:commId', (req, res) => {
  const { postId, commId } = req.params;
  const post = getPostById(postId);

  if(!post) {
    res.status(404).send('No such post');
    return;
  }

  const deletedComment = deleteComment(commId);

  if(!deletedComment) {
    res.status(404).send('No such comment');
    return;
  }

  res.json(deletedComment);
})


// GET /comments - теж правильно
// GET /comments/:commentId - теж правильно

// У мене на фронт-енді не використовуються, але в реальній системі мали б бути

// GET /posts/:postId/comments/:commentId
// POST /posts/:postId/comments
// PUT /posts/:postId/comments/:commentId

app.listen(PORT, () => {
  console.log('Server is started and listening port ' + PORT);
})