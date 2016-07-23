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
  ListView,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-redux-router';

list = ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian']

class Feature1 extends Component {

  constructor(props) {
      super(props);
      this.state = { username : ''};
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(list),
        db: list
      };

  }

  backToHome(username){
    this.state.username = username;
    Actions.home(this.state.username);
  }

  removeThis(rowData){
    newArray = this.state.db.slice()
    newArray.splice(newArray.indexOf(rowData),1)
    this.setState({
      dataSource : this.state.dataSource.cloneWithRows(newArray),
      db : newArray
    })
  }

  render() {
    let Actions = this.props.routes;
    return (
      <View style={styles.listview}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={styles.listviewcontent} 
        onPress={() => this.removeThis(rowData)}>{rowData}</Text>}/>
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
  listview : {
    marginTop : 100,
    flex : 1,
    height : 500
  },
  listviewcontent : {
    marginBottom : 30,
    marginLeft: 40,
    marginRight: 40,
    color : 'white',
    backgroundColor: 'green',
    fontSize : 20,
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
module.exports = Feature1;
