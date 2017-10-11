import * as actions from '../constants/challenges';


const initialState = [];

/**
 * Reducer for challenge list
 * @param state
 * @param action
 * @returns {*}
 */
export default function challenges(state = initialState, action) {

  switch (action.type) {

    case actions.GET_ALL_CHALLENGES: {
      return action.challenges;
    }

    case actions.ADD_CHALLENGE: {
      return [...state, action.challenge];
    }

    default: {
      return state;
    }
  }
}
