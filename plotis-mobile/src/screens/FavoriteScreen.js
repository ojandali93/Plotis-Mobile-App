import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropertyTile from '../components/PropertyTile'
 
const FavoriteScreen = () => {
  return (
    <View>
      <PropertyTile />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22
  }
})

export default FavoriteScreen