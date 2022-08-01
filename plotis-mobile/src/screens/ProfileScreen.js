import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { getAuth, signOut } from 'firebase/auth'

import { db } from '../../firebase'
import { collection, where, onSnapshot, query, getDocs } from 'firebase/firestore'

import { TouchableOpacity } from 'react-native-gesture-handler'

const ProfileScreen = ({navigation}) => {
  const auth = getAuth()

  const [profile, setProfile] = useState()

  useEffect(() => {
    if(auth.currentUser === null){
      navigation.navigate('LoginStack')
    } else {
      getUserProfile()
    }
  })

  const getUserProfile = () => {
    const collectionRef = collection(db, 'Profiles')
    const q = query(collectionRef, where('userId', '==', auth.currentUser.uid))
    getDocs(q, (snapshot) => {
      let profiles = []
      snapshot.docs.forEach((doc) => {
        profiles.push({ ...doc.data(), id: doc.id })
      })
      console.log(profiles)
      if(profiles.length === 1){
        setProfile(profiles[0])
        console.log('added profile')
      }
    })
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if(auth.currentUser === null){
        navigation.navigate('LoginStack')
      } else {
        getUserProfile()
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
        <Text>Profile</Text>
      </View>
      <View>
        <Text>{auth.currentUser.email}</Text>
      </View>
      <View>
        {/* <Text>{profile.firstName}</Text> */}
      </View>
      <View>
        <Text>Account Settings</Text>
      </View>
      <View>
        <Text>Help & Feedback</Text>
      </View>
      <View>
        <Text>Legal</Text>
      </View>
      <TouchableOpacity onPress={() => {signoutUser()}}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <View>
        <Text>Version: 1.0.0 (Beta)</Text>
      </View>
      <View>
        <Text>Powered By: Plotis Group Inc. & Zillow Api</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ProfileScreen