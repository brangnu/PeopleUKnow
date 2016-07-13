
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
import Login  from './login.ios.js';
import Home from './home.ios.js';
import Feature1 from './feature1.ios.js'
import Feature2 from './feature2.ios.js'
import Feature3 from './feature3.ios.js'
import Feature4 from './feature4.ios.js'
import Feature5 from './feature5.ios.js'
import Feature6 from './feature6.ios.js'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(combineReducers({routerReducer}));

class App extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <View style={{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'#F5FCFF'}}/>
        <Router>
          <Route name="login" initial={true} component={Login} title="Login"/>
          <Route name="home"  component={Home} title="Home"/>
          <Route name="feature1"  component={Feature1} title="Feature1"/>
          <Route name="feature2"  component={Feature2} title="Feature2"/>
          <Route name="feature3"  component={Feature3} title="Feature3"/>
          <Route name="feature4"  component={Feature4} title="Feature4"/>
          <Route name="feature5"  component={Feature5} title="Feature5"/>
          <Route name="feature6"  component={Feature6} title="Feature6"/>
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
