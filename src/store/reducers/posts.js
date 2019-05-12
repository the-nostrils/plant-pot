import { ADD_POST, DELETE_POST } from '../actions/actionTypes';

const initialState = {
  postList: [
    {
      id: 1,
      username: 'Daris Calinor',
      contentType: 'existing-post',
      textContent: 'Trolololo',
      isNewPost: false
    },
    {
      id: 2,
      username: 'John Doe',
      contentType: 'existing-post',
      likeCount: 1,
      textContent: 'Lorem',
      isNewPost: false
    },
    {
      id: 3,
      username: 'David Copperfield',
      contentType: 'existing-post',
      textContent: 'Lorem ipsum',
      isNewPost: false
    },
    {
      id: 4,
      username: 'Jon Snow',
      contentType: 'existing-post',
      likeCount: 24,
      textContent: 'I know nothing.',
      isNewPost: false
    },
    {
      id: 5,
      username: 'Daris Calinor',
      contentType: 'existing-post',
      likeCount: 48,
      textContent: 'yada yada yada',
      isNewPost: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const { textContent, username } = action.payload;
      const updatedPostList = [...state.postList];

      const newPostToPush = {
        id: state.postList.length + 2,
        username,
        contentType: 'existing-post',
        textContent
      };
      updatedPostList.unshift(newPostToPush);

      return {
        ...state,
        postList: updatedPostList
      };
    }
    case DELETE_POST: {
      const { id } = action.payload;
      const updatedPostList = state.postList.filter(post => post.id !== id);

      return {
        ...state,
        postList: updatedPostList
      };
    }
    default:
      return state;
  }
};

export default reducer;
