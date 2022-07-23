import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const EditUtilities = (props) => {
  const {
    gasMonthly,
    updateGasMonthly,
    sewerMonthly,
    updateSewerMonthly,
    waterMonthly,
    updateWaterMonthly,
    electricMonthly,
    updateElectricMonthly
  } = props

  return (
    <View>
      <View>
        <Text>
          Gas:
        </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateGasMonthly(number)}
          value={gasMonthly.toString()}/>
      </View>
      <View>
        <Text>
          Electricity:
        </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateElectricMonthly(number)}
          value={electricMonthly.toString()}/>
      </View>
      <View>
        <Text>
          Sewer:
        </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateSewerMonthly(number)}
          value={sewerMonthly.toString()}/>
      </View>
      <View>
        <Text>
          Water:
        </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateWaterMonthly(number)}
          value={waterMonthly.toString()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditUtilities