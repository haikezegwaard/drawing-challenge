import React, { Component } from 'react';
import {View, Text, FlatList } from 'react-native';

import { Card, ListItem, Button, Header, Tile } from 'react-native-elements';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Main',
    tabBarLabel: 'Main',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { challenges, auth } = this.props;
    let loginmsg = <Button
            icon={{name: 'account-circle'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10}}
            title='Inloggen!'
            onPress={() => navigate('Login', {}) }
          />;
    if(auth.loggedin){
      loginmsg = <Button
            icon={{name: 'camera'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10}}
            title='Meedoen!'
            onPress={() => navigate('Submit', {}) }
          />;
    }
    return (
      <View>
        <Card
          title='Titel van challenge'
          image={require('../images/landscape.jpg')}
        >
          <Text style={{marginBottom: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor
          urna, consectetur eu ornare vel, viverra a diam. Aenean tempus elit vel
          ipsum dictum, sed tristique leo mollis. Integer et finibus est. Etiam
          interdum in dui sed consectetur. Nullam pulvinar odio in massa dapibus,
          quis placerat neque blandit. Integer ultricies nulla mauris, vitae iaculis
          enim finibus vel. Fusce pellentesque euismod nibh sodales tempor. Integer
          ac erat rhoncus, tristique neque sit amet, pretium tortor. Nullam non odio
          molestie mauris pulvinar sagittis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
          </Text>

        </Card>
        {loginmsg}
      </View>

    );
  }
}
