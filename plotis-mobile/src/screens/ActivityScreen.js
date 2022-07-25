import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native'
import ActivityDetail from '../components/ActivityDetail'

import { getAuth } from "firebase/auth";

const ActivityScreen = ({navigation}) => {
  const auth = getAuth()

  useEffect(() => {
    if(auth.currentUser === null){
      navigation.navigate('LoginStack')
    }
  }, [])

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
      <Text>
        Logged in - activity screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22
  }
})

export default ActivityScreen