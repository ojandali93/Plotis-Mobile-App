import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const EditUtilities = (props) => {
  const {
    utilities,
    updateUtilities
  } = props

  return (
    <View>
      <View>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateUtilities(number)}
          value={utilities.toString()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditUtilities