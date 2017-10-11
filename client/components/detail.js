import React, { Component, PropTypes } from 'react';
import {View, ImagePickerIOS, Image, FlatList} from 'react-native';
import { List, ListItem, SearchBar, Button, Divider, Text, Card} from "react-native-elements";
import {addChallenge} from '../actions/challenges';

export default class Listing extends Component {
  static navigationOptions = {
    title: 'Challenge',
  };

  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = { image: null };
  }

  componentDidMount() {
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
        <Card
          title='HELLO WORLD'
          image={require('../images/landscape.jpg')}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Mijn challenges'
            onPress={() => navigate('Listing', {}) }
          />
        </Card>

    );
  }
}
