import { StyleSheet, Text, View , TouchableOpacity, ScrollView, Linking} from 'react-native'
import React from 'react'

const FlightDetails = ({flights}) => {

    const openLink1 = () => {
        const url = `${flights?.departureFlight?.bookingUrl}`;
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
      };

      const openLink2 = () => {
        const url = `${flights?.returnFlight?.bookingUrl}`;
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
      };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flight Details ✈️</Text>
      <ScrollView style={styles.flightDetails} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.info}>
            <Text style={[styles.infoTitle, {color: '#43BE31'}]}>Departure Details</Text>
            <Text style={styles.text}>Airline : {flights?.departureFlight?.airline}</Text>
            <Text style={styles.text}>Arrival Airport : {flights?.departureFlight?.arrivalAirport}</Text>
            <Text style={styles.text}>Arrival Time : {flights?.departureFlight?.arrivalTime}</Text>
            <Text style={styles.text}>Departure Airport : {flights?.departureFlight?.departureAirport}</Text>
            <Text style={styles.text}>Departure Time : {flights?.departureFlight?.departureTime}</Text>
            <Text style={styles.text}>Flight No. : {flights?.departureFlight?.flightNumber}</Text>
            <Text style={styles.text}>Stops : {flights?.departureFlight?.stops}</Text>
            <Text style={styles.text}>Travel Time : {flights?.departureFlight?.travelTime}</Text>
            <Text style={styles.text}>Price : {flights?.departureFlight?.price}</Text>

            <TouchableOpacity style={styles.booking} onPress={openLink1}>
                <Text style={styles.bookTxt}>Book Now</Text>
            </TouchableOpacity>

        </View>
        <View style={styles.info}>
            <Text style={[styles.infoTitle, {color: '#E71C23'}]} >Return Details</Text>
            <Text style={styles.text}>Airline : {flights?.returnFlight?.airline}</Text>
            <Text style={styles.text}>Arrival Airport : {flights?.returnFlight?.arrivalAirport}</Text>
            <Text style={styles.text}>Arrival Time : {flights?.returnFlight?.arrivalTime}</Text>
            <Text style={styles.text}>Departure Airport : {flights?.returnFlight?.departureAirport}</Text>
            <Text style={styles.text}>Departure Time : {flights?.returnFlight?.departureTime}</Text>
            <Text style={styles.text}>Flight No. : {flights?.returnFlight?.flightNumber}</Text>
            <Text style={styles.text}>Stops : {flights?.returnFlight?.stops}</Text>
            <Text style={styles.text}>Travel Time : {flights?.returnFlight?.travelTime}</Text>
            <Text style={styles.text}>Price : {flights?.returnFlight?.price}</Text>

            <TouchableOpacity style={styles.booking} onPress={openLink2}>
                <Text style={styles.bookTxt}>Book Now</Text>
            </TouchableOpacity>
            

        </View>
      </ScrollView>
    </View>
  )
}

export default FlightDetails

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        paddingBottom: 10,
        paddingLeft : 5
    },
    flightDetails :{
        display : 'flex',
        flexDirection: 'row',
        width : '100%'
    },
    info : {
        backgroundColor : '#f0f0f0',
        padding: 20,
        borderRadius: 15,
        marginRight : 20,
        minWidth: 150,
    },
    infoTitle : {
        fontSize : 18,
        fontFamily : 'outfit-medium',
        paddingVertical : 5,
        textAlign : 'center',
    },
    booking : {
        backgroundColor: 'black',
        marginTop : 15,
        height : 35,
        borderRadius : 15,
        justifyContent : 'center'
    },
    bookTxt : {
        color : 'white',
        textAlign : 'center',
        fontFamily : 'outfit-regular'
    },
    text : {
        fontFamily: 'outfit-regular',   
    }
})