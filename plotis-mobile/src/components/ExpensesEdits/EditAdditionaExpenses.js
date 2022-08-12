import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const EditAdditionaExpenses = (props) => {
  const {
    internetMonthly,
    maintenanceMonthly,
    managementMonthyl,
    vacancyMOnhtly,
    repairsMonthly,
    homeWarrantlyMonthly,
    extraExpenses,
    updateInternetMonthly,
    updateMaintenenceMonthly,
    updateManagementMonthly,
    updateVacancyMonthly,
    updateHomeWarranty,
    updateExtraExpenses,
    updateRepairMonthly
  } = props

  return (
    <View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Internet:</Text>
        <View  style={styles.inputContainer}>
          <View style={styles.dollarcontainer}>
            <Text style={styles.textDollar}>$</Text>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(number) => updateInternetMonthly(number)}
              value={internetMonthly.toString()}/>
            </View>
        </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Vacancy:</Text>
        <View  style={styles.inputContainer}>
          <View style={styles.dollarcontainer}>
            <Text style={styles.textDollar}>$</Text>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(number) => updateVacancyMonthly(number)}
              value={vacancyMOnhtly.toString()}/>
            </View>
        </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Maintenance:</Text>
        <View  style={styles.inputContainer}>
          <View style={styles.dollarcontainer}>
            <Text style={styles.textDollar}>$</Text>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(number) => updateMaintenenceMonthly(number)}
              value={maintenanceMonthly.toString()}/>
            </View>
        </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Management:</Text>
        <View  style={styles.inputContainer}>
          <View style={styles.dollarcontainer}>
            <Text style={styles.textDollar}>$</Text>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(number) => updateManagementMonthly(number)}
              value={managementMonthyl.toString()}/>
            </View>
        </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Repairs:</Text>
        <View  style={styles.inputContainer}>
          <View style={styles.dollarcontainer}>
            <Text style={styles.textDollar}>$</Text>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(number) => updateRepairMonthly(number)}
              value={repairsMonthly.toString()}/>
            </View>
        </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Home Warranty:</Text>
        <View  style={styles.inputContainer}>
          <View style={styles.dollarcontainer}>
            <Text style={styles.textDollar}>$</Text>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(number) => updateHomeWarranty(number)}
              value={homeWarrantlyMonthly.toString()}/>
            </View>
        </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Extra:</Text>
        <View  style={styles.inputContainer}>
          <View style={styles.dollarcontainer}>
            <Text style={styles.textDollar}>$</Text>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(number) => updateExtraExpenses(number)}
              value={extraExpenses.toString()}/>
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

export default EditAdditionaExpenses