import { StatusBar } from 'expo-status-bar';
import { Animated,StyleSheet, SafeAreaView,ScrollView, FlatList, Image, Text, View, Button,TextInput , Alert} from 'react-native';
import Main from '../Main';
import Navbar from '../Navbar';
import React from 'react'

export default function Index() {

  return (
    <View style={styles.backgrMain}>
       <SafeAreaView style={{marginTop:30 }}>

         <Navbar/>
        <Main/>

    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgrMain: {
    flex:1,
    height: '100%',
    backgroundColor: '#18191a',
},
});

