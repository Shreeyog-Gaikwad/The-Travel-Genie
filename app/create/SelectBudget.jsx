import { StyleSheet, Text, View, FlatList , TouchableOpacity, ToastAndroid} from 'react-native'
import React, { useEffect, useState , useContext} from 'react'
import { useNavigation, useRouter } from 'expo-router';
import {BudgetOptions} from '../../constants/TravelOptions'
import OptionCard from '../../components/OptionsCard/OptionCard';
import { CreateTripContext } from "../../context/TripContext";


const SelectBudget = () => {

    const { tripData, setTripData } = useContext(CreateTripContext);

    const [selectedOption, setSelectedOption] = useState({});

    const router = useRouter();

    const navigation = useNavigation();
      useEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
        });
      }, []);

      useEffect(()=>{
        setTripData({
            ...tripData,
            budget: selectedOption.name
        })
      },[selectedOption])

      const handleContinue = () => {
        if(Object.keys(selectedOption).length === 0){
            ToastAndroid.show('Please select one of the above option', ToastAndroid.SHORT)
            return;
        }
        router.push('/create/Review')
      }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your Budget?</Text>
      <Text style={styles.subtitle}>Choose the spending habbits for your trip</Text>
      <FlatList
      data={BudgetOptions}
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

export default SelectBudget

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "white",
        padding: 25,
        paddingTop: 90,
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
      button: {
        backgroundColor: "black",
        borderRadius: 20,
        height: 45,
        justifyContent: "center",
      },
      btntxt: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        fontFamily: "outfit-medium",
      },
})