import React, { Component, PropTypes } from 'react';
import {View, ImagePickerIOS, Image, FlatList} from 'react-native';
import { List, ListItem, SearchBar, Button, Divider, Text, Card} from "react-native-elements";
import {addChallenge} from '../actions/challenges';

export default class Listing extends Component {
  static navigationOptions = {
    title: 'Mijn Challenges',
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
      this.setState({ image: imageUri });
    }, error => console.error(error));
  }

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

        <Button
          title="Select image"
          icon={{name: 'camera', type: 'font-awesome'}}
          onPress={()=>this.pickImage()}
          buttonStyle={{ backgroundColor: 'purple' }}
          />
        <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
      </Card>

    );
  }
}
