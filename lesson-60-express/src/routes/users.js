import usersData from '../models/users.json' with { type: 'json' };
import express from 'express';

let users = usersData;

export const usersRouter = express.Router();

const handleGetUsers = (req, res) => {
  const filter = req.query.filter;

  if (filter) {
    return res.json(users.filter(u => u.name.toLowerCase().includes(filter.toLowerCase())));
  }

  return res.json(users);
}

const handleGetUser = (req, res) => {
  const userId = parseInt(req.params.id);

  if(isNaN(userId)) {
    return res.status(400).send('User ID must be a number');
  }

  const user = users.find(user => user.id === userId);

  if(!user) {
    return res.status(404).send('User does not exist');
  }

  return res.json(user);
}

const handleCreateUser = (req, res) => {
  const maxId = Math.max(...users.map(user => user.id));
  const newUser = {
    id: maxId + 1,
    name: req.body.name,
    email: req.body.email,
  }

  users.push(newUser);
  return res.status(201).send(newUser);
}

const handleEditUser = (req, res) => {
  if (false) {
    return res.status(404).send('User does not exist!');
  }

  return res.send('User updated successfully.');
}

const handleDeleteUser = (req, res) => {
  const userId = parseInt(req.params.id);

  if(isNaN(userId)) {
    return res.status(400).send('User ID must be a number');
  }

  const user = users.find(user => user.id === userId);

  users = users.filter(u => u.id !== userId);

  if(!user) {
    return res.status(404).send('User does not exist');
  }

  return res.send({
    message: 'User deleted successfully.',
    deletedUser: user
  });
}

// usersRouter.get('/users', logger, handleGetUsers);
// usersRouter.post('/users', handleCreateUser)
// usersRouter.get('/users/:id', handleGetUser);
// usersRouter.put('/users/:id', handleEditUser)
// usersRouter.delete('/users/:id', handleDeleteUser)

usersRouter.route('/users')
  .get(handleGetUsers)
  .post(handleCreateUser);

usersRouter.route('/users/:id')
  .get(handleGetUser)
  .put(handleEditUser)
  .delete(handleDeleteUser);