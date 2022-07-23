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
      <View>
        <Text>
          Internet:
        </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateInternetMonthly(number)}
          value={internetMonthly.toString()}/>
      </View>
      <View>
        <Text>
          Vacancy:
        </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateVacancyMonthly(number)}
          value={vacancyMOnhtly.toString()}/>
      </View>
      <View>
        <Text>
          Maintenance:
        </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateMaintenenceMonthly(number)}
          value={maintenanceMonthly.toString()}/>
      </View>
      <View>
        <Text>
          Management:
        </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateManagementMonthly(number)}
          value={managementMonthyl.toString()}/>
      </View>
      <View>
        <Text>
          Repairs:
        </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateRepairMonthly(number)}
          value={repairsMonthly.toString()}/>
      </View>
      <View>
        <Text>
          Home Warranty:
        </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateHomeWarranty(number)}
          value={homeWarrantlyMonthly.toString()}/>
      </View>
      <View></View>
      <View>
        <Text>
          Extra:
        </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateExtraExpenses(number)}
          value={extraExpenses.toString()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditAdditionaExpenses