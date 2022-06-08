import { StatusBar } from 'expo-status-bar';
import { Animated,StyleSheet, SafeAreaView,ScrollView, FlatList, Image, Text, View, Button,TextInput , Alert} from 'react-native';
import Test from '../Test';
import Time from '../Time';
import Images from '../Images';
import Navbar from '../Navbar';
import React from 'react'

export default function Index() {
  return (
    <ScrollView style={styles.backgrMain}>
       <SafeAreaView style={{marginTop:30 }}>

         <Navbar/>
      
        <Time />
        <Test />
        <Images />

    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgrMain: {
    flex:1,
    height: '100%',
    backgroundColor: '#18191a',
},
});

