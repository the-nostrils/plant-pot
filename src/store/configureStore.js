import { createStore, combineReducers } from 'redux';

import postsReducer from './reducers/posts';
import usersReducer from './reducers/users';
import plantsReducer from './reducers/plants';

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  plants: plantsReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
