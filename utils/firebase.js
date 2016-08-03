import React from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyA9szKAqBVSmnkRPQnz9LkmdDYmdQXD_Gs",
    authDomain: "peopleuknow-e1677.firebaseapp.com",
    databaseURL: "https://peopleuknow-e1677.firebaseio.com",
    storageBucket: "peopleuknow-e1677.appspot.com",
};


const firebaseApp = firebase.initializeApp(config);
module.exports = firebaseApp;
