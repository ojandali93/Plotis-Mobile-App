import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { getAuth } from "firebase/auth"
import { db } from '../../firebase'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const CreateProfileScreen = ({navigation}) => {
  const auth = getAuth()

  const collectionRef = collection(db, 'Profiles')

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [city, SetCity] = useState()
  const [state, setState] = useState()
  const [country, setCountry] = useState()

  useEffect(() => {
    if(auth.currentUser === null){
      navigation.navigate('LoginStack')
    }
  }, [])

  useEffect(() => {
    console.log(firstName)
  }, [firstName])

  useEffect(() => {
    console.log(lastName)
  }, [lastName])

  const setupProfile = () => {
    console.log(auth.currentUser)    
    addDoc(collectionRef, {
      'firstName': firstName,
      'lastName': lastName,
      'email': auth.currentUser.email,
      'city': city,
      'state': state,
      'country': country,
      'status': 'Active',
      'userId': auth.currentUser.uid,
      'createdAd': serverTimestamp()
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.error(error)
    })
    navigation.navigate('ProfileStack')
  }

  return (
    <View>
      <KeyboardAvoidingView>
        <View>
          <Text>Create Profile {auth.currentUser.email}</Text>
        </View>
        <View>
          <Text>
            First Name:
          </Text>
          <TextInput 
            placeholder="First Name..."
            value={firstName}
            onChangeText={(text) => {setFirstName(text)}}
          />
        </View>
        <View>
          <Text>
            Last Name:
          </Text>
          <TextInput 
            placeholder="Last Name..."
            value={lastName}
            onChangeText={(text) => {setLastName(text)}}
          />
        </View>
        <View>
          <Text>
            City:
          </Text>
          <TextInput 
            placeholder="City..."
            value={city}
            onChangeText={(text) => {SetCity(text)}}
          />
        </View>
        <View>
          <Text>
            State:
          </Text>
          <TextInput 
            placeholder="State..."
            value={state}
            onChangeText={(text) => {setState(text)}}
          />
        </View>
        <View>
          <Text>
            Country:
          </Text>
          <TextInput 
            placeholder="Country..."
            value={country}
            onChangeText={(text) => {setCountry(text)}}
          />
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={() => {setupProfile()}}>
        <Text>
          Create Profile
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CreateProfileScreen