import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import NoTripsScreen from "../../components/MyTrips/NoTripsScreen";
import { useRouter } from "expo-router";

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([]);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" translucent={true} />
      <View style={styles.title}>
        <Text style={styles.titleText}>My Trips</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("../create/SearchPlace")}
        >
          <MaterialIcons name="add-location-alt" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {userTrips.length === 0 ? <NoTripsScreen /> : <Text>Null</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container fills the screen height
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20, // Prevents space issues by adding some margin at the bottom
  },
  titleText: {
    fontSize: 35,
    fontFamily: "outfit-bold",
    marginRight: 10, // Gives some breathing room between text and button
  },
  addButton: {
    padding: 5, // Controls spacing around the icon
  },
});

export default MyTrip;
