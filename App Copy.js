import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, Button, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("clicked")
  return (
    <SafeAreaView style={styles.container}>
      {/*Text*/}
      <Text numberOfLine={1} onPress={handlePress}>
        Hello React Native
      </Text>
      <TouchableWithoutFeedback onPress={() =>console.log("tapped")}>
      {/*Image*/}
      <Image 
        //source={require('./assets/favicon.png')}
        blurRadius={10}
        fadeDuration={1000}
        source={{
          width:200,
          height:300,
          uri: "https://picsum.photos/200/300"
        }}/>
        </TouchableWithoutFeedback>
        {/*Button*/}
        <Button
          color="orange"
          title="Click Me"
          onPress={()=> console.log("button pressed")}/>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",


  },
});
