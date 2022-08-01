import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState()
  const [password, setpassword] = useState()
  const [verifyPassword, setVerifyPassword] = useState()

  const SignupUser = () => {
    const auth = getAuth();
    if(password === verifyPassword){
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user 
          console.log(user.uid)
          navigation.navigate('ProfileSetupStack')
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      alert('Passwords don\'t match')
    }
  }

  return (
    <View>
      <KeyboardAvoidingView>
        <View>
          <Text>--- Account Credentials ---</Text>
        </View>
        <View>
          <Text>
            email:
          </Text>
          <TextInput 
            placeholder="Email..."
            value={email}
            onChangeText={(text) => {setEmail(text)}}
          />
        </View>
        <View>
          <Text>
            password:
          </Text>
          <TextInput 
            placeholder="password..."
            value={password}
            onChangeText={(text) => {setpassword(text)}}
            secureTextEntry
          />
        </View>
        <View>
          <Text>
            re-enter password:
          </Text>
          <TextInput 
            placeholder="password..."
            value={verifyPassword}
            onChangeText={(text) => {setVerifyPassword(text)}}
            secureTextEntry
          />
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={() => {SignupUser()}}>
        <Text>
          SignUp
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SignUpScreen