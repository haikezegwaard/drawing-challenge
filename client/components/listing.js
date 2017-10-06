import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

export default class Listing extends Component {
  static navigationOptions = {
    title: 'Listing',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Go back to home"
          onPress={() =>
            navigate('Main', {})
          }
        />
        <Button
          title="Edit profile"
          onPress={() =>
            navigate('Profile', {name: 'Haike'})
          }
        />
      </View>
    );
  }
}
