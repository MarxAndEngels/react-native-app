import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput,Image,Linking } from 'react-native';
import React from 'react'

export default function Time() {

  let [time, setTime] = React.useState('');

  function update() {
    let date = new Date(); // (*)
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
  
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
  
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    setTime(`${hours}:${minutes}:${seconds}`)
  }

  let timerId;

  let months=[
    'Января',  
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
   ];
  let [month, setMonth] = React.useState('');
  let [day, setDay] = React.useState('');
  React.useEffect(()=>{
    let itsNow = new Date();
    setMonth(months[itsNow.getMonth()])
    setDay(itsNow.getDate())

    timerId = setInterval(update, 1000);
  },[])
  return (
    <View>
   <Text style={styles.textDate}>Ого сегодня же: {day} {month}</Text>
   <Text style={styles.textDate}>Ну ничего себе</Text>
   <Text style={styles.textDate}>А время то течет: {time}</Text>
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
    textDate:{
      marginTop: 22,
      fontSize: 20,
      color: 'snow',
      textAlign: 'center',
    },
    tinyImage: { marginTop: 14,
      width: 50, height: 50
  },
  });