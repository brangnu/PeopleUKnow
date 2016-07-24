
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

class CreatePair extends Component {
	constructor(props){
		super(props);
      	this.state = { username : ''};
	}

	_backToHome(){
		Actions.home();
	}
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.leftContainer}>
					Lag par kombinasjon kommer her..
				</Text>
				<Text style={styles.rightContainer} onPress={() => this._backToHome()}>
					Back to Home!
				</Text>
			</View>
			
		)
	}
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : 'green',
		//flexDirection: 'row',
		justifyContent: 'center',
        alignItems: 'center',
	},
	leftContainer: {
		fontSize: 30,
		//flex : 1,
		//flexDirection: 'row',
		//backgroundColor : 'black',
		color: 'white',
		textAlign: 'center'
		//flexWrap: 'nowrap'
	},
	rightContainer: {
		fontSize: 30,
		//flex: 1,
		//backgroundColor: 'red',
	}
});

module.exports = CreatePair;