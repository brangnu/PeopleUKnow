
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

import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router';
import Login  from './components/android/login.android.js';
import Home from './components/android/home.android.js';
import StudentList from './components/android/student_list.android.js';
import Scrapbook from './components/android/scrapbook.android.js';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(combineReducers({routerReducer}));

class App extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <View style={{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'#F5FCFF'}}/>
        <Router>
          <Route name="login"  component={Login} title="Login"/>
          <Route name="home"  component={Home} title="Home"/>
          <Route name="student_list" component={StudentList} title="StudenList/"/>
          <Route name="scrapbook" initial={true} component={Scrapbook} title="Scrapbook/" />
        </Router>
      </View>
    );
  }
}
class puk extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('puk', () => puk);
