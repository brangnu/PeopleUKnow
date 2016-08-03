import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';

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
      dataSource: ds.cloneWithRows(list2)
    };
  }

  _renderRow(rowData){
    return(
      <View>
        <Text>-----------------------------------------------------------</Text>
        <Text>{rowData.header}</Text>
        <Text>{rowData.text}</Text>
      </View>
    )
  }

  render(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this._renderRow(rowData)}
        />
    );
  }
}

class ScrapbookView extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={{flex:1}}>
        <Scrapbook />
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor:"black"}}>
          <TouchableHighlight>
            <Text style={{color:"white"}}>HEI</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
module.exports = ScrapbookView;
