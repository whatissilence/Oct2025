import { v4 as uuidv4 } from 'uuid';

import { users } from '../models/users.js';

export const getUsers = () => {
  return users;
}

export const getUserById = (id) => {
  return users.find(user => String(user.id) === String(id));
}

export const editUser = (id, data) => {
  const userIndex = users.findIndex(u  => String(u.id) === String(id));

  if (userIndex === -1) {
    return;
  }

  users[userIndex] = {
    ...users[userIndex],
    ...data
  }

  return users[userIndex];
}

export const createUser = (data) => {
  const user = {
    ...data,
    id: uuidv4(),
  }

  users.push(user);

  return user;
}

export const deleteUser = (id) => {
  const index = users.findIndex(u  => String(u.id) === String(id));
  if (index === -1) {
    return;
  }

  users.splice(index, 1);
}