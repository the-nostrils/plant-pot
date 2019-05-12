import { createStore, combineReducers } from 'redux';

import postsReducer from './reducers/posts';
import usersReducer from './reducers/users';

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
