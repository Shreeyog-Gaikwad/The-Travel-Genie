import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from "expo-router";
import { auth } from "../../config/FirebaseConfig";
import { signOut, deleteUser } from "firebase/auth";
import { getFirestore, doc, deleteDoc } from "firebase/firestore"; // For Firestore



const Profile = () => {

  const firestore = getFirestore();
  const user = auth.currentUser;
  const router = useRouter();

  function getInitials(displayName) {
    if (!displayName) return '';
    return displayName
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase();
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const handleDeleteAccount = async () => {
    if (user) {
      try {
        await deleteDoc(doc(firestore, "users", user.uid)); 

        await deleteUser(user);

        console.log("User and associated data deleted.");
        router.replace("/GetStarted");
      } catch (error) {
        console.error("Error deleting user account:", error);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.replace("/GetStarted");
      }
    });

    return () => unsubscribe();
  }, []);


  useEffect(() => {
    console.log(user);
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="dark" translucent={true} />
      <View style={styles.circle}>
        <Image style={styles.circleImg} source={require('../../assets/images/Logo.png')} />
        <Text style={styles.circlTxt}>Travel Genie</Text>
      </View>
      <View style={styles.profileBox}>
        <Text style={styles.initial}>{getInitials(user.displayName)}</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.head}>Username</Text>
        <Text style={styles.info}>{user.displayName}</Text>
        <Text style={styles.head}>Email ID</Text>
        <Text style={styles.info}>{user.email}</Text>
      </View>
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text style={styles.logouttxt}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.delete} onPress={handleDeleteAccount}>
        <Text style={styles.logouttxt}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white",
    paddingTop: 70,
    paddingHorizontal: 35,
    gap: 20,
    height: '100%'
  },
  circle: {
    backgroundColor: 'black',
    height: 500,
    width: 500,
    borderRadius: '50%',
    marginTop: "-80%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleImg: {
    marginTop: 100,
    height: 200,
    width: 200,
  },
  profileBox: {
    height: 125,
    width: 125,
    backgroundColor: '#FFF222',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-70'
  },
  initial: {
    fontSize: 55,
    fontFamily: 'outfit-bold'
  },
  circlTxt: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'outfit-medium'
  },
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    fontSize: 20,
    fontFamily: 'outfit-medium',
  },
  info: {
    fontSize: 20,
    fontFamily: 'outfit-regular',
    paddingBottom: 30,
    textAlign: 'center'
  },
  logout: {
    width: '100%',
    backgroundColor: 'black',
    height: 35,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  logouttxt: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'outfit-medium',
    fontSize: 20,
  },
  delete: {
    width: '100%',
    backgroundColor: '#E71C23',
    height: 35,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center'
  },
})

export default Profile