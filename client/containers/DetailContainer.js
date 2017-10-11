import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Detail from '../components/detail';
import * as challengeActions from '../actions/challenges';

import {
  Animated,
  StyleSheet,
  View,
  NavigationExperimental
} from 'react-native';

class DetailContainer extends Component {

  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    const {actions} = this.props;
    return (
      <Detail {...this.props} />
    );
  }
}

function mapState(state) {
  return {
    challenge: state.challenge,
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({ ...challengeActions }, dispatch)
  };
}

export default connect(mapState, mapDispatch)(DetailContainer);

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
