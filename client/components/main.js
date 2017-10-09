import React, { Component, PropTypes } from 'react';
import {View, Text, Button, ImagePickerIOS, Image, FlatList} from 'react-native';
import {addChallenge} from '../actions/challenges';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Welcome',
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

  pickImage() {
    const {addChallenge} = this.props.actions;
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      addChallenge(imageUri, 'foobar');
      //this.setState({ image: imageUri });
    }, error => console.error(error));
  }

  render() {
    const { navigate } = this.props.navigation;
    const { challenges } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {/*{this.state.image?*/}
          {/*<Image style={{ flex: 1 }} source={{ uri: this.state.image }} /> :*/}
          {/*null*/}
        {/*}*/}
        {/*{challenges &&*/}
          {/*<FlatList*/}
            {/*data={challenges}*/}
            {/*renderItem={({item}) => <View><Image style={{ flex: 1 }} source={{ uri: item.image }} /><Text>{item.description}</Text></View>}*/}
          {/*/>*/}
        {/*}*/}
        <Button
          title="Select image"
          onPress={()=>this.pickImage()}
          />
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
