import React, { Component } from 'react';
import {View, Text, FlatList, ImagePickerIOS, Image } from 'react-native';

import { Card, ListItem, Button, Header, Tile, FormLabel, FormInput,
  FormValidationMessage } from 'react-native-elements'

export default class SubmitForm extends Component {
  static navigationOptions = {
    title: 'Inzenden',
  };

  constructor(props){
    super(props);
    this.state = {
      image: '',
    }
  }


  pickImage() {
    const {addChallenge} = this.props.actions;
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      addChallenge(imageUri, this.textInput.value);
      this.setState({ image: imageUri });
      console.log("image: "+imageUri);
      console.log(this.textInput);
    }, error => console.error(error));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Card title='Inzenden'>
          <Text style={{marginBottom: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor
          urna, consectetur eu ornare vel, viverra a diam. Aenean tempus elit vel
          ipsum dictum, sed tristique leo mollis.
          </Text>

          <FormLabel>Titel</FormLabel>
          <FormInput textInputRef={(thisInput) => {this.textInput = thisInput}}/>
          <FormValidationMessage>Error message</FormValidationMessage><Button
            icon={{name: 'camera'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Selecteer foto'
            onPress={() => this.pickImage() }
          />
          {this.state.image ?
            <Image source={{ uri: this.state.image}} style={{flex: 1}} /> : null
          }
          <Button
            icon={{name: 'check'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Inzenden'
            onPress={() => navigate('Listing', {}) }
          />
        </Card>

      </View>
    );
  }
}
