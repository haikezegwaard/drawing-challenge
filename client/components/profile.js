import React, { Component } from 'react';
import {Button, View, Text, FlatList} from 'react-native';

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Profile!</Text>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
        <Button
        title="Go back to home"
        onPress={() =>
          navigate('Main', {})
        }
      />
      </View>
    );
  }
}
