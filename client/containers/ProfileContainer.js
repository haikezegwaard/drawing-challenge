import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Profile from '../components/profile';
import {
  StackNavigator,
} from 'react-navigation';
import {
  Animated,
  StyleSheet,
  View,
  NavigationExperimental
} from 'react-native';



class ProfileContainer extends Component {

  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    return (
      <Profile />
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


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
