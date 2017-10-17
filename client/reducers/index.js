import { combineReducers } from 'redux';
import challenges from './challenges';
import nav from './nav';
import auth from './auth';

export default combineReducers({
  //list reducers here
  challenges,
  nav,
  auth,
});
