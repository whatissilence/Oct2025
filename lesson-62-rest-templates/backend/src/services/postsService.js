import { posts } from '../models/posts.js';

export const getPosts = () => {
  return posts;
}

export const getPostById = (id) => {
  return posts.find(post => String(post.id) === String(id));
}

export const getPostsByUserId = (userId) => {
  return posts.filter(post => String(post.userId) === String(userId));
}

export const editPost = (id, data) => {
  const postIndex = posts.findIndex(post => String(post.id) === String(id));
  if (postIndex === -1) {
    return;
  }

  posts[postIndex] = {
    ...posts[postIndex],
    ...data
  };

  return posts[postIndex];
}

export const deletePost = (id) => {
  const postIndex = posts.findIndex(post => String(post.id) === String(id));
  if (postIndex === -1) {
    return;
  }

  const deletedPost = posts[postIndex];
  posts.splice(postIndex, 1);
  return deletedPost;
}