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
  View,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-redux-router';

class Feature4 extends Component {

  constructor(props) {
      super(props);
      this.state = { username : ''};
  }

  backToHome(username){
    this.state.username = username;
    Actions.home(this.state.username);
  }

  render() {
    let Actions = this.props.routes;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Feature #4!
        </Text>
        <View>
          <TouchableOpacity onPress={() => this.backToHome(this.props.data)} >
            <Text style={styles.welcome}>
              Back to home!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    marginTop : 35,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop : 20
  },
  appicon : {
    marginTop : 150,
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
module.exports = Feature4;