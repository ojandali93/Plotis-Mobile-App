import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { convertToDollars } from '../../utilities'

const EditRent = (props) => {
  const {
    monthlyRent,
    updatingMonthlyRent
  } = props

  return (
    <View >
      <View style={styles.rentContainer}>
        <Text style={styles.input}>$</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputField}
            keyboardType='numeric'
            onChangeText={(number) => updatingMonthlyRent(number)}
            value={monthlyRent.toString()}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rentContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 8
  },
  input: {
    fontSize: '18',
    paddingRight: 8,
  },
  inputContainer: {
    width: '90%'
  },
  inputField: {
    fontSize: 18,
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  }
})

export default EditRent