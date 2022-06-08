import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput,Image,Linking } from 'react-native';
import React from 'react'

export default function Navbar() {
  return (
    <View>
    <View style={{justifyContent: 'center',
    alignItems: 'center'}}>
<Text style={styles.text} onPress={() => Linking.openURL('https://vk.com/id145594406')}> 
  Мой вк  <Image 
        source={
          require('../assets/vk.png')
        }
        style={styles.tinyImage}
      />
</Text>

</View>
<View  style={{justifyContent: 'center',
    alignItems: 'center'}}>
<Text onPress={() => Linking.openURL('https://t.me/qwerty_maks')} style={styles.text}
      >
  Мой телеграм <Image
        source={
          require('../assets/telegram.png')
        }
        style={styles.tinyImage}
      />
</Text>
</View>
  </View>
  )
}


const styles = StyleSheet.create({
    navbar: {
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor: '#06bcee',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      marginTop: 14,
      fontSize: 16,
      color: 'snow',
      textAlign: 'center',
    },
    tinyImage: { marginTop: 14,
      width: 50, height: 50
  },
  });