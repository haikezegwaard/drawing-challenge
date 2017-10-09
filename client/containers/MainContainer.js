import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Main from '../components/main';
import * as challengeActions from '../actions/challenges';

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
    const {actions} = this.props;
    return (
      <Main {...this.props} />
    );
  }
}

function mapState(state) {
  return {
    challenges: state.challenges,
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({ ...challengeActions }, dispatch)
  };
}

export default connect(mapState, mapDispatch)(MainContainer);

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
