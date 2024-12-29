import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const MyTrip = () => {
  return (
    <View>
      <StatusBar  style="dark" translucent={true}/>     
      <Text>MyTrip</Text>
    </View>
  )
}

export default MyTrip