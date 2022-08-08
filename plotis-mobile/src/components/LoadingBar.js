import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const LoadingBar = (props) => {
  const {
    search
  } = props
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Loading Results</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    paddingVertical: 8,
    fontWeight: '600'
  }
})

export default LoadingBar