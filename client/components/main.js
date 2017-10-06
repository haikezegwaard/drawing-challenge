import React, { Component } from 'react';
import {View, Text, Button, ImagePickerIOS, Image} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor() {
    super();
    this.state = { image: null };
  }

  componentDidMount() {
    this.pickImage();
  }

  pickImage() {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
    }, error => console.error(error));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        {this.state.image?
          <Image style={{ flex: 1 }} source={{ uri: this.state.image }} /> :
          null
        }
        <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
      </View>

    );
  }
}
