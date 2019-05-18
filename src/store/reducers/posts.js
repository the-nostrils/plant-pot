import { ADD_POST, DELETE_POST } from '../actions/actionTypes';

const initialState = {
  postList: [
    {
      id: 1,
      username: 'Alex Boyd',
      contentType: 'existing-post',
      textContent:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim',
      isNewPost: false
    },
    {
      id: 2,
      username: 'John Doe',
      contentType: 'existing-post',
      likeCount: 1,
      textContent:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim',
      isNewPost: false
    },
    {
      id: 3,
      username: 'Lori Elliot',
      contentType: 'existing-post',
      textContent:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim',
      isNewPost: false
    },
    {
      id: 4,
      username: 'Will Collins',
      contentType: 'existing-post',
      likeCount: 24,
      textContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim',
      isNewPost: false
    },
    {
      id: 5,
      username: 'Will Collins',
      contentType: 'existing-post',
      likeCount: 48,
      textContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim',
      isNewPost: false
    },
    {
      id: 6,
      username: 'Nancy Murphy',
      contentType: 'existing-post',
      likeCount: 88,
      textContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim',
      isNewPost: false
    },
    {
      id: 7,
      username: 'Benjamin Watkins',
      contentType: 'existing-post',
      likeCount: 88,
      textContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim',
      isNewPost: false
    },
    {
      id: 8,
      username: 'Joan Mendoza',
      contentType: 'existing-post',
      likeCount: 88,
      textContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim',
      isNewPost: false
    },
    {
      id: 9,
      username: 'Alex Boyd',
      contentType: 'existing-post',
      textContent:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim',
      isNewPost: false
    },
    {
      id: 10,
      username: 'Alex Boyd',
      contentType: 'existing-post',
      textContent:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim',
      isNewPost: false
    },
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
