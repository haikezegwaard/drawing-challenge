import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger'
import reducer from './client/reducers';
import AppWithNavigationState from './client/navigators/AppNavigator';


// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      promise,
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

class DrawingChallenge extends React.Component {
  store = configureStore({});

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('DrawingChallenge', () => DrawingChallenge);

export default DrawingChallenge;
