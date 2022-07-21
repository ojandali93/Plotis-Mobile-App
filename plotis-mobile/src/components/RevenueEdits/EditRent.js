import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const EditRent = (props) => {
  const {
    monthlyRent,
    updatingMonthlyRent
  } = props

  return (
    <View>
      <View>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updatingMonthlyRent(number)}
          value={monthlyRent.toString()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditRent