import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { HelperText } from "react-native-paper";
//import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { createDatabase, createUsersTable } from "../../database/userTable";
import { createUser } from "../../Redux/CreateUserSlice";

const RegisterPage = () => {
  //const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    createDatabase();
  }, []);

  //function to handle submit
  const handleSubmit = async () => {
    if (!email || !password) {
      setError(true);
      setHelperText("Email and Password are required");
    } else {
      console.log(`Email: ${email}, Password: ${password}, Name:${name}`);
      setError(true);
      setHelperText("");
      try{
       const res = await createUser(name, email, password);
       console.log(res);
      }catch(e){
          console.log("Error creating User", e)
      }
     
    }
  };

  return (
    <ImageBackground
    style={styles.background}
   source={require("../assets/3reg-bg.jpeg")}
    >
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.signInText}>
          Sign In to Access Trendy Tech News
        </Text>
      </View>

      <TextInput
        label="Name"
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        error={error}
      />

      <TextInput
        label="Email"
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        error={error}
      />
      <View
        style={[
          styles.input,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <TextInput
          style={{ flex: 1, height: "100%", width: "100%" }}
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          value={password}
          onChangeText={(text) => setPassword(text)}
          error={error}
          label="Password"
        />

        <TouchableOpacity
          style={styles.eye}
          onPress={() => setSecureTextEntry(!secureTextEntry)}
        >
          <Ionicons
            name={secureTextEntry ? "md-eye-off" : "md-eye"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <HelperText type="error" visible={error}>
        {helperText}
      </HelperText>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <View style={styles.footerContainerInner}>
          <Text style={styles.newUserText}>I am alredy Registered User,</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signUpText}>Sign In</Text>
          </TouchableOpacity>
        </View>


      </View>
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  background:{
    flex:1,
    
  },
  eye: {
    alignContent: "flex-start",
    alignItems: "flex-end",
  },
  headerContainer: {
    height: Dimensions.get("window").height / 4,
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  signInText: {
    color: "#9ea9b3",
    fontSize: 15,
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    width: "100%",
    paddingLeft: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "white",
  },
  button: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 25,
    borderRadius: 10,
    width: "80%",
  },
  buttonText: {
    color: "#4f83cc",
    fontWeight: "bold",
    textAlign: "center",
  },
  footerContainer: {
    height: Dimensions.get("window").height / 5,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  footerContainerInner: {
    flexDirection: "row",
  },
  signUpText: {
    marginLeft: 5,
    color: "green",
    fontSize: 16,
  },
  skip: {
    color: "#9ea9b3",
  },
});
export default RegisterPage;
