/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
import {Actions} from 'react-native-redux-router';

class Home extends Component {

  constructor(props) {
      super(props);
      this.state = { };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.appicon} source={require('./img/appicon.png')} />

        <Text style={styles.welcome}>
          Welcome to PeopleUKnow!
        </Text>

        <Text style={styles.welcome}>
          Welcome to PeopleUKnow!
        </Text>
        <Text style={styles.welcome}>
          Logged In
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop : 35,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  appicon : {
    marginTop : 10,
    width : 50,
    height : 50
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  username:{
    borderWidth : 2,
    height : 40,
    width : 200,
    marginLeft : 60,
    marginRight : 50,
    paddingLeft : 10,
    marginTop : 100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },

  password:{
    borderWidth : 2,
    height : 40,
    width : 200,
    marginLeft : 60,
    marginRight : 50,
    paddingLeft : 10,
    marginTop : 10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
});
module.exports = Home;
