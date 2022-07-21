import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const EditHomeInsurance = (props) => {
  const {
    homeInsuranceYearly,
    homeInsuranceMonthly
  } = props

  return (
    <View>
      <View>
        <Text>Average Home Insurance: {homeInsuranceYearly} / year</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditHomeInsurance