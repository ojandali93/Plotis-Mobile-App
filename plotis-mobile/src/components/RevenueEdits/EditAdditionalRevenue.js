import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const EditAdditionalRevenue = (props) => {
  const {
    additionalRevenue,
    updatingMonthlyAdditionalRevenue
  } = props

  return (
    <View>
      <View>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updatingMonthlyAdditionalRevenue(number)}
          value={additionalRevenue.toString()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditAdditionalRevenue