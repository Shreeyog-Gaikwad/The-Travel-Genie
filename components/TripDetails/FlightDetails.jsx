import { StyleSheet, Text, View , TouchableOpacity, ScrollView, Linking} from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const FlightDetails = ({flights}) => {

    const openLink1 = () => {
        const url = `${flights?.departureExample?.bookingURL}`;
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
      };

      const openLink2 = () => {
        const url = `${flights?.returnExample?.bookingURL}`;
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
      };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flight Details  <FontAwesome5 name="plane" size={20} color="black" /></Text>
      <ScrollView style={styles.flightDetails} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.info}>
            <Text style={[styles.infoTitle, {color: '#43BE31'}]}>Departure Details</Text>
            <Text style={styles.text}>Airline : {flights?.departureExample?.airline}</Text>
            <Text style={styles.text}>Arrival City : {flights?.departureExample?.arrivalCity}</Text>
            <Text style={styles.text}>Arrival Time : {flights?.departureExample?.arrivalTime}</Text>
            <Text style={styles.text}>Departure City : {flights?.departureExample?.departureCity}</Text>
            <Text style={styles.text}>Departure Time : {flights?.departureExample?.departureTime}</Text>
            <Text style={styles.text}>Flight No. : {flights?.departureExample?.flightNumber}</Text>
            <Text style={styles.text}>Price : {flights?.departureExample?.price}</Text>

            <TouchableOpacity style={styles.booking} onPress={openLink1}>
                <Text style={styles.bookTxt}>Book Now</Text>
            </TouchableOpacity>

        </View>
        <View style={styles.info}>
            <Text style={[styles.infoTitle, {color: '#E71C23'}]} >Return Details</Text>
            <Text style={styles.text}>Airline : {flights?.returnExample?.airline}</Text>
            <Text style={styles.text}>Arrival City : {flights?.returnExample?.arrivalCity}</Text>
            <Text style={styles.text}>Arrival Time : {flights?.returnExample?.arrivalTime}</Text>
            <Text style={styles.text}>Departure City : {flights?.returnExample?.departureCity}</Text>
            <Text style={styles.text}>Departure Time : {flights?.returnExample?.departureTime}</Text>
            <Text style={styles.text}>Flight No. : {flights?.returnExample?.flightNumber}</Text>
            <Text style={styles.text}>Price : {flights?.returnExample?.price}</Text>

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
        backgroundColor : '#EAF0F1',
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