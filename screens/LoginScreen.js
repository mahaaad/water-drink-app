import React from 'react';
import { StyleSheet, View, Button, Image, Text, SafeAreaView } from 'react-native';

function LoginScreen(props) {
    const login = () => {
        console.log("clicked")
    }
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Drink</Text>
        <Image
            resizeMode="contain"
            source={require('../assets/water-02.png')}
            style={styles.glassImage}
        />
        <View style={styles.loginButton}>
        <Button
            onPress={login}
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
        height: "10%", 
        marginBottom: 1,
    }
})
export default LoginScreen;