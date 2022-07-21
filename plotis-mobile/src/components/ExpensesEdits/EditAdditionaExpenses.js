import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const EditAdditionaExpenses = (props) => {
  const {
    updateAdditionaExpenses,
    additionaExpenses
  } = props

  return (
    <View>
      <View>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateAdditionaExpenses(number)}
          value={additionaExpenses.toString()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditAdditionaExpenses