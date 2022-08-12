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
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Gas:</Text>
        <View  style={styles.inputContainer}>
          <View style={styles.dollarcontainer}>
            <Text style={styles.textDollar}>$</Text>
              <TextInput 
                style={styles.inputField}
                keyboardType='numeric'
                onChangeText={(number) => updateGasMonthly(number)}
                value={gasMonthly.toString()}/>
            </View>
        </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Electricity:</Text>
        <View  style={styles.inputContainer}>
          <View style={styles.dollarcontainer}>
            <Text style={styles.textDollar}>$</Text>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(number) => updateElectricMonthly(number)}
              value={electricMonthly.toString()}/>
            </View>
          </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Sewer:</Text>
        <View  style={styles.inputContainer}>
          <View style={styles.dollarcontainer}>
            <Text style={styles.textDollar}>$</Text>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(number) => updateSewerMonthly(number)}
              value={sewerMonthly.toString()}/>
            </View>
        </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Water:</Text>
        <View  style={styles.inputContainer}>
          <View style={styles.dollarcontainer}>
            <Text style={styles.textDollar}>$</Text>
              <TextInput 
                style={styles.inputField}
                keyboardType='numeric'
                onChangeText={(number) => updateWaterMonthly(number)}
                value={waterMonthly.toString()}/>
              </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 8
  },
  input: {
    fontSize: '18',
    paddingRight: 8,
  },
  inputContainer: {
    width: '44%'
  },
  inputField: {
    fontSize: 18,
    width: '90%',
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  },
  dollarcontainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  textDollar: {
    fontSize: 18,
    marginRight: 4
  }
})

export default EditUtilities