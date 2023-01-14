// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
// import { Avatar, Title, Paragraph } from 'react-native-paper';
// import {Picker} from "@react-native-picker/picker"

// const ProfileScreen = () => {
//     const [selectedValue, setSelectedValue] = useState("item1")
//   return (
//     <View style={styles.container}>
//     <View style={styles.menu}>
//       <Picker
//         selectedValue={selectedValue}
//         style={{ height: 50, width: 100 }}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//       >
//         <Picker.Item label="GitHub" value="GitHub" />
//         <Picker.Item label="Twitter" value="item2" />
//         <Picker.Item label="LinkedIn" value="item3" />
//       </Picker>
//       <Text>Selected: {selectedValue}</Text>
//     </View>
//      <View style={styles.header}>
//         <Avatar.Image 
//           size={150}
//           source={{ uri: 'https://picsum.photos/200' }}
//         />
//         <Title style={styles.name}> Okechukwu Uchenna </Title>
//         <Title style={styles.title}>Software Engineer</Title>
//       </View>
//       <View style={styles.body}>
//         <Paragraph style={styles.info}>Email: okechukwuchenna@gmail.com</Paragraph>
//         <Paragraph style={styles.info}>Phone: +2349014214236</Paragraph>
//         <Paragraph style={styles.info}>Lagos, Nigeria</Paragraph>
//       </View>

//       <ScrollView style={styles.scrol}>
//         <View style={styles.skills}>
//             <Text>REACT NATIVE</Text>
//             <Text>NODE.JS</Text>
//             <Text>MySQL</Text>
//             <Text>AGIILE METHODOLOGY</Text>
//             <Text>MONGO DB</Text>
//         </View>
//       </ScrollView>

//       <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL('https://github.com/uchennajohn')}>
//             <Text style={styles.link}>GITHUB</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//       header: {
        
//         padding: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 80,
//       },
//       menu:{
//         marginTop: 20
//       },
//       name: {
//         marginTop: 10,
//         color: "#000"
//       },
//       body: {
//         flex: 1,
//         alignItems: 'center',
//         padding: 30,
//       },
//       info: {
//         marginVertical: 4,
//         fontSize: 16,
//         color: "black"
//       },
//       skills:{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor:"green",
//         width:"100%"
//      },
//      scrol:{
//         width:"70%",
//         borderRadius: 25
        
//      },
     
//       link:{
//         color:"#9ea9b3"
//       },
//       button:{
//         backgroundColor: "#182952",
//         height: 40,
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems:"center",
//         borderRadius:9,
//         width: 60
//       },
//       title:{
//     color:"#9ea9b3",
//     fontSize: 15,
//     letterSpacing:0.5,
//     fontWeight:"bold"
//       }
     
// })



// export default ProfileScreen;


import { View, Text, SafeAreaView, StyleSheet, ScrollView,Modal, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React,{useState} from 'react';
import {Picker} from "@react-native-picker/picker"
import { Paragraph } from 'react-native-paper';

const AboutScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
    style={styles.background}
    source={require("../assets/about-bg.png")}
    >
    <SafeAreaView style={StyleSheet.container}>

    <TouchableOpacity
        style={{ marginTop: 16, backgroundColor: "black", width: "30%", shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        borderRadius: 7,
        marginLeft: 10
    }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: 'white',paddingLeft:19,paddingBottom: 5, fontSize: 24 }}>Socials</Text>
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
                <TouchableOpacity >
                <View style={styles.add}>
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
        backgroundColor: "#41444B",
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