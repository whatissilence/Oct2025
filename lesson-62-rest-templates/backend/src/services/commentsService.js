import { comments } from '../models/comments.js';

export const getCommentsByPostId = (postId) => {
  return comments.filter(comm => String(comm.postId) === String(postId));
}

export const getCommentById = (commId) => {
  return comments.find(comm => String(comm.id) === String(commId));
}

export const deleteComment = (id) => {
  const commIndex = comments.findIndex(comm => String(comm.id) === String(id));
  if (commIndex === -1) {
    return;
  }

  const deletedComment = comments[commIndex];
  comments.splice(commIndex, 1);
  return deletedComment;
}