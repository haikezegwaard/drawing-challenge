import * as actions from '../constants/challenges';

export function getAllChallenges(){
  return Promise.resolve({
    type: actions.GET_ALL_CHALLENGES,
    challenges: ['bar','foo']});
}
