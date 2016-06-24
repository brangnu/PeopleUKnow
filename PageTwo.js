import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageTwo extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.pageThree}>This is PageTwo!</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('PageTwo', () => PageTwo);