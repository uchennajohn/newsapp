import { View, Text, SafeAreaView, StyleSheet, ScrollView,Modal, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React,{useState} from 'react';
import {Picker} from "@react-native-picker/picker"
import { Paragraph } from 'react-native-paper';

const AboutScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [bgColor, setBgColor] = useState('white');

    //handles circle color chnage
    const randomRgb = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
      }
    

  return (
    <ImageBackground
    style={styles.background}
    source={require("../assets/about-bg.png")}
    >
    <SafeAreaView style={StyleSheet.container}>

    {/* this modal controls the social media menu */}
    <TouchableOpacity
        style={{ marginTop: 16, backgroundColor: "white", width: "30%", shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        borderRadius: 7,
        marginLeft: 10
    }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: 'black',paddingLeft:19,paddingBottom: 5, fontSize: 24 }}>Socials</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible}  animationType='slide'>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={()=> Linking.openURL('https://www.linkedin.com/in/okechukwu-uchenna-john-0b640618b/')}>
            <Ionicons name='logo-linkedin' size={50} color="#DFD8C8"  />
            </TouchableOpacity >
            <TouchableOpacity style={styles.modalItem} onPress={()=> Linking.openURL('https://twitter.com/uc__nna')}>
            <Ionicons name='logo-twitter' size={50} color="#DFD8C8"  />
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> Linking.openURL('https://instagram.com/uc__nna/')}>
            <Ionicons name='logo-instagram' size={50} color="#DFD8C8"  />
            </TouchableOpacity>

          
          <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Ionicons name='close-outline' style={{marginTop:200}} size={50} color="#DFD8C8"  />
          </TouchableOpacity>
        </View>
      </Modal>
      
       <ScrollView showsVerticalScrollIndicator={false}>
           

            <View style={{alignSelf: "center"}}>
                <View style={styles.profileImage}>
                    <Image source={require("../assets/passport.jpeg")} style={styles.image} resizemode="center"></Image>
                </View>
                <TouchableOpacity style={styles.dm} onPress={()=> Linking.openURL('https://github.com/uchennajohn')} >
                <View >
                    <Ionicons name='logo-github' size={18} color="#DFD8C8"  />
                    
                </View>
                </TouchableOpacity>
                <View style={styles.active}></View>
                <TouchableOpacity style={[styles.add, { backgroundColor: bgColor}]}
                onPress={() => setBgColor(randomRgb())}
                >
                <View>
                    <Ionicons name='add-circle' color="#dfd8c8" style={{marginTop: 6, marginLeft: 2}}></Ionicons>
                </View>
                </TouchableOpacity>
             </View>

             <View style={styles.infoContainer}>
                    <Text style={[styles.text, {fontWeight:"200", fontSize: 25 }]}>Okechukwu Uchenna</Text>
                    <Text style={[styles.text, {color: "#52575D", fontSize:14}]}>Software Engineer(React Native | Node.Js)</Text>
                    <Text style={[styles.text, {color: "#52575D", fontSize:14}]}>okechukwuchenna@gmail.com</Text>
                    <Text style={[styles.text, {color: "#52575D", fontSize:14}]}>+2349014214236</Text>
             </View>
             <View>
                <Paragraph style={{margin: 10}}>
                A proactive and pragmatic individual with a good understanding 
                of team collaboration to optimize productivity. I also have excellent
                communication skills that help me to be able to share my ideas and solutions 
                and help me thrive as a team player in any organization.
                Some of the the technologies I use are
                </Paragraph>
             </View>

         </ScrollView>

        <View style={styles.skills}>
             <Text>REACT NATIVE</Text>
             <Text>NODE.JS</Text>
             <Text>TYPESCRIPT</Text>
             <Text>MySQL</Text>
             <Text>MONGO DB</Text>
             <Text>DOCKER</Text>
        </View>
     </SafeAreaView>
     </ImageBackground>
  )
}

const styles = StyleSheet.create({
    contaniner:{
        flex: 1,
        backgroundColor: "#fff"
    },
    background:{
        flex: 1
    },
    text:{
        
        color: "#52575D"
    },
    image:{
        flex: 1,
        width: undefined,
        height: undefined
    }, 
    titleBar:{
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    profileImage:{
        width: 200,
        height:200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm:{
        backgroundColor: "#41444B",
        position: "absolute",
        top:20,
        width:40,
        height:40,
        borderRadius: 20,
        alignItems:'center',
        justifyContent: "center"

    },
    active:{
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height:20,
        width: 20,
        borderRadius: 10
    },
    add:{
        
        position:"absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height:60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer:{
        alignSelf:"center",
        alignItems:"center",
        

    }, 
    socials:{
        backgroundColor:"green",
        height: "auto",
        width:"60%"
    },
    skills:{
                 
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
    },
    modalItem:{
        margin: 30
    }
})

export default AboutScreen