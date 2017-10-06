import { combineReducers } from 'redux';
import challenges from './challenges';
import nav from './nav';

export default combineReducers({
  //list reducers here
  challenges,
  nav
});
