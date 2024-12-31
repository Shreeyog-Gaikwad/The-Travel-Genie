import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';

const NoTripsScreen = () => {

    const router = useRouter();

  return (
    <View style={styles.container}>
        <FontAwesome6 name="map-location-dot" size={45} color="black" />
        <Text style={styles.header}>Your Travel Story Begins!</Text>
        <Text style={styles.subTxt}>Your next adventure is just a few clicks away. Start planning and fill this empty space with unforgettable memories by adding your first trip now!</Text>
        <TouchableOpacity style={styles.btn} onPress={()=> router.push('/create/SearchPlace')}>
            <View style={styles.btnInner}>
                <Text style={styles.btnTxt}>Start a new Trip</Text>
                <FontAwesome6 name="plane-up" size={20} color="white" />
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default NoTripsScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        gap: 20,
        padding: 25,
        paddingTop: 200
    },
    header: {
        fontSize: 25,
        fontFamily: 'outfit-medium'
    },
    subTxt: {
        fontSize: 16,
        fontFamily: 'outfit-regular',
        textAlign: 'center',
        color: 'gray'
    },
    btn: {
        borderWidth: 1,
        padding: 16,
        borderRadius: 25,
        backgroundColor: 'black',
        margin: 0,
    },
    btnInner: {
        flexDirection: 'row',
        gap: 10,
    },
    btnTxt: {
        color: 'white',
    }

})