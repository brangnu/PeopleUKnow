import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  TextInput
} from 'react-native';

import firebase from '../../utils/firebase.js';

console.log("heihei");

list = ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Brang Nu', 'Håvard', 'Marianne'];
list2 = {
  scrap1:{
    header:"Første innlegg",
    text:"asd asd asd asd asd asd asd asd sdf sdf sdf sdf sdf dfg dfg dfg ert ert ert ty tyu tyu"
  },
  scrap2:{
    header: "andre innlegg",
    text:"asdasdasdasdasddfgdfgdfgh df gdf gj dg sdf sdf h df gdf gs df dfg d fh fgh df g dfg df dfg"
  },
  scrap3:{
    header:"Første innlegg",
    text:"asd asd asd asd asd asd asd asd sdf sdf sdf sdf sdf dfg dfg dfg ert ert ert ty tyu tyu"
  },
  scrap4:{
    header: "andre innlegg",
    text:"asdasdasdasdasddfgdfgdfgh df gdf gj dg sdf sdf h df gdf gs df dfg d fh fgh df g dfg df dfg"
  },
  scrap5:{
    header:"Første innlegg",
    text:"asd asd asd asd asd asd asd asd sdf sdf sdf sdf sdf dfg dfg dfg ert ert ert ty tyu tyu"
  },
  scrap6:{
    header: "andre innlegg",
    text:"asdasdasdasdasddfgdfgdfgh df gdf gj dg sdf sdf h df gdf gs df dfg d fh fgh df g dfg df dfg"
  },
  scrap7:{
    header:"Første innlegg",
    text:"asd asd asd asd asd asd asd asd sdf sdf sdf sdf sdf dfg dfg dfg ert ert ert ty tyu tyu"
  },
  scrap8:{
    header: "andre innlegg",
    text:"asdasdasdasdasddfgdfgdfgh df gdf gj dg sdf sdf h df gdf gs df dfg d fh fgh df g dfg df dfg",
    penis:"PENIS"
  },
  scrap9:{
    header:"Første innlegg",
    text:"asd asd asd asd asd asd asd asd sdf sdf sdf sdf sdf dfg dfg dfg ert ert ert ty tyu tyu"
  },
  scrap10:{
    header: "andre innlegg",
    text:"asdasdasdasdasddfgdfgdfgh df gdf gj dg sdf sdf h df gdf gs df dfg d fh fgh df g dfg df dfg"
  },
  scrap11:{
    header:"Første innlegg",
    text:"asd asd asd asd asd asd asd asd sdf sdf sdf sdf sdf dfg dfg dfg ert ert ert ty tyu tyu"
  },
  scrap12:{
    header: "andre innlegg",
    text:"asdasdasdasdasddfgdfgdfgh df gdf gj dg sdf sdf h df gdf gs df dfg d fh fgh df g dfg df dfg"
  },
  scrap13:{
    header:"Første innlegg",
    text:"asd asd asd asd asd asd asd asd sdf sdf sdf sdf sdf dfg dfg dfg ert ert ert ty tyu tyu"
  },
  scrap14:{
    header: "andre innlegg",
    text:"asdasdasdasdasddfgdfgdfgh df gdf gj dg sdf sdf h df gdf gs df dfg d fh fgh df g dfg df dfg"
  }
};

class Scrapbook extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(list2),
      inputText: "placeholder"
    };
  }

  _renderRow(rowData, sectionID, rowID){
    return(
      <View>
        <Text>-----------------------------------------------------------</Text>
        <Text>{rowData.header}</Text>
        <Text>{rowData.text}</Text>
        <Text>{sectionID}</Text>
        <Text>{rowID}</Text>
      </View>
    )
  }

  _postToScarpbook(){
    console.log(this.state.inputText);
  }

  _renderHeader(){
    return(
      <View>
        <Text>
          your post here HEI ALF:
        </Text>
        <TextInput
          onChangeText={(inputText) => this.setState({inputText})}
          value={this.state.inputText}
        />
      <TouchableHighlight onPress={this._postToScarpbook.bind(this)}>
          <View style={{backgroundColor:"black"}}>
            <Text style={{color:"white"}}>HEI</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData, sectionID, rowID) => this._renderRow(rowData, sectionID, rowID)}
        renderHeader={() => this._renderHeader()}
        />
    );
  }
}

class ScrapbookView extends Component{
  constructor(props){
    super(props);
  }

  _testButton(){
    console.log("penis");
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Scrapbook />
        <TouchableHighlight onPress={this._testButton}>
          <View style={{backgroundColor:"black"}}>
            <Text style={{color:"white"}}>Test KNAPPEN</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
module.exports = ScrapbookView;
