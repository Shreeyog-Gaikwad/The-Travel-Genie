import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState , useContext} from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { TravelOptions } from '../../constants/TravelOptions'
import OptionCard from '../../components/OptionsCard/OptionCard'
import { CreateTripContext } from '../../context/TripContext'

const SelectTraveler = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState();
    const {tripData, setTripData} = useContext(CreateTripContext)

    useEffect(()=>{
        setTripData(({...tripData, Traveler: selectedOption}));
    },[selectedOption])

    useEffect(()=>{
        console.log('Trip Data:', tripData)
    },[tripData])
    

    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown : true,
            headerTitle : "",
            headerTransparent : true
        })
    },[])

    const handleContinue = () => {
            if(Object.keys(selectedOption).length === 0 || selectedOption === undefined){
                ToastAndroid.show('Please select one of the above option')
                return;
            }
            router.push('/create/SelectDates')
          }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who's Travelling</Text>
      <Text style={styles.subtitle}>Choose your Travel Buddy</Text>
      <FlatList
      data={TravelOptions}
      renderItem={({item, index}) => (
        <TouchableOpacity onPress={()=>setSelectedOption(item)}>
            <OptionCard options={item} selectedOption={selectedOption}/>
        </TouchableOpacity>
  )}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.btntxt}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectTraveler

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
        padding: 25,
        paddingTop: 90,
    },
    title: {
        fontSize: 35,
        fontFamily: 'outfit-medium',
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginVertical: 10
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 20,
        flex:1,
        justifyContent: 'center',
    },
    btntxt:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'outfit-medium'
    }
})