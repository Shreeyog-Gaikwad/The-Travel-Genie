import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import HotelCard from "./HotelCard";

const HotelDetails = ({ hotels }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hotel Details 🛎️</Text>
      {hotels?.map((item, index)=>{
        return(
          <HotelCard item={item} key={`${item}-${index}`} />
        )
      })}
    </View>
  );
};

export default HotelDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    paddingBottom: 10,
    paddingLeft: 5,
  },
  item: {
    marginRight: 15,
    marginBottom: 30,
    padding: 7,
    borderRadius: 15,
    backgroundColor: "#EAF0F1",
  },
  itemImg: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  name: {
    paddingTop: 5,
    paddingLeft: 5,
    width: 130,
    fontFamily: "outfit-medium",
  },
  rating: {
    paddingLeft: 5,
    width: 130,
  },
  price: {
    paddingLeft: 5,
    width: 130,
  },
});
