import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState()
  const [password, setpassword] = useState()

  const SignupUser = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user 
      console.log(user.uid)
      navigation.navigate('ProfileStack')
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  return (
    <View>
      <KeyboardAvoidingView>
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