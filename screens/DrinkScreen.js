import React from 'react';
import { StyleSheet, View, Button, Image, Text, SafeAreaView, StatusBar } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler';

function DrinkScreen({navigation}) {
    var drank = ['']
    return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#57D9F7" />
        {/*NavBar */}
        <View style={styles.topbar} >
            <View style={{flexDirection: "row", width: "45%", height: "90%"}}>
                <TouchableOpacity activeOpacity={1} backgroundColor="#FFFFFF" onPress={() => navigation.navigate('LoginScreen')}>
                    <Image 
                        resizeMode="contain"
                        style={{width: 30, height: 30, marginRight: "5%", margin: "5%", marginTop: "20%" }}
                        source={require('../assets/menu.png')}

                    />
                </TouchableOpacity>
                    <Text style={{fontSize: 30, color: "white"}}>Drink</Text>
                    <Image 
                        resizeMode="contain"
                        style={{width: 25, height: 25, marginTop: "7%" }}
                        source={require('../assets/fullglass.png')}
                    />

            </View>
        </View>
        {/*Progress Bar*/}
        <View style={styles.progress}>
            <View style={{flexDirection: "row",}}>
                <Text style={{color: "#57D9F7", padding: "2%"}}>PROGRESS</Text>
                <Text style={{color: "#57D9F7", padding: "2%", marginLeft: "20%", alignSelf: 'flex-end', }}>1250mL/2500mL</Text>
            </View>
            <View style={{borderRadius: 10, backgroundColor: "#57D9F7", width: "80%", marginLeft: "2.55%", height: "25%"}} />
        </View>
        <View style={styles.drank}>

        </View>
        {/*Drink Button*/}
        <TouchableOpacity activeOpacity={1} backgroundColor="#FFFFFF" onPress={() => console.log("drank")}>
        <View style={{width: "35%", height: "44%", marginRight: "2%", alignSelf: 'flex-end', flexDirection: "row" }}>
            <Image
                resizeMode="contain"
                style={{width: 70, height: 70, }}
                source={require('../assets/emptyglass.png')}
            />
            <Image
                resizeMode="contain"
                style={{width: 50, height: 50, alignSelf: 'flex-end',}}
                source={require('../assets/drinkicon.png')}
            />
        </View>
        </TouchableOpacity>

    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "#E6FEFF70",
    },
    topbar: {
        backgroundColor: "#57D9F7",
        width: '100%',
        height: '7.5%', 
    },
    progress: {
        margin: "5%",
        width: '90%',
        height: '8%',
        backgroundColor: "#fff",
    },
    drank: {
        margin: "5%",
        width: '90%',
        height: '60%',
        backgroundColor: "#fff",
    },
})
export default DrinkScreen;