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

class Login extends Component {

  constructor(props) {
      super(props);
      this.state = { };
  }


  _onPressButton(username, password){
    if (username == 'student1' && password == 'secret'){
      console.log("you are logged inASD");
      Actions.home();
    }else {
      console.log('wrong.please try again.')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.appicon} source={require('./img/appicon.png')} />

        <Text style={styles.welcome}>
          Welcome to PeopleUKnow!
        </Text>


        <TextInput
            autoCapitalize={'none'}
            style={styles.username}
            onChangeText={(username) => this.setState({username})}
            value = {this.state.username}
            placeholder={'Username'}/>

        <TextInput
            autoCapitalize={'none'}
            style={styles.password}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder={'Password'}/>

        <TouchableHighlight style={{ marginTop : 10}} onPress={() => this._onPressButton(this.state.username, this.state.password)}>
              <Image
                style={styles.button}
                source={require('./img/login.png')}/>
        </TouchableHighlight>

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
module.exports = Login;
