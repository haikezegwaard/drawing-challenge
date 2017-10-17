import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';
import { Card, ListItem, Button, Header, Tile } from 'react-native-elements';

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profiel',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Card title="Mijn profiel">

                  </Card>
      </View>
    );
  }
}
