import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  ToastAndroid
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../config/FirebaseConfig"



export default function Login() {

  const router = useRouter();
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

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

  const LoginAccount = () =>{

    if(!email && !password){
      ToastAndroid.show("Please fill in all fields", ToastAndroid.SHORT);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    if(user){
      ToastAndroid.show('User Logged In...', ToastAndroid.LONG)
    }
    router.replace('/mytrip')
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    if(errorCode){
      ToastAndroid.show('Invalid Credentials', ToastAndroid.LONG)
    }
    
  });
  }

  return (
    <KeyboardAvoidingView onPress={Keyboard.dismiss} style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null} >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.parent}>

          <TouchableOpacity onPress={() => { router.back() }}>
            <AntDesign name="back" size={30} color="black" style={styles.backBtn} />
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

          <View style={styles.innerContainer}>
            <Text style={styles.innerContainerTxt}>Log In to Your Account</Text>
            <Text style={[styles.innerContainerTxt, styles.grayTxt]}>
              Welcome Back
            </Text>
            <Text style={[styles.innerContainerTxt, styles.grayTxt]}>
              Let's Explore <FontAwesome name="paper-plane" size={22} color="gray" />
            </Text>
          </View>

          <View style={styles.inputContainerWrapper}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContainerTxt}>Email</Text>
              <TextInput style={styles.input} placeholder="Enter your Email" onChangeText={(value)=>setEmail(value)}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContainerTxt}>Password</Text>
              <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry={true} onChangeText={(value)=>setPassword(value)}/>
            </View>
            <TouchableOpacity style={styles.login} onPress={LoginAccount}>
              <Text style={styles.logintxt}>Login <Entypo name="login" size={14} color="white" /></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { router.replace('/auth/SignUp/SignUp') }} style={styles.create}>
              <Text >Create Account</Text>
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
    marginTop: -10,
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
  backBtn: {
    marginTop: 40,
    marginLeft: 25
  }

})
