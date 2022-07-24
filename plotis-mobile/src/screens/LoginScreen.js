import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const loginUser = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user 
        console.log(user.email)
        navigation.navigate('ProfileStack')
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  useEffect(() => {
    console.log(email)
  }, [email])

  useEffect(() => {
    console.log(password)
  }, [password])

  const redirectToSignup = () => {
    navigation.navigate('SignUpStack')
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
      <TouchableOpacity onPress={() => {loginUser()}}>
        <Text>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {redirectToSignup()}}>
        <Text>
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

export default LoginScreen