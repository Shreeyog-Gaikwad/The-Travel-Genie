import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import Foundation from '@expo/vector-icons/Foundation';
import AntDesign from '@expo/vector-icons/AntDesign';
import {auth} from "../../../config/FirebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigation = useNavigation();
  const router = useRouter();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const CreateAccount = () => {
    if(!email && !password && !fullName){
      ToastAndroid.show("Please fill in all fields", ToastAndroid.SHORT);
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    router.replace('/mytrip');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, ":",  errorMessage);
  });
  }

  return (
    <KeyboardAvoidingView onPress={Keyboard.dismiss} style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null} >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.parent}>
          <TouchableOpacity onPress={() => { router.back() }}>
            <AntDesign name="back" size={30} color="black" style={{ marginTop: 40, marginLeft: 25 }} />
          </TouchableOpacity>

          {!isKeyboardVisible && (
            <View style={styles.container}>
              <Image
                style={styles.img}
                source={require("../../../assets/images/Logo.png")}
              />
              <Text style={styles.title}>Travel Genie</Text>
            </View>
          )}

          <View style={[styles.innerContainer, isKeyboardVisible && { marginTop: -10 }]}>
            <Text style={styles.innerContainerTxt}>Create Your Account</Text>
            <Text style={[styles.innerContainerTxt, styles.grayTxt]}>Start Your Adventure <Foundation name="mountains" size={28} color="gray" /></Text>
          </View>

          <View style={styles.inputContainerWrapper}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContainerTxt}>Full Name</Text>
              <TextInput style={styles.input} placeholder="Enter your Full Name" onChangeText={(value)=> setfullName(value)}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContainerTxt}>Email</Text>
              <TextInput style={styles.input} placeholder="Enter your Email" onChangeText={(value)=> setEmail(value)}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContainerTxt}>Password</Text>
              <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry={true} onChangeText={(value)=> setPassword(value)}/>
            </View>
            <TouchableOpacity style={styles.login} onPress={CreateAccount}>
              <Text style={styles.logintxt}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.create} onPress={() => { router.replace('/auth/Login/Login') }}>
              <Text >Login <Entypo name="login" size={14} color="black" /></Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    marginTop: 10,
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    marginTop: -10,
    fontFamily: "outfit-medium",
  },
  innerContainer: {
    padding: 20,
    marginTop: -50,
  },
  innerContainerTxt: {
    fontSize: 30,
    fontFamily: "outfit-medium",
  },
  grayTxt: {
    color: "gray",
    fontSize: 25,
  },
  inputContainerWrapper: {
    flex: 1,
    justifyContent: "flex-start",
    gap: 20,
  },
  inputContainer: {
    paddingHorizontal: 25,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "white",
  },
  inputContainerTxt: {
    fontFamily: "outfit-regular",
    paddingBottom: 5,
  },
  login: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "#000",
    marginHorizontal: 25,
    borderRadius: 15,
    marginVertical: 10,
  },
  logintxt: {
    color: 'white',
  },
  create: {
    padding: 15,
    alignItems: "center",
    marginHorizontal: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginVertical: 5,
  },
  onKeybord: {
    marginTop: 1100
  }

})
