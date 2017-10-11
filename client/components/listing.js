import React, { Component, PropTypes } from 'react';
import {View, ImagePickerIOS, Image, FlatList} from 'react-native';
import { List, ListItem, SearchBar, Button, Divider, Text, Card} from "react-native-elements";
import {addChallenge} from '../actions/challenges';

export default class Listing extends Component {
  static navigationOptions = {
    title: 'Mijn Challenges',
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    const { navigate } = this.props.navigation;
    const { challenges } = this.props;
    return (
      <Card title="Mijn challenges">

        {challenges &&
          <FlatList
            data={challenges}
            renderItem={({item}) =>
              (<ListItem
               roundAvatar
               title={item.description}
               subtitle="subtitle"
               avatar={{ uri: item.image }}
               containerStyle={{ borderBottomWidth: 0 }}
               />)}
            keyExtractor={item => item.image}
          />
        }
      </Card>

    );
  }
}
