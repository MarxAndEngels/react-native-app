import { StatusBar } from 'expo-status-bar';
import { Animated,StyleSheet, SafeAreaView,ScrollView, FlatList, Image, Text, View, Button,TextInput , Alert} from 'react-native';
import Navbar from './src/Navbar';
import React from 'react'
import MainIndex from './src/MainApp/Index';
import TestIndex from './src/Contact/Index';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
<NavigationContainer>
<Tab.Navigator screenOptions={{
    headerShown: false,
    tabBarStyle: {
      allowFontScaling: true,
      paddingTop: 0,
      marginBottom: 18,
      backgroundColor: '#18191a',
      position: 'absolute',
      borderTopWidth: 0,
    
  },
  tabBarLabelStyle: {
    fontSize: 17
  },
  tabBarActiveTintColor: 'snow',
          tabBarInactiveTintColor: 'snow',
          tabBarIcon: () => {
            return
          },
  }}
  >
  <Tab.Screen name="Главная" component={MainIndex} />
  <Tab.Screen name="Контакты" component={TestIndex} />
</Tab.Navigator>
</NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={Navbar} />
    //     <Tab.Screen name="Settings" component={Main} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    // <ScrollView style={styles.backgrMain}>
    //    <SafeAreaView style={{marginTop:30 }}>

    //      <Navbar/>

    //     <Main />

    // </SafeAreaView>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgrMain: {
    flex:1,
    height: '100%',
    backgroundColor: '#18191a',
},
});
