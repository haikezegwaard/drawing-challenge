import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';
import { Card, ListItem, Button, Header, Tile } from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class LoginForm extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleLogin(email, pwd){
    const {signin} = this.props.actions;
    const { navigate } = this.props.navigation;
    console.log('handle login');
    signin('foo', 'bar').then(()=>{navigate('Main', {})});
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Card title="Login">
          <FormLabel>Email</FormLabel>
          <FormInput />
          <FormValidationMessage>Error message</FormValidationMessage>
          <FormLabel>Wachtwoord</FormLabel>
          <FormInput />
          <FormValidationMessage>Error message</FormValidationMessage>
          <Button
            icon={{name: 'check'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Inloggen'
            onPress={()=>this.handleLogin()}
          />


        </Card>
      </View>
    );
  }
}
