import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import { Calendar } from "react-native-calendars";
import dayjs from "dayjs"; // Import dayjs for date comparisons
import { CreateTripContext } from "../../context/TripContext";

const SelectDates = () => {
  const { tripData, setTripData } = useContext(CreateTripContext);

  const [markedDates, setMarkedDates] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const today = dayjs().format("YYYY-MM-DD");

  const onDayPress = (day) => {
    const selectedDate = day.dateString;

    if (selectedDate < today) {
      // Prevent selection of past dates
      return;
    }

    if (!startDate) {
      // Set the start date
      setStartDate(selectedDate);
      setMarkedDates({
        [selectedDate]: {
          selected: true,
          selectedColor: "black",
        },
      });
    } else if (!endDate && selectedDate > startDate) {
      // Set the end date if selectedDate is after startDate
      setEndDate(selectedDate);
      const range = getDateRange(startDate, selectedDate);
      const total = range.length; // Directly calculate total days
      const newMarkedDates = {};
      range.forEach((date) => {
        newMarkedDates[date] = {
          selected: true,
          selectedColor: "black",
        };
      });

      setMarkedDates(newMarkedDates);
      setTripData({
        ...tripData,
        startDate: startDate,
        endDate: selectedDate,
        totalDays: total, // Use local total variable here
      });
    } else {
      // Reset the selection if a date is clicked again
      setStartDate(selectedDate);
      setEndDate(null);
      setMarkedDates({
        [selectedDate]: {
          selected: true,
          selectedColor: "black",
        },
      });
    }
  };

  const getDateRange = (start, end) => {
    let startDate = dayjs(start);
    const endDate = dayjs(end);
    const range = [];

    while (startDate <= endDate) {
      range.push(startDate.format("YYYY-MM-DD"));
      startDate = startDate.add(1, "day");
    }
    return range;
  };

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);

  useEffect(() => {
    console.log(tripData);
  }, [markedDates, tripData]);

  const handleContinue = () => {
    if (!startDate || !endDate) {
      // Show toast message if dates are not selected
      ToastAndroid.show("Please select both start and end dates", ToastAndroid.SHORT);
      return;
    }
    router.push("/create/SelectBudget");
  };

 

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>When are you Travelling...</Text>
      <Text style={styles.subtitle}>Select the Dates</Text>
      <View>
        <Calendar
          onDayPress={onDayPress}
          markedDates={markedDates}
          minDate={today} 
          theme={{
            monthTextColor: "black",
            arrowColor: "gray",
            todayTextColor: "#4BCFFA",
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleContinue}
      >
        <Text style={styles.btntxt}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectDates;

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
    marginTop: 70,
  },
  btntxt: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "outfit-medium",
  },
});
