import { ADD_POST, DELETE_POST } from './actionTypes';

export const addPost = (textContent, username) => ({
  type: ADD_POST,
  payload: {
    textContent,
    username
  }
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: {
    id
  }
});
