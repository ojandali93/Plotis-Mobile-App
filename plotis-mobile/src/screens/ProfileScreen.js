import React, { useEffect, useState, useRef } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getAuth, signOut } from 'firebase/auth'

import { TouchableOpacity } from 'react-native-gesture-handler'

const ProfileScreen = ({navigation}) => {
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

  const signoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log('signed out')
        navigation.navigate('LoginStack')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <View>
      <View>
        <Text>Profile Screen</Text>
      </View>
      <TouchableOpacity onPress={() => {signoutUser()}}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ProfileScreen