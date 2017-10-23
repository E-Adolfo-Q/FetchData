import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import styles from './style'

 const ChildComponent = ({title,year,getItems}) => 
  <TouchableOpacity onPress={getItems}>         
      <View style={styles.container}>
        <Text style={styles.item}>{`${title} ${year}`}</Text>          
      </View>
  </TouchableOpacity> 

 export default ChildComponent

