import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const _layout = () => {
  return (
 <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor: 'black'}}>
    <Tabs.Screen name='mytrip' options={{
      tabBarLabel:'My Trips',
      tabBarIcon:()=><Entypo name="location-pin" size={24} color="black" />
      }}/>
    {/* <Tabs.Screen name='discover' options={{
      tabBarLabel:'Discover',
      tabBarIcon:()=><FontAwesome name="globe" size={22} color="black" />
      }}/>  Feature to Add */}
    <Tabs.Screen name='profile' options={{
      tabBarLabel:'Profile',
      tabBarIcon:()=><FontAwesome5 name="user" size={20} color="black" />
      }}/>
 </Tabs>
  )
}

export default _layout