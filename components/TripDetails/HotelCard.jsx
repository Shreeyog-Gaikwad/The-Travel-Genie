import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { GetPhotoref } from "../../services/GooglePlaceApi";

const HotelCard = ({item}) => {

    const [Photoref, setPhotoRef] = useState();

    useEffect(()=>{
        GetGooglePhotoRef();
    },[])

    const GetGooglePhotoRef = async () =>{
        const result = await GetPhotoref(item?.hotelName)
        setPhotoRef(result)
    }

  return (
    <View style={styles.item}>
      <Image
        source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+Photoref+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
        style={styles.itemImg}
      />
      <Text style={styles.name}>{item?.hotelName}</Text>
      <Text style={styles.rating}>⭐ {item?.rating}</Text>
      <Text style={styles.price}>💸 {item?.price}</Text>
    </View>
  );  
};

export default HotelCard;

const styles = StyleSheet.create({
    item: {
        marginRight: 15,
        marginBottom: 30,
        padding: 7,
        borderRadius: 15,
        backgroundColor: "#f0f0f0",
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
