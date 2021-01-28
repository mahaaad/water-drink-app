import React from 'react';
import { StyleSheet, View, Button, Image, Text, SafeAreaView } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'

function LoginScreen({navigation}) {
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Drink</Text>
        <Image
            resizeMode="contain"
            source={require('../assets/fullglass.png')}
            style={styles.glassImage}
        />
        <View style={styles.loginButton}>
        <Button
            onPress={() => navigation.navigate('DrinkScreen')}
            title="LOG IN"
        />
        </View>
        <View style={styles.loginButton}>
        <Button 
            title="REGISTER"
        />
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E6FEFF",
    },
    title:{
        fontFamily: "" ,
        fontSize: 50,
        color: "#57D9F7",
    },
    glassImage:{
        width: "65%",
        height: "40%",
    },
    loginButton: {
        color: "#57D9F7",
        width: "50%",
        height: "6%", 
    }
})
export default LoginScreen;