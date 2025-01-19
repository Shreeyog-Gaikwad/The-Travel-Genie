import { StyleSheet, Text, View , TouchableOpacity, ScrollView} from "react-native";
import { CreateTripContext } from "../../context/TripContext";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import moment from "moment";

const Review = () => {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  useEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: "Search",
        headerTransparent: true,
      });
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review your Trip</Text>
      <Text style={styles.subtitle}>
        Before generating your trip info, please review your selection
      </Text>
      <View  style={styles.line}></View>

      <ScrollView showsVerticalScrollIndicator={true}  persistentScrollbar={true}>

      <View style={styles.innerContaines}>
        <Text style={styles.icon}>🛫</Text>
        <View>
          <Text style={styles.heading}>Departure</Text>
          <Text style={styles.info}>{tripData?.departure?.name}</Text>
        </View>
      </View>

      <View style={styles.innerContaines}>
        <Text style={styles.icon}>🛬</Text>
        <View>
          <Text style={styles.heading}>Destination</Text>
          <Text style={styles.info}>{tripData?.destination?.name}</Text>
        </View>
      </View>

      <View style={styles.innerContaines}>
        <Text style={styles.icon}>📅</Text>
        <View>
          <Text style={styles.heading}>Travel Dates</Text>
          <Text style={styles.info}>
            {moment(tripData?.startDate).format("DD MMM") +
              " To " +
              moment(tripData?.endDate).format("DD MMM")}
          </Text>
          <Text style={styles.info}>{ "( " + tripData?.totalDays + " Days )"}</Text>
        </View>
      </View>

      <View style={styles.innerContaines}>
        <Text style={styles.icon}>🚗</Text>
        <View>
          <Text style={styles.heading}>Who is travelling ?</Text>
          <Text style={styles.info}>{tripData?.Traveler.name}</Text>
        </View>
      </View>

      <View style={styles.innerContaines}>
        <Text style={styles.icon}>💸</Text>
        <View>
          <Text style={styles.heading}>Budget</Text>
          <Text style={styles.info}>{tripData?.budget}</Text>
        </View>
      </View>
      </ScrollView>

      <View  style={styles.line}></View>

      <TouchableOpacity style={styles.button} onPress={()=>router.replace('/create/GenerateTrip')}>
          <Text style={styles.btntxt}>Plan my Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Review;

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
  innerContaines: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    gap: 25,
    width: '80%'
  },
  heading: {
    fontSize: 20,
    fontFamily: "outfit-bold",
    color: "gray",
  },
  info: {
    fontSize: 22,
    fontFamily: "outfit-medium",
  },
  icon: {
    fontSize: 40,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    height: 45,
    justifyContent: "center",
    marginTop : 40,
  },
  btntxt: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "outfit-medium",
  },
  line : {
    height: 1,
    backgroundColor: "gray",
  }
});
