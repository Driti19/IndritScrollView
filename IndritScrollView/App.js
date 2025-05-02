import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  alignItems,
  justifyContent,
} from 'react-native';
// import { Constants } from 'expo';

const App = () =>  {
    return (
      <View style={styles.root}>

        <View style={styles.redsection2}><Text>navbar</Text></View>
       
        <View style={styles.root2}>
          <ScrollView contentContainerStyle={{ height: 2400 }}>
            
            <View style={styles.box2}>
            <View style={styles.containerb}>
  
  <View style={styles.subcontainer1b} />
  <View style={styles.subcontainer2b} />
</View>
            </View>
            <View style={styles.box1}><Text>Section 1</Text></View>
            <View style={styles.box2}></View>
            <View style={styles.box1}></View>
          </ScrollView>
        </View>

        
           <View style={styles.redsection}><Text>footer</Text></View>


           
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    height: 100,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },

  redsection: {
    height: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  redsection2: {
    height: 100,
    backgroundColor: 'lime',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerb: { flex: 1, flexDirection: 'row' },

  subcontainer1b: {
    flex: .5,
    backgroundColor: 'powderblue',
  },
  subcontainer2b: {
    flex: .5,
    backgroundColor: 'green',
  },
});