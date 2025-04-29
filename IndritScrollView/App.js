import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import { Constants } from 'expo';

const App = () =>  {
    return (
      <View style={styles.root}>

        <View style={styles.redsection2}></View>
       
        <View style={styles.root2}>
          <ScrollView contentContainerStyle={{ height: 2400 }}>
            <View style={styles.box1}><Text>navbar</Text></View>
            <View style={styles.box2}></View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box1}></View>
          </ScrollView>
        </View>

        
           <View style={styles.redsection}></View>
           
        </View>
    );
  
}

export default App; 

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  root2: {
    flex: 1, 
  },
  box1: {
    height: 100,
    backgroundColor: 'blue',
  },
  box2: {
    height: 100,
    backgroundColor: 'purple',
  },

  redsection: {
    height: 200,
    backgroundColor: 'red',
  },
  redsection2: {
    height: 200,
    backgroundColor: 'lime',
  },
});