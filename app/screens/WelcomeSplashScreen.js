import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Animated, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function SplashScreen({navigation}) {
   
    React.useEffect(() => {
        setTimeout(() => {
          navigation.navigate("RegisterScreen")
        }, 5000);
      });
    

  

  return (
   <ImageBackground
   style={styles.background}
   source={require("../assets/welcome-bg.jpeg")}
   >
    <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/quick.png")} />
        <Text style={styles.tagline}></Text>
        <Text style={styles.label}>designed By Uchenna John</Text>
      </View>

   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center"
  },
  logoContainer:{
    position: "absolute",
    top: 450,
    alignItems: "center",
  },
  logo:{
    width:300,
    height: 50,
  },
  label:{
    color: "white"
  },
  tagline:{
   fontSize:20,
   fontWeight:'300',
   paddingVertical: 20
  }
});

export default SplashScreen;

