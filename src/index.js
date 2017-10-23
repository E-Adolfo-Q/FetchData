/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Alert  
} from 'react-native'; 

import styles from './style'
import ChildComponent from './ChildComponent'

class HelloWorld extends Component {
  constructor(){
    super()
    this.state = {      
      data: []
    }
  }
     
  componentDidMount(){
   this._refreshData();
  } 
  
  _refreshData = async () => {
    const url = 'https://facebook.github.io/react-native/movies.json'    
    const response = await fetch(url)
    const json = await response.json();
    this.setState({ data:json.movies})
  }

  FlatListItemSeparator = () => {
    return(
      <View 
       style={{
         height:1,
         width:"100%",
         backgroundColor:'#607D8B'
       }}
      />      
    )
  }

  getItem(item){    
    Alert.alert(item)    
  }

  _renderItem = ({item}) => {
    return(
      <ChildComponent 
        title={item.title}
        year={item.releaseYear}
        getItems={() => this.getItem(`${item.title} - ${item.releaseYear}`)}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
            data={this.state.data}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            keyExtractor={item => item.title}               
        /> 
      </View>      
    );
  }
}

export default HelloWorld;



