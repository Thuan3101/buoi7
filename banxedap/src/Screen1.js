import * as React from "react";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Screen1({navigation}){
    return(
    <View style={styles.container}>
        <Text style={styles.t1}>A premium online store for sporter and their stylish choice</Text>
        <Image source={require("../image/xedaphome.png")} style={styles.im1}></Image>
        <Text style={styles.t2}>POWER BIKE SHOP</Text>
        <Pressable style={styles.btn}
                onPress={() => 
                navigation.navigate('Screen2')}>
            <Text style={styles.tget}>Get Started</Text>
        </Pressable>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    t1:{
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 60,
    },
    im1:{
        height: 300,
        width: 300,
        resizeMode: 'contain',
        marginTop: 55,
    },
    t2:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 25,
        textAlign: 'center',
        width: 180,
    },
    btn:{
        marginTop: 20,
        height: 55,
        width: 350,
        borderRadius: 35,
        borderWidth: 1,
        backgroundColor: 'red',
    },
    tget:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        color: "white",
    },

  });
  export default Screen1;