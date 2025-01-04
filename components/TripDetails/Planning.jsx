import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React, {useState, useEffect} from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { GetPhotoref } from "../../services/GooglePlaceApi";
import PlaceCard from './PlaceCard';



const Planning = ({ plans }) => {
  
  const openMap = (latitude, longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url).catch((err) => console.error("Failed to open maps: ", err));
  };

  if (!plans || Object.keys(plans).length === 0) {
    return <Text>No itinerary details available</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Details  <MaterialIcons name="nature-people" size={24} color="black" /></Text>

      {Object.entries(plans).reverse().map(([day, details]) => (
        <View key={day}>
          <Text style={styles.day}>{day.charAt(0).toUpperCase() + day.slice(1)}</Text>
          {details.schedule.map((place, index) => (
            <PlaceCard place={place} index={index} />
          ))}
        </View>
      ))}
    </View>
  )
}

export default Planning

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    paddingBottom: 10,
    paddingLeft: 5,
  },
  day: {
    fontSize: 18,
    fontFamily: "outfit-medium",
    paddingLeft: 5,
    paddingVertical: 10
  },
  
})