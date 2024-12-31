import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OptionCard = ({options, selectedOption}) => {
  return (
    <View style={[styles.container, selectedOption?.id == options?.id && {borderWidth: 2}]}>
      <View style={styles.option}>
        <Text style={styles.name}>{options?.name}</Text>
        <Text style={styles.desc}>{options?.desc}</Text>
      </View>
      <View>
        <Text style={styles.icon}>{options?.icon}</Text>
      </View>
    </View>
  )
}

export default OptionCard

const styles = StyleSheet.create({
  container : {
    padding: 15,
    paddingVertical: 20,
    marginVertical: 12,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
  },
  option: {
    width: '80%'
  },
  name: {
    fontSize: 20,
    fontFamily: 'outfit-medium',
  },
  desc: {
    fontSize: 13,
    fontFamily: 'outfit-light',
    color: 'gray',
    textAlign: "left"
  },
  icon: {
    fontSize: 40
  }
})