import * as actions from '../constants/auth';


const initialState = {loggedin: false};

/**
 * Reducer for authorization list
 * @param state
 * @param action
 * @returns {*}
 */
export default function auth(state = initialState, action) {

  switch (action.type) {

    case actions.SIGNIN: {
      return {loggedin: true};
    }

    case actions.SIGNUP: {
      return {loggedin: true};
    }

    case actions.LOGOUT: {
      return {loggedin: false}
    }

    default: {
      return state;
    }
  }
}
