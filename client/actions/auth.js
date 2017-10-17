import * as actions from '../constants/auth';

export function signin(email, pwd){
  return Promise.resolve({
    type: actions.SIGNIN });
}

export function logout(){
  return Promise.resolve({
    type: actions.LOGOUT });
}

export function signup(email, pwd){
  return Promise.resolve({
    type: actions.SIGNUP });
}
