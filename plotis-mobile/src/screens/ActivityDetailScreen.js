import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getAuth } from "firebase/auth";

const ActivityDetailScreen = ({navigation}) => {
  const auth = getAuth()

  useEffect(() => {
    console.log(auth.currentUser)
    if(auth.currentUser === null){
      navigation.navigate('LoginStack')
    }
  })

  return (
    <View>
      <Text>
        Logged in - activity screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ActivityDetailScreen