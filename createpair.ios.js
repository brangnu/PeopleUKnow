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

import {DropDown,
  Select,
  Option,
  OptionList,
} from 'react-native-selectme';

import firebase from './utils/firebase.js'

class CreatePair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avoid: [{first: ''}, {second : ''}],
      set: [{first: ''}, {second: ''}]
    };

    this.settings = [{avoid: {first: '', second: ''}}, {set: {first: '', second: ''}}, {antallIGruppe : 1}]
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  _setting(num, type, person){
    if (type === 'avoid' && num === 1){
      this.settings[0].avoid.first = person
    }else if (type === 'avoid' && num === 2){
      firebase.auth().signInWithEmailAndPassword('brangnu@gmail.com', 'adminuser')
      firebase.database().ref('Users/' + 'Test12/').set({
        name: person,
        email: 'helloworld@gmail.com'
      })
      this.settings[0].avoid.second = person
    }
    if (type === 'set' && num === 1){
      this.settings[1].set.first = person
    }else if (type === 'set' && num === 2){
      this.settings[1].set.second = person
    }
    console.log(this.settings[0].avoid.first + " avoids " + this.settings[0].avoid.second)
    console.log(this.settings[1].set.first + " sets " + this.settings[1].set.second)
    console.log(this.settings[2].antallIGruppe)
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>
            Spesielle hensyn
          </Text>
          <Select
            style={{ marginBottom: 30}}
            width={120}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Antall i gruppa"
            onSelect={(antall) => this.settings[2].antallIGruppe = antall}>
            <Option>2</Option>
            <Option>3</Option>
            <Option>5</Option>
            </Select>
        </View>
        <Text>
          Unngår Par
        </Text>
          <Select
            width={100}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select"
            onSelect={(person) => this._setting(1, 'avoid', person)}>
            <Option>Brang</Option>
            <Option>Håvard</Option>
            <Option>Ken</Option>
          </Select>
          <Select
            width={100}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select"
            onSelect={(person) => this._setting(2, 'avoid', person)}>
            <Option>Brang2</Option>
            <Option>Håvard2</Option>
            <Option>Ken2</Option>
          </Select>

          <View style={styles.choice}>
            <Text>
              Sett Par
            </Text>
          <Select
            width={100}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select"
            onSelect={(person) => this._setting(1, 'set', person)}>
            <Option>Brang</Option>
            <Option>Håvard</Option>
            <Option>Ken</Option>
          </Select>
          <Select
            width={100}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select"
            onSelect={(person) => this._setting(2, 'set', person)}>
            <Option>Brang2</Option>
            <Option>Håvard2</Option>
            <Option>Ken2</Option>
          </Select>
          </View>
          <OptionList ref="OPTIONLIST"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		marginTop : 50,
		marginLeft : 20
	},
  choice: {
    marginTop: 50
  }
});

module.exports = CreatePair;