import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  View,
  ListView
} from 'react-native';

list = ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Brang Nu', 'Håvard', 'Marianne']

class StudentList extends Component{
  constructor(props) {
      super(props);
      this.state = { username : ''};
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(list),
        db: list
      };

  }

  _createPair(){
    Actions.createpair();
  }

  _removeThis(rowData){
    console.log(rowData)
    newArray = this.state.db.slice()
    newArray.splice(newArray.indexOf(rowData),1)
    this.setState({
      dataSource : this.state.dataSource.cloneWithRows(newArray),
      db : newArray
    })
  }


  _renderRow(rowData){
    return(
      <View style={styles.container}>
        <Text style={styles.leftContainer}>
            {rowData}
        </Text>
        <TouchableHighlight onPress={() => this._removeThis(rowData)}>
          <Text style={styles.rightContainer}>Delete</Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.listViewContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}/>
          <Text style={styles.lagpar} onPress={() => this._createPair()}>
            Lag Par
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listViewContainer : {
    marginTop: 50,
    margin: 30,
    height : 500,
    marginBottom : 50
  },
  lagpar : {
    color : 'red',
    paddingBottom : 50,
    paddingTop : 20,
    fontSize : 30,
    textAlign : 'center',
    height : 50
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  leftContainer : {
    flex : 1,
    fontSize : 20,
    marginBottom : 20,
    paddingBottom : 10,
    paddingTop : 10,
    color: 'white',
    backgroundColor: 'green',
  },
  rightContainer : {
    flex : 1,
    marginBottom : 20,
    fontSize : 20,
    paddingBottom : 10,
    paddingTop : 10,
    color: 'white',
    backgroundColor: 'green',
  }
});

module.exports = StudentList;
