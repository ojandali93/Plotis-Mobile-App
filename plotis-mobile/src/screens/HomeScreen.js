import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropertyTile from '../components/PropertyTile.js'

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen: Shows currentl listings!</Text>
      <PropertyTile />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22
  }
})

export default HomeScreen