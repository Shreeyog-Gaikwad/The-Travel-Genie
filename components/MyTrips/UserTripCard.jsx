import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import moment from 'moment'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

const UserTripCard = ({trip}) => {
    
    const router = useRouter();

    const formatData = (data) => {
        try {
          return data ? JSON.parse(data) : {};
        } catch (error) {
          console.error('Error parsing tripdata:', error);
          return {};
        }
      };

  return (
    <TouchableOpacity style={styles.container} onPress={()=>router.push({pathname:'/TripDetails', params:{trip: JSON.stringify(trip) }})}>
        
        {formatData(trip?.tripdata)?.locationInfo?.photoRef ? 
        <Image  style={styles.image} source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(trip?.tripdata)?.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}} /> : 
        <Image source={require('../../assets/images/LoginImage.jpg')} style={styles.image} />}

        <View style={styles.info}>
            <Text style={styles.title}>{trip?.tripPlan?.location}</Text>
            <Text style={styles.subtitle}>{moment(formatData(trip?.tripdata)?.startDate).format('DD MMM YYYY')}</Text>
            <Text style={styles.subtitle}>Travelling : {formatData(trip?.tripdata)?.Traveler?.name}</Text>
        </View>
        <View  style={styles.arrow}>
            <AntDesign name="caretright" size={24} color="black" />
        </View>
    </TouchableOpacity>
  )
}

export default UserTripCard

const styles = StyleSheet.create({
    container: {
        marginBottom:20,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 15,
        gap: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    info: {
        paddingLeft: 10,
        width: '55%'
    },
    title: {
        fontSize: 18,
        fontFamily: 'outfit-medium',    
    },
    subtitle: {
        fontFamily: 'outfit-regular',
        color: 'gray'
    },
    arrow: {
        justifyContent: 'center'
    }
})