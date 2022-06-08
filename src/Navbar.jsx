import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';


export default function Navbar() {
  return (
    <View style={styles.navbar}>
    <Text style={styles.text}>НеДоКазино</Text>
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
      fontSize: 26,
      color: 'snow',
      textAlign: 'center',
    }
  });