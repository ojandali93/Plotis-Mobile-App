import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const LoadingBar = (props) => {
  const {
    search
  } = props
  return (
    <View>
      <View>
        <Text>Loading Results: {search}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default LoadingBar