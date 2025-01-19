import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import NoTripsScreen from "../../components/MyTrips/NoTripsScreen";
import { useRouter } from "expo-router";
import { auth, db } from "../../config/FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import UserTripList from '../../components/MyTrips/UserTripList'
import { BackHandler } from "react-native";
import { useNavigationState , useNavigation} from "@react-navigation/native";



const MyTrip = () => {

  const [userTrips, setUserTrips] = useState([]);
  const router = useRouter();
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation();
  const isRootScreen = useNavigationState(
    (state) => state?.routes?.[state.index]?.name === "MyTrip"
  );

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      if (isRootScreen) {
        BackHandler.exitApp(); 
        return true;
      }
    });

    return () => backHandler.remove();
  }, [isRootScreen, navigation]);

  useEffect(() => {
    user && GetUserTrips();
    console.log(user);

  }, [user])

  const GetUserTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserTrips(prev => [...prev, doc.data()]);
    });
    setLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style='dark' translucent={true} />
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
      {userTrips.length === 0 ? <NoTripsScreen /> : <UserTripList userTrips={userTrips} />}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  titleText: {
    fontSize: 35,
    fontFamily: "outfit-bold",
    marginRight: 10,
  },
  addButton: {
    padding: 5,
  },
  trips: {

  }
});

export default MyTrip;
