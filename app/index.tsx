import { Dimensions, Text, View , Image, StyleSheet} from "react-native";
import { StatusBar } from 'expo-status-bar';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar  style="dark" translucent={true}/>
      <Image source={require('../assets/images/LoginImage.jpg')} style={styles.image}/>
      <View style={styles.innercontainer}>
          <Image style = {styles.titleLogo} source={require('../assets/images/Logo.png')}/>
          <Text style={styles.title}>The Travel Genie</Text>
          <Text>Your AI Travel Planner Assistant</Text>
          <Text style={styles.subTitle}>Your journey starts here. Discover new destinations and create unforgettable memories.</Text>
          <View style={styles.loginContainer}>
            <Image style={styles.loginIcon} source={require('../assets/images/GoogleIcon.png')}/>
            <Text style={styles.loginText}>Login with Google</Text>
          </View>
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
  loginIcon : {
    width: 20,
    height: 20
  }
})