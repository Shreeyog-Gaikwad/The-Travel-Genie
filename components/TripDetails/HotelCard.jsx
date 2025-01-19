import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { GetPhotoref } from "../../services/GooglePlaceApi";

const HotelCard = ({ item }) => {

  const [Photoref, setPhotoRef] = useState();

  useEffect(() => {
    GetGooglePhotoRef();
  }, [])

  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoref(item?.hotelName)
    setPhotoRef(result)
  }

  return (
    <View style={styles.item}>
      <Image
        source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + Photoref + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY }}
        style={styles.itemImg}
      />
      <Text style={styles.name}>{item?.hotelName}</Text>
      <Text style={styles.rating}>⭐ {item?.rating}</Text>
      <Text style={styles.price}>💸 {item?.price}</Text>
      <View  style={styles.amenities}>
        {item?.amenities.map((amenities, index) => {
          return (
            <View style={styles.amenityItem} key={`${amenities}-${index}`}>
              <Text style={styles.amenityTxt}>{amenities}</Text>
            </View>
          )
        })}
      </View>

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
    width: '100%',

  },
  itemImg: {
    width: '100%',
    height: 130,
    borderRadius: 15,
  },
  name: {
    fontSize: 18,
    paddingTop: 5,
    paddingLeft: 5,
    fontFamily: "outfit-medium",
  },
  rating: {
    paddingLeft: 5,
  },
  price: {
    paddingLeft: 5,
  },
  amenities: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginTop: 8,
  },
  amenityItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 3,
    borderRadius: 15,
    borderWidth :0.8
  },
  amenityTxt : {
    color : 'black',
  }
});
