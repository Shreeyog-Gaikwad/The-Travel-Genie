import { Dimensions, Text, View , Image, StyleSheet, TouchableOpacity} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useRouter } from "expo-router";


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function GetStarted() {

    const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar  style="dark" translucent={true}/>
      <Image source={require('../assets/images/LoginImage.jpg')} style={styles.image}/>
      <View style={styles.innercontainer}>
          <Image style = {styles.titleLogo} source={require('../assets/images/Logo.png')}/>
          <Text style={styles.title}>Travel Genie</Text>
          <Text>Your AI Travel Planner Assistant</Text>
          <Text style={styles.subTitle}>Your journey starts here. Discover new destinations and create unforgettable memories.</Text>
          <TouchableOpacity style={styles.loginContainer} onPress={() => router.push('/auth/Login/Login')}>
            <Text style={styles.loginText}>Get Started</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    width: screenWidth,
    height: screenHeight * 0.65,
    resizeMode: 'cover',
  },
  innercontainer : {
    width: screenWidth,
    height: screenHeight * 0.6,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20, 
    alignItems: 'center',
    paddingTop : 20
  },
  title: {
    fontFamily: 'outfit-medium',
    fontSize: 30,
  },
  titleLogo: {
    width:60,
    height:50,
    overflow: 'hidden',
  },
  subTitle : {
    textAlign: 'center',
    padding : 25,
    color: 'gray',
  },
  loginContainer:{
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    backgroundColor : 'black',
    borderRadius: 30,
    gap: 12,
  },
  loginText: {
    color : 'white',
    textAlign: "center",
    fontSize: 16,
    fontFamily: 'outfit-medium',
  },
})