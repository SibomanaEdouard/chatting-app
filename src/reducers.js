// reducers.js
import { combineReducers } from 'redux';
import userReducer from './ResponseContext';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
