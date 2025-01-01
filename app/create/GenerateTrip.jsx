import { StyleSheet, Text, View } from 'react-native'
import React , {useContext, useEffect, useState}from 'react'
import { Video } from 'expo-av'; // Import Video component from expo-av
import {CreateTripContext} from "../../context/TripContext"
import { AI_PROMPT } from '../../constants/TravelOptions';
import { useRouter } from 'expo-router';
import {auth, db} from '../../config/FirebaseConfig'
import {chatSession} from '../../config/AiModel'
import {doc, setDoc} from 'firebase/firestore'

const GenerateTrip = () => {

      const {tripData, setTripData} = useContext(CreateTripContext)
      const [loading, setLoading] = useState(false);
      const router = useRouter();
      const user = auth.currentUser;

      useEffect(()=>{
        GenerateTrip();
      }, [])

      const GenerateTrip = async () =>{
        setLoading(true);
        const FINAL_PROMPT = AI_PROMPT
        .replace('{location}', tripData?.locationInfo.name)
        .replace('{totalDays}', tripData?.totalDays)
        .replace('{totalNight}', tripData?.totalDays - 1)
        .replace('{traveler}', tripData?.Traveler.name)
        .replace('{budget}', tripData?.budget)
        .replace('{totalDays}', tripData?.totalDays)
        .replace('{totalNight}', tripData?.totalDays - 1)

        console.log(FINAL_PROMPT);

        try {
          const result = await chatSession.sendMessage(FINAL_PROMPT);
          const responseText = result.response.text();
          const tripResp = JSON.parse(responseText);
  
          console.log("Parsed Trip Data:", tripResp);
  
          const docId = Date.now().toString();
  
          await setDoc(doc(db, "UserTrips", docId), {
              userEmail: user?.email || "Unknown User",
              tripPlan: tripResp,  //AI Generated Plan
              tripdata : JSON.stringify(tripData),//User Selection Data
              docId: docId
          });
  
          console.log("Data saved successfully in Firestore");
          router.replace("/(tabs)/mytrip");
      } catch (error) {
          console.error("Error during Firestore update:", error);
      } finally {
          setLoading(false);
      }
        
      }
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Please Wait...</Text>
      <Text style={styles.subtitle}>Generating your trip Journey</Text>
      <Video style={styles.loader} source={require('../../assets/images/Loader.mp4') }
        resizeMode="cover"
        isLooping={true}
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