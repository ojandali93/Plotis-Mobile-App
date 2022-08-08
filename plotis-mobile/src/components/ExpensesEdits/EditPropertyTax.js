import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const EditPropertyTax = (props) => {
  const {
    homePrice,
    taxRate,
    yearlyTax
  } = props

  return (
    <View>
      <View>
        <Text>
          Home Price
        </Text>
        <Text>
          Tax Rate
        </Text>
      </View>
      <View>
        <Text>
          {homePrice}
        </Text>
        <Text>
          {parseFloat(taxRate).toFixed(2).toString()}
        </Text>
        <Text>
          {yearlyTax} / Year
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default EditPropertyTax