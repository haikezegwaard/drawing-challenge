import React, { Component, PropTypes } from 'react';
import {View, ImagePickerIOS, Image, FlatList} from 'react-native';
import { List, ListItem, SearchBar, Button, Divider, Text, Card} from "react-native-elements";
import {addChallenge} from '../actions/challenges';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Listing extends Component {
  static navigationOptions = {
    title: 'Challenge',
  };

  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = { image: null, messages: [] };
  }

  componentDidMount() {
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
          <GiftedChat
            messages={this.state.messages}
            onSend={(messages) => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        </View>


    );
  }
}
