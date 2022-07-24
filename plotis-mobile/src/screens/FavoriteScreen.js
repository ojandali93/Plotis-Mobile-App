import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getAuth } from "firebase/auth";

import PropertyTile from '../components/PropertyTile'
 
const FavoriteScreen = ({navigation}) => {
  const auth = getAuth()

  useEffect(() => {
    console.log(auth.currentUser)
    if(auth.currentUser === null){
      navigation.navigate('LoginStack')
    }
  })

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if(auth.currentUser === null){
        navigation.navigate('LoginStack')
      }
    })
    return unsubscribe
  }, [navigation])

  return (
    <View>
      <Text>Logged In - favorites screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22
  }
})

export default FavoriteScreen