import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import LoginForm from '../components/loginform';
import SignupForm from '../components/signupform';
import * as challengeActions from '../actions/challenges';
import * as authActions from '../actions/auth';

import {
  Animated,
  StyleSheet,
  View,
  NavigationExperimental,
  Text,
} from 'react-native';



class AuthContainer extends Component {

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {signin: true};
  }

  toggleSigninSignup(){
    console.log('old:'+this.state.signin);
    this.setState({signin: !this.state.signin});
    console.log('mew: '+ this.state.signin);
  }

  render() {
    let component = <SignupForm {...this.props} />;
    if(this.state.signin){
      component = <LoginForm {...this.props} />
    }
    return (
      <View>
        {component}
        <View>
          <Text style={{marginTop: 10, textAlign: 'center'}}>Geen account? Klik
              <Text style={{color: 'blue'}} onPress={() => this.toggleSigninSignup()}> hier</Text>
          </Text>
        </View>
      </View>
    );
  }
}

function mapState(state) {
  return {
    challenges: state.challenges,
    auth: state.auth,
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({ ...challengeActions, ...authActions }, dispatch)
  };
}

export default connect(mapState, mapDispatch)(AuthContainer);

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
