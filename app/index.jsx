import "react-native-get-random-values";
import { View, StyleSheet, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import GetStarted from "./GetStarted";
import { auth } from "../config/FirebaseConfig";
import { useRouter } from "expo-router";


export default function Index() {

  const router = useRouter();
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        router.replace("/mytrip"); 
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Image style={styles.image} source={require('../assets/images/Logo.png')}/>
        <Text style={styles.txt}>Travel Genie</Text>
      </View>
    );
  }

  return <View>{!user && <GetStarted />}</View>; // Show GetStarted if no user
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : 'white'
  },
  image: {
    width: 150,
    height: 150,
  },
  txt: {
    fontSize: 25,
    fontWeight : 'bold',
  }

});
