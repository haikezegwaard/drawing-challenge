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
      description: '',
    }

  }

  updateDescription(value){
    this.setState({description: value});
  }

  pickImage() {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
    }, error => console.error(error));
  }

  handleSubmit(){
    const {addChallenge} = this.props.actions;
    const { navigate } = this.props.navigation;
    console.log('adding challenge');
    console.log(this.state);
    addChallenge(this.state.image, this.state.description).then(() => navigate('Listing', {}));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Card title='Inzenden' image={this.state.image ? {uri: this.state.image} : null}>
          <Text style={{marginBottom: 10}}>
            {this.state.description}
          </Text>
          <Button
            icon={{name: 'camera'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Selecteer foto'
            onPress={() => this.pickImage() }
          />
          <FormLabel>Titel</FormLabel>
          <FormInput
            onChangeText={(value)=>{this.updateDescription(value)}}
            value={this.state.description}
          />
          <FormValidationMessage>{this.state.description ? null : 'Geef een beschrijving op'}</FormValidationMessage>

          <Button
            icon={{name: 'check'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Inzenden'
            onPress={()=>this.handleSubmit()}
          />
        </Card>

      </View>
    );
  }
}
