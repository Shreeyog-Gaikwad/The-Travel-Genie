import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React ,{useEffect, useState} from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import moment from 'moment'
import FlightDetails from '../../components/TripDetails/FlightDetails'
import HotelDetails from '../../components/TripDetails/HotelDetails'
import Planning from '../../components/TripDetails/Planning'



const TripDetails = () => {

      const navigation = useNavigation();
      const {trip} = useLocalSearchParams();
      const[tripDetails, setTripDetails] = useState([]);

      const formatData = (data) => {
        try {
          return data ? JSON.parse(data) : {};
        } catch (error) {
          console.error('Error parsing tripdata:', error);
          return {};
        }
      };

      useEffect(() => {
          navigation.setOptions({
            headerShown: true,
            title: "",
            headerTransparent: true,
          });
        }, []);        

        useEffect(()=>{
            setTripDetails(JSON.parse(trip))
        }, [trip])


  return (
    <ScrollView style={styles.container}>

        {formatData(tripDetails?.tripdata)?.destination?.photoRef ? 
        <Image style={styles.firstImg} source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(tripDetails?.tripdata)?.destination?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}} /> : 
        <Image source={require('../../assets/images/LoginImage.jpg')} style={styles.firstImg} /> }

        <View style={styles.infoContainer}>
            <Text  style={styles.title1}>{formatData(tripDetails?.tripdata)?.destination?.name}</Text>
            <Text  style={styles.title2}>From : {formatData(tripDetails?.tripdata)?.departure?.name}</Text>
            <View style={styles.infoView}>
                <Text style={styles.info}>{moment(formatData(tripDetails?.tripdata)?.startDate).format('DD MMM YYYY')} - </Text>
                <Text style={styles.info}>{moment(formatData(tripDetails?.tripdata)?.endDate).format('DD MMM YYYY')}</Text>
            </View>
            <Text style={styles.info}>{formatData(tripDetails?.tripdata)?.Traveler?.icon}  {formatData(tripDetails?.tripdata)?.Traveler?.name}</Text>
        </View>

        <FlightDetails flights = {tripDetails?.tripPlan?.flights}/>

        <HotelDetails hotels = {tripDetails?.tripPlan?.hotels}/>

        <Planning plans = {tripDetails?.tripPlan?.itinerary}/>


    </ScrollView>
  )
}

export default TripDetails

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
    firstImg:{
        width: '100%',
        height: 330,
        objectFit: 'cover',
    },
    infoContainer:{
        marginTop: -20,
        backgroundColor:'white',
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title1:{
        fontSize: 25,
        fontFamily: 'outfit-bold'
    },
    title2:{
      fontSize: 18,
      fontFamily: 'outfit-medium'
  },
    infoView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    info: {
        fontSize: 16,
        fontFamily: 'outfit-medium',
        color: 'gray',
        paddingTop: 3
    }

})