import { createStore, combineReducers } from 'redux';

import plantCardReducer from './reducers/plantCardReducer';

const rootReducer = combineReducers({
  plantCard: plantCardReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
