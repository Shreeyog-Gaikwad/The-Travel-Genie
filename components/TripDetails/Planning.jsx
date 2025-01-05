import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import PlaceCard from './PlaceCard';
import AntDesign from '@expo/vector-icons/AntDesign';

const Planning = ({ plans }) => {
  const [selectedDay, setSelectedDay] = useState(null); // State to keep track of selected day

  if (!plans || Object.keys(plans).length === 0) {
    return <Text>No itinerary details available</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Day-wise Planner 🗓️</Text>

      {Object.entries(plans)
        .sort(([dayA], [dayB]) => dayA.localeCompare(dayB))
        .map(([day, details]) => (
          <View key={day}>

            <TouchableOpacity
              style={selectedDay == day ? styles.selected : styles.unselected}
              onPress={() => setSelectedDay(selectedDay === day ? null : day)}
            >
              <View style={styles.day}>
                <Text style={styles.dayTxt}>{day.charAt(0).toUpperCase() + day.slice(1)}</Text> 
                <Text style={styles.dayArrow}>{selectedDay === day ? <AntDesign name="caretdown" size={15} color="black" /> : <AntDesign name="caretup" size={15} color="black" />}</Text>
              </View>
            </TouchableOpacity>

            {selectedDay === day && (
              <View>
                {details.schedule.map((place, index) => (
                  <PlaceCard place={place} key={index} />
                ))}
              </View>
            )}
          </View>
        ))}
    </View>
  );
};
 
export default Planning;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 30
  },
  title: {
    fontSize: 20,
    fontFamily: 'outfit-medium',
    paddingBottom: 10,
    paddingLeft: 5,
  },
  unselected: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    paddingHorizontal : 20,
    borderRadius: 5,
    marginVertical: 5,
    borderRadius: 20
  },
  day: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
    display : 'flex',
    flexDirection: 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    gap : 10
  
  },
  dayArrow : {
    fontSize: 18,
    fontFamily: 'outfit-medium',
  },
  dayTxt : {
    fontSize: 18,
    fontFamily: 'outfit-medium',
  },
  selected: {
    backgroundColor: '#A4B0BD',
    padding: 10,
    paddingHorizontal : 20,
    borderRadius: 5,
    marginVertical: 5,
    borderRadius: 20,
    marginBottom : 20
  },
});

