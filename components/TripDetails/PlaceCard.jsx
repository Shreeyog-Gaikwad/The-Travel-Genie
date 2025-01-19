import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useEffect, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { GetPhotoref } from "../../services/GooglePlaceApi";



const PlaceCard = ({ place }) => {

  const [Photoref, setPhotoRef] = useState();

  useEffect(() => {
    console.log("Place Data: ", place);
  }, [place]);

  useEffect(() => {
    GetGooglePhotoRef();
  }, [])

  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoref(place?.placeName)
    setPhotoRef(result)
  }

  const openMap = (latitude, longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url).catch((err) => console.error("Failed to open maps: ", err));
  };

  return (
    <View style={styles.info}>
      {place?.imageUrl && Photoref ?
        <Image style={styles.image}
          source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + Photoref + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY }}
        /> : null}
      <View style={styles.infoContainer}>
        <Text style={styles.activity}>{place?.placeName}</Text>
        <Text style={styles.details}>{place?.placeDetails}</Text>
        <View style={styles.navi}>
          <View style={styles.naviinfo}>
            <Text style={styles.time}>📍 Location : <Text style={styles.bold} >{place?.travelTime}</Text></Text>
            {place?.ticketPricing ? <Text style={styles.ticket}>🎟️ Ticket Price : <Text style={styles.bold}>{place?.ticketPricing}</Text></Text> : null}
          </View>

          {place?.geoCoordinates ?
            <TouchableOpacity style={styles.navibtn} onPress={() => openMap(place?.geoCoordinates?.latitude, place?.geoCoordinates?.longitude)}>
              <Ionicons name="navigate-circle" size={45} color="#2F363F" />
            </TouchableOpacity> : null}
        </View>

      </View>
    </View>
  )
}

export default PlaceCard

const styles = StyleSheet.create({
  info: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  infoContainer: {
    paddingVertical: 5
  },
  activity: {
    fontSize: 20,
    fontFamily: "outfit-medium",
  },
  details: {
    fontSize: 16,
    color: 'gray',
    fontFamily: "outfit-medium",
  },
  time: {
    fontFamily: "outfit-regular",
  },
  duration: {
    fontFamily: "outfit-regular",
  },
  ticket: {
    fontFamily: "outfit-regular",
  },
  bold: {
    fontFamily: "outfit-medium",
  },
  navi: {
    display: 'flex',
    flexDirection: 'row',
  },
  naviinfo: {
    width: '85%'
  },
  navibtn: {
    justifyContent: 'flex-end'
  }
})