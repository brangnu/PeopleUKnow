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
      <View>
        <View style={styles.container}>
          <Image style={styles.profilePicture} source={require('./img/brang.png')} />
          <Text>
            {this.props.data}
          </Text>
        </View>
        

        <View style={styles.featureContainer}>
          <View style={styles.icons}>
              <TouchableHighlight onPress={() => Actions.feature1(this.props.data)}>
                <Image source={require('./img/brang.png')} />
              </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.feature2(this.props.data)}>
                <Image source={require('./img/brang.png')} />
              </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.feature3(this.props.data)}>
                <Image source={require('./img/brang.png')} />
              </TouchableHighlight>
          </View>
          
          <View style={styles.icons}>
              <TouchableHighlight onPress={() => Actions.feature4(this.props.data)}>
                <Image source={require('./img/brang.png')} />
              </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.feature5(this.props.data)}>
                <Image source={require('./img/brang.png')} />
              </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.feature6(this.props.data)}>
                <Image source={require('./img/brang.png')} />
              </TouchableHighlight>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    marginTop : 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop : 20
  },
  profilePicture : {
    marginTop : 150,
    width : 100,
    height : 100,
  },
  icons: {
    flex : 1,
    flexDirection : 'row',
    flexWrap : 'wrap',
    justifyContent: 'space-between',
    marginBottom : 20,
    marginLeft : 15,
    marginRight : 15
  },

  featureContainer : {
    marginTop : 50
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
