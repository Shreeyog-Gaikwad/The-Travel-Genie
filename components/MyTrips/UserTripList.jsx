import { StyleSheet, Text, View , Image, TouchableOpacity, TurboModuleRegistry} from 'react-native'
import React from 'react'
import moment from 'moment'
import UserTripCard from '../MyTrips/UserTripCard'
import { useRouter } from 'expo-router'

const UserTripList = ({userTrips}) => {

  const LatestTrip = JSON.parse(userTrips[userTrips.length - 1].tripdata)
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>

        {LatestTrip?.destination?.photoRef ? 
        <Image style={styles.firstImg} source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+LatestTrip?.destination?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}} /> : 
        <Image source={require('../../assets/images/LoginImage.jpg')} style={styles.firstImg} /> }

        <View style={styles.firstView}>
            <Text style={styles.title1}>{userTrips[userTrips.length - 1]?.tripPlan?.tripDetails?.destinationCity}</Text>
            <Text style={styles.title2}>From : {userTrips[userTrips.length - 1]?.tripPlan?.tripDetails?.departureCity}</Text>
            <Text style={styles.info}>{moment(LatestTrip.startDate).format('DD MMM YYYY')} - {moment(LatestTrip.endDate).format('DD MMM YYYY')}</Text>
            <Text style={styles.info}>{LatestTrip?.Traveler?.icon} {LatestTrip?.Traveler?.name}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>router.push({pathname:'/TripDetails', params:{
          trip: JSON.stringify(userTrips[userTrips.length - 1])
        }})}>
          <Text style={styles.btntxt}>See your Plan</Text>
        </TouchableOpacity>
      </View>

      {/* slice()->makes a duplicatecopy of usertrips array. 
      ffilter() -> filters out the last element in the array and removes it
      reverse() -> reverses the array
      map() -> maps the array to the desired component */}

      {userTrips.slice().filter((_, index) => index !== userTrips.length - 1).reverse().map((trips,index)=>(
          <UserTripCard  key={trips.docId || index} trip={trips} />
      ))}
    </View>
  )
}

export default UserTripList

const styles = StyleSheet.create({
    container: {
      marginBottom:50,
    },
    firstContainer:{
      marginBottom: 30,
    },
    firstImg:{
        width: '100%',
        height: 250,
        borderRadius: 15,
        objectFit: 'cover',
    },
    firstView:{
      paddingLeft: 5
    },
    title1:{
      fontSize: 25,
      fontFamily: 'outfit-medium'
    },
    title2:{
      fontSize: 18,
      fontFamily: 'outfit-medium'
    },
    info:{
      fontSize: 16,
      fontFamily: 'outfit-regular',
      color: 'gray'
    },
    button:{
      width: '100%',
      alignSelf: 'center', 
      backgroundColor: 'black',
      marginTop: 10,
      paddingVertical: 8, 
      paddingHorizontal: 20, 
      borderRadius: 20,
    },
    btntxt:{
      color: 'white',
      fontSize: 16,
      fontFamily: 'outfit-medium',
      textAlign: 'center',
    },
})