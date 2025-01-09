import 'react-native-get-random-values';
import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from "../../context/TripContext"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const searchPlace = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const { tripData, setTripData } = useContext(CreateTripContext)

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Search",
      headerTransparent: true,
    });
  }, []);

  useEffect(() => {
    console.log(tripData);
  }, [tripData])

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true

          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            }
          });

          router.push('/create/SelectTraveler')

        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            zIndex: 999,
            width: '100%',
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 45,
            color: 'black',
            fontSize: 16,
            borderWidth: 1,
            zIndex: 999,
          },
          predefinedPlacesDescription: {
            color: '#1faadb'
          },
          listView: {
            top: 45.5,
            zIndex: 10,
            position: 'absolute',
            color: 'black',
            backgroundColor: "white",
            width: '100%',
          },
          separator: {
            flex: 1,
            height: 2,
            backgroundColor: 'gray',
          },
          description: {
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: 14,
            maxWidth: '100%',
          },
        }}
      />
      <View style = {styles.inner}>
        <FontAwesome5 name="place-of-worship" size={50} color="black" />
        <Text style = {styles.innerText}>Search for your dream places here...</Text>
      </View>
    </View>
  );
};

export default searchPlace;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 25,
    paddingTop: 100,
    backgroundColor: 'white',
  },
  inner : {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    gap : 10
  },
  innerText : {
    width :'90%',
    fontSize : 20,
    fontFamily : 'outfit-medium',
    textAlign : 'center'
  }
});
