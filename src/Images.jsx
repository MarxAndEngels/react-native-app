import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput,Image,FlatList,ScrollView } from 'react-native';


export default function Images() {
  let images = [
    {
      id: 1,
      href:'http://memesmix.net/media/created/kcsxf0.jpg'
    },
    {
      id: 2,
      href:'http://memesmix.net/media/created/kcsxf0.jpg'
    },
    {
      id: 3,
      href:'http://memesmix.net/media/created/kcsxf0.jpg'
    },
    {
      id: 4,
      href:'http://memesmix.net/media/created/kcsxf0.jpg'
    }
  ]
  return (
    <ScrollView>
    <View style={{marginTop: 20}}>
      <FlatList data={images}
      columnWrapperStyle={{flex: 1, justifyContent:'space-around'
    }}
    numColumns={2}
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
        <Image
        style={ styles.tinyImage}
        source={{
          uri: item.href,
        }}
        />
      )}>
      </FlatList>
  </View>
  </ScrollView>
  )
}


const styles = StyleSheet.create({
    tinyImage: { marginTop: 14,
      width: 150, height: 150
  },
  });