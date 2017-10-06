import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Main from '../components/main';

import {
  Animated,
  StyleSheet,
  View,
  NavigationExperimental
} from 'react-native';



class MainContainer extends Component {

  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    return (
      <Main />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {

  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
