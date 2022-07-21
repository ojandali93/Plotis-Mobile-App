import React from 'react'
import { View, Text, StyleSheet, CheckBox } from 'react-native'

const EditMortgageInsurance = (props) => {
  const {

  } = props

  return (
    <View>
      <View>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text>Add Mortgage Insurance</Text>
      </View>
    </View>
  )
}

export default EditMortgageInsurance