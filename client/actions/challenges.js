import * as actions from '../constants/challenges';

export function getAllChallenges(){
  return Promise.resolve({
    type: actions.GET_ALL_CHALLENGES,
    challenges: []});
}

export function addChallenge(image, description){
  return Promise.resolve({
    type: actions.ADD_CHALLENGE,
    challenge: {image: image, description: description}
  });
}
