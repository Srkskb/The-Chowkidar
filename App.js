import { TabRouter } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import Route from './src/router/route'




const App= () => {

  return (
   <View style={{flex:1}}>
     <Route/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
