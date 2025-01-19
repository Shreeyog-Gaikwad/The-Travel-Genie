import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import PlaceCard from './PlaceCard';
import AntDesign from '@expo/vector-icons/AntDesign';

const Planning = ({ plans }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  if (!plans || Object.keys(plans).length === 0) {
    return <Text>No itinerary details available</Text>;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Day-wise Planner 🗓️</Text>

      {Object.entries(plans)
        .sort(([dayA], [dayB]) => {
          const numA = parseInt(dayA.replace('day', ''), 10);
          const numB = parseInt(dayB.replace('day', ''), 10);
          return numA - numB;
        })
        .map(([day, details]) => (
          <View key={day}>
            <TouchableOpacity
              style={selectedDay === day ? styles.selected : styles.unselected}
              onPress={() => setSelectedDay(selectedDay === day ? null : day)}
            >
              <View style={styles.day}>
                <Text style={styles.dayTxt}>{day.charAt(0).toUpperCase() + day.slice(1)}</Text>
                <Text style={styles.dayArrow}>
                  {selectedDay === day ? (
                    <AntDesign name="caretdown" size={15} color="black" />
                  ) : (
                    <AntDesign name="caretup" size={15} color="black" />
                  )}
                </Text>
              </View>
            </TouchableOpacity>

            {selectedDay === day && (
              <View>
                {details.activities ? (
                  details.activities.map((place, index) =>
                    place ? (
                      <PlaceCard place={place} key={`${place}-${index}`} />
                    ) : (
                        <Text key={index} style={styles.noPlace}></Text>
                    )
                  )
                ) : (
                  <Text style={styles.noSchedule}>It seams you plan for many day. Just chill around and explore the place.</Text>
                )}
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
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    borderRadius: 20
  },
  day: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10

  },
  dayArrow: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
  },
  dayTxt: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
  },
  selected: {
    backgroundColor: '#A4B0BD',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    borderRadius: 20,
    marginBottom: 20
  },
  noPlace: {
    fontSize: 16,
    fontFamily : 'outfit-regular',
    color: 'gray',
    fontStyle: 'italic',
    paddingVertical: 5,
  },
  noSchedule: {
    fontSize: 16,
    color: 'gray',
    fontFamily : 'outfit-regular',
    fontStyle: 'italic',
    paddingVertical: 10,
    textAlign: 'center',
  },
});

