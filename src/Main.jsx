import { StatusBar } from 'expo-status-bar';
import { Animated,StyleSheet, SafeAreaView,ScrollView, FlatList, Image, Text, View, Button,TextInput , Alert} from 'react-native';
import React from 'react'
import { Audio } from 'expo-av';



export default function Main() {
 //sound
 const [sound, setSound] = React.useState();

  async function playSoundMoney() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/mus/money.mp3')
   );
    setSound(sound);
    await sound.playAsync(); 
  }
  async function playSoundLose() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/mus/lose.mp3')
   );
    setSound(sound);
    await sound.playAsync(); 
  }
  async function playSoundSpin() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/mus/spin.mp3')
   );
    setSound(sound);
    await sound.playAsync(); 
  }
  async function playSoundWin() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/mus/win.mp3')
   );
    setSound(sound);
    await sound.playAsync(); 
  }
  

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
 //sound

  const value = React.useRef(new Animated.Value(0)).current

  let start =[
    {id:1,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:2,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:3,uri:'https://sun9-56.userapi.com/s/v1/ig2/XSemxJyFJUhBDzgUg1P4Aac9gj1J7XJiHmDsX3izKBnUE31RUvvqNjWvxcTGIIWk3KlUwYt71KbPF_2nEj3O5D3O.jpg?size=512x512&quality=96&type=album', name:'Деньги',status: 0},
    {id:4,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:5,uri:'https://sun9-56.userapi.com/s/v1/ig2/XSemxJyFJUhBDzgUg1P4Aac9gj1J7XJiHmDsX3izKBnUE31RUvvqNjWvxcTGIIWk3KlUwYt71KbPF_2nEj3O5D3O.jpg?size=512x512&quality=96&type=album', name:'Деньги',status: 0},
    {id:6,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:7,uri:'https://sun9-56.userapi.com/s/v1/ig2/XSemxJyFJUhBDzgUg1P4Aac9gj1J7XJiHmDsX3izKBnUE31RUvvqNjWvxcTGIIWk3KlUwYt71KbPF_2nEj3O5D3O.jpg?size=512x512&quality=96&type=album', name:'Деньги',status: 0},
    {id:8,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:9,uri:'https://sun9-48.userapi.com/s/v1/ig2/zmQHmMCPZAsLYkcfz6el9uv1u-eKgVW3JebnGrJUX-VaQDrL-9opo0-Qq0sUPRu8C9RmZlPngXpRuv2Ch3ROCah0.jpg?size=512x512&quality=96&type=album', name:'Яблоко',status: 0},
    {id:10,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:11,uri:'https://sun9-48.userapi.com/s/v1/ig2/zmQHmMCPZAsLYkcfz6el9uv1u-eKgVW3JebnGrJUX-VaQDrL-9opo0-Qq0sUPRu8C9RmZlPngXpRuv2Ch3ROCah0.jpg?size=512x512&quality=96&type=album', name:'Яблоко',status: 0},
    {id:12,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:13,uri:'https://sun9-56.userapi.com/s/v1/ig2/XSemxJyFJUhBDzgUg1P4Aac9gj1J7XJiHmDsX3izKBnUE31RUvvqNjWvxcTGIIWk3KlUwYt71KbPF_2nEj3O5D3O.jpg?size=512x512&quality=96&type=album', name:'Деньги',status: 0},
    {id:14,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:15,uri:'https://sun9-56.userapi.com/s/v1/ig2/XSemxJyFJUhBDzgUg1P4Aac9gj1J7XJiHmDsX3izKBnUE31RUvvqNjWvxcTGIIWk3KlUwYt71KbPF_2nEj3O5D3O.jpg?size=512x512&quality=96&type=album', name:'Деньги',status: 0},
    {id:16,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0,},
    {id:17,uri:'https://sun9-56.userapi.com/s/v1/ig2/XSemxJyFJUhBDzgUg1P4Aac9gj1J7XJiHmDsX3izKBnUE31RUvvqNjWvxcTGIIWk3KlUwYt71KbPF_2nEj3O5D3O.jpg?size=512x512&quality=96&type=album', name:'Деньги',status: 0},
    {id:18,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:19,uri:'https://sun9-48.userapi.com/s/v1/ig2/zmQHmMCPZAsLYkcfz6el9uv1u-eKgVW3JebnGrJUX-VaQDrL-9opo0-Qq0sUPRu8C9RmZlPngXpRuv2Ch3ROCah0.jpg?size=512x512&quality=96&type=album', name:'Яблоко',status: 0},
    {id:20,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:21,uri:'https://sun9-48.userapi.com/s/v1/ig2/zmQHmMCPZAsLYkcfz6el9uv1u-eKgVW3JebnGrJUX-VaQDrL-9opo0-Qq0sUPRu8C9RmZlPngXpRuv2Ch3ROCah0.jpg?size=512x512&quality=96&type=album', name:'Яблоко',status: 0},
    {id:22,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:23,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:24,uri:'https://sun9-56.userapi.com/s/v1/ig2/XSemxJyFJUhBDzgUg1P4Aac9gj1J7XJiHmDsX3izKBnUE31RUvvqNjWvxcTGIIWk3KlUwYt71KbPF_2nEj3O5D3O.jpg?size=512x512&quality=96&type=album', name:'Деньги',status: 0},
    {id:25,uri:'https://sun9-56.userapi.com/s/v1/ig2/XSemxJyFJUhBDzgUg1P4Aac9gj1J7XJiHmDsX3izKBnUE31RUvvqNjWvxcTGIIWk3KlUwYt71KbPF_2nEj3O5D3O.jpg?size=512x512&quality=96&type=album', name:'Деньги',status: 0},
    {id:26,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:27,uri:'https://sun9-56.userapi.com/s/v1/ig2/XSemxJyFJUhBDzgUg1P4Aac9gj1J7XJiHmDsX3izKBnUE31RUvvqNjWvxcTGIIWk3KlUwYt71KbPF_2nEj3O5D3O.jpg?size=512x512&quality=96&type=album', name:'Деньги',status: 0},
    {id:28,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:29,uri:'https://sun9-48.userapi.com/s/v1/ig2/zmQHmMCPZAsLYkcfz6el9uv1u-eKgVW3JebnGrJUX-VaQDrL-9opo0-Qq0sUPRu8C9RmZlPngXpRuv2Ch3ROCah0.jpg?size=512x512&quality=96&type=album', name:'Яблоко',status: 0},
    {id:30,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:31,uri:'https://sun9-48.userapi.com/s/v1/ig2/zmQHmMCPZAsLYkcfz6el9uv1u-eKgVW3JebnGrJUX-VaQDrL-9opo0-Qq0sUPRu8C9RmZlPngXpRuv2Ch3ROCah0.jpg?size=512x512&quality=96&type=album', name:'Яблоко',status: 0},
    {id:32,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:33,uri:'https://sun9-56.userapi.com/s/v1/ig2/XSemxJyFJUhBDzgUg1P4Aac9gj1J7XJiHmDsX3izKBnUE31RUvvqNjWvxcTGIIWk3KlUwYt71KbPF_2nEj3O5D3O.jpg?size=512x512&quality=96&type=album', name:'Деньги',status: 0},
    {id:34,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:35,uri:'https://sun9-56.userapi.com/s/v1/ig2/XSemxJyFJUhBDzgUg1P4Aac9gj1J7XJiHmDsX3izKBnUE31RUvvqNjWvxcTGIIWk3KlUwYt71KbPF_2nEj3O5D3O.jpg?size=512x512&quality=96&type=album', name:'Деньги',status: 0},
    {id:36,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0,},
    {id:37,uri:'https://sun9-56.userapi.com/s/v1/ig2/XSemxJyFJUhBDzgUg1P4Aac9gj1J7XJiHmDsX3izKBnUE31RUvvqNjWvxcTGIIWk3KlUwYt71KbPF_2nEj3O5D3O.jpg?size=512x512&quality=96&type=album', name:'Деньги',status: 0},
    {id:38,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:39,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:40,uri:'https://sun9-62.userapi.com/s/v1/ig2/rerFHk8Z1BvjpR2D3FQzOi5Qk7lDxHVJXTOjRSCHJHy5txOCh88Ni03snRCmQ4jF3Fmhk9oodVT9Wqok0YKIIIsp.jpg?size=512x512&quality=96&type=album', name:'Ничего',status: 0},
    {id:41,uri:'https://sun9-48.userapi.com/s/v1/ig2/zmQHmMCPZAsLYkcfz6el9uv1u-eKgVW3JebnGrJUX-VaQDrL-9opo0-Qq0sUPRu8C9RmZlPngXpRuv2Ch3ROCah0.jpg?size=512x512&quality=96&type=album', name:'Яблоко',status: 0},
  ]
  start = start.sort(function(){
    return Math.random() - 0.5;
  });

  let [arrs,setArr]= React.useState(start);
  let [disableButt,setDisableButt]= React.useState(false);
  let [win,setWIN]= React.useState(0);
  arrs[38].status = 1;

  let [money,setMoney]= React.useState(500);

  let alert = () =>{
    let moneyState = money-25;
    playSoundSpin();
    setDisableButt(true);
   setTimeout(() => {
    setMoney(moneyState);
    Animated.timing(value, { toValue: 100, useNativeDriver: true, duration: 3000 }).start()
    setTimeout(()=>{
         let name = arrs[38].name.toString();
         switch(name) {
            case 'Яблоко': 
            playSoundWin();
            Alert.alert('Ну немножко повезло тебе, твой выигрыш: "'+arrs[38].name.toString()+'". +25$'); //10 номер
            setMoney(moneyState+25);
            break;
            case 'Деньги': 
            playSoundMoney();
            Alert.alert('Ура твой выигрыш: "'+arrs[38].name.toString()+ '"  +50$ 🤑🤑🤑');
            setMoney(moneyState+50);
            break;
            case 'Ничего':  
            playSoundLose();
            Alert.alert('Не получилось ничего выиграть. Попробуй еще!! ');
              break;
          }
            setWIN(arrs[38].name.toString());
    },3400)
    setTimeout(()=>{
        Animated.timing(value, { toValue: 0, useNativeDriver: true, duration: 1 }).start()
        setDisableButt(false);

        let shuffledArr = start.sort(function(){
          return Math.random() - 0.5;
        });
        setArr(shuffledArr);
      },4610)
    
   }, 500);
    
  }

  return (
       <View>
              <Text style={styles.text}>{ win === 0 ? 'Попробуй сыграть' : 'Твой последний выигрыш: '+win }</Text>
              <Text style={styles.textMoney}>Твой баланс: {money}$</Text>
        <View style={styles.wrapper}>
       <View style={styles.rel}>
        <Animated.View style={{ flexDirection: 'row', transform: [{ translateX: value.interpolate({ inputRange: [0, 40], outputRange: [0, -1190] }) }], transtitionDuration: '0.8s',  justifyContent: 'center' }}>
        {arrs.map(el=>{
        return  <Image
        key={el.id}
        style={ styles.tinyLogo}
        source={{
          uri: el.uri,
        }}
      />
        }) }
      </Animated.View>
      <Text style={styles.abs}>^</Text>
      </View>
      </View>
      <View style={{ marginTop: 50 }}></View>
    <Button title='Играть' onPress={alert} disabled={disableButt}/>


    </View>
    
  );
}

const styles = StyleSheet.create({
    rel:{
       position: 'relative',
    },
    abs:{
        position: 'absolute',
        color: 'snow',
        textAlign: 'center',
        zIndex: 111,
        fontSize: 26,
        left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
  wrapper:{
    overflow: 'hidden',
    zIndex: 1,
    maxWidth: 460,
  },
tinyImage: {
    width: 50, height: 50
},
// tinyLogoMain: {
//   marginLeft: 15,
//   width: 150,
//   height: 150,
//   borderWidth: 4,
//   borderColor: "blue",
// },
tinyLogo: {
    marginLeft: 15,
    width: 150,
    height: 150,
  },
text:{
  fontSize: 18,
  color: 'snow',
  textAlign: 'center',
  marginTop: 40,
  marginBottom: 10,
},
textMoney:{
  fontSize: 18,
  color: 'snow',
  textAlign: 'center',
  marginTop: 10,
  marginBottom: 50,
}
});