import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React , {useContext}from 'react'
import { Video } from 'expo-av'; // Import Video component from expo-av
import {CreateTripContext} from "../../context/TripContext"


const GenerateTrip = () => {

      const {tripData, setTripData} = useContext(CreateTripContext)
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Please Wait...</Text>
      <Text style={styles.subtitle}>Generating your trip Journey</Text>
      <Video style={styles.loader} source={require('../../assets/images/Loader.mp4') }
        resizeMode="cover"
        isLooping={true} // Loop the video
        shouldPlay={true} />
      <Text style={styles.warn}>Do not go back</Text>
    </View>
  )
}

export default GenerateTrip

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "white",
        padding: 25,
        paddingTop: 70,
      },
      title: {
        fontSize: 35,
        fontFamily: "outfit-medium",
        textAlign: 'center'
      },
      subtitle: {
        fontSize: 20,
        fontFamily: "outfit-medium",
        marginVertical: 10,
        textAlign: "center",
      },
      loader:{
        width: '100%',
        height: 400,
        objectFit: "contain",
        resizeMode: 'cover',
      },
      warn:{
        textAlign: "center",
        fontFamily: "outfit-medium",
        color: 'gray',
        fontSize: 18,
      },
      loaderContain:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }
})