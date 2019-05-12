import { createStore, combineReducers } from 'redux';

import postsReducer from './reducers/posts';

const rootReducer = combineReducers({
  posts: postsReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
