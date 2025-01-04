import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import NoTripsScreen from "../../components/MyTrips/NoTripsScreen";
import { useRouter } from "expo-router";
import { auth, db } from "../../config/FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import UserTripList from '../../components/MyTrips/UserTripList'

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([]);
  const router = useRouter();
  const user = auth.currentUser;
  const[loading,setLoading] =useState(false)

  useEffect(()=>{
    user && GetUserTrips();
  },[user])

  const GetUserTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prev=>[...prev, doc.data()]);
    });
    setLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
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
      
        {loading && <ActivityIndicator size="large" color="black" />}
        {userTrips.length === 0 ? <NoTripsScreen /> : <UserTripList userTrips={userTrips}/>}

    </ScrollView>
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
  trips: {

  }
});

export default MyTrip;
