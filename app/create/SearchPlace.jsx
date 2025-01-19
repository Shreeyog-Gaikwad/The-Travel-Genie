import 'react-native-get-random-values';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, FlatList} from "react-native";
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
      title: "",
      headerTransparent: true,
    });
  }, []);

  useEffect(() => {
    console.log(tripData);
  }, [tripData])

  const handleContinue = () => {
    if (tripData?.departure && tripData?.destination) {
      router.push("/create/SelectTraveler");
    } else {
      alert("Please select both departure and destination to continue.");
    }
  };

  

  return (
      
    <View style={styles.container}>

      <Text style={styles.title}>Discover Places</Text>
      <Text style={styles.subtitle}>Choose the Departure and the Destination for your trip</Text>

      <Text style={[styles.subtitle, {color : '#43BE31'}]}>Departure :</Text>
      <GooglePlacesAutocomplete
        placeholder="Start Location"
        fetchDetails={true}
        onPress={(data, details = null) => {

          setTripData({
            departure: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            }
          });
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
            zIndex: 10,
            width: '100%',
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 45,
            color: 'black',
            fontSize: 16,
            borderWidth: 1,
            zIndex: 1,
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
      

      <Text style={[styles.subtitle, {color : '#FF3031', marginTop : 50}]}>Destination :</Text>
      <GooglePlacesAutocomplete
        placeholder="Destination"
        fetchDetails={true}
        onPress={(data, details = null) => {

          setTripData({
            ...tripData,
            destination: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            }
          });
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
            zIndex: 5,
            width: '100%',
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 45,
            color: 'black',
            fontSize: 16,
            borderWidth: 1,
            zIndex: 0,
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


      <TouchableOpacity
        style={styles.button}
        onPress={handleContinue}
      >
        <Text style={styles.btntxt}>Continue</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 35,
    fontFamily: "outfit-medium",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginVertical: 10,
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  innerText: {
    width: '90%',
    fontSize: 20,
    fontFamily: 'outfit-medium',
    textAlign: 'center'
  },
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    height: 45,
    justifyContent: "center",
    marginTop: 70,
  },
  btntxt: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "outfit-medium",
  },
});
