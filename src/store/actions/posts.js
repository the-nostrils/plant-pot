import { ADD_POST, DELETE_POST } from './actionTypes';

export const addPost = (textContent, username) => {
  return {
    type: ADD_POST,
    payload: {
      textContent,
      username
    }
  };
};

export const deletePost = () => {
  return {
    type: DELETE_POST
  };
};
