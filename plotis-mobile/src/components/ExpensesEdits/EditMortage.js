import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const EditMortage = (props) => {
  const {
    homePrice,
    editHomePrice,
    downPaymentAmount,
    downPaymentPercent,
    loanProgram,
    interestRate,
    loanAmount,
    monthlyMortgage,
    editDownPaymentAmount,
    editLoanProgram,
    editDownPaymentPercent,
    editInterestRate
  } = props

  return (
    <View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Home Price:</Text>
        <View  style={styles.inputContainer}>
          <TextInput 
            style={styles.inputField}
            keyboardType='numeric'
            onChangeText={(number) => editHomePrice(number)}
            value={homePrice.toString()}
          />
        </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Down Payment $:</Text>
        <View  style={styles.inputContainer}>
          <TextInput 
            style={styles.inputField}
            keyboardType='numeric'
            onChangeText={(number) => editDownPaymentAmount(number)}
            value={downPaymentAmount.toString()}
          />
        </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Down Payment %:</Text>
        <View  style={styles.inputContainer}>
          <TextInput 
            style={styles.inputField}
            keyboardType='numeric'
            onChangeText={(number) => editDownPaymentPercent(number)}
            value={(Math.round(downPaymentPercent * 100)).toString()}
          />
        </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Loan Program:</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputField}
            keyboardType='numeric'
            onChangeText={(number) => editLoanProgram(number)}
            value={loanProgram.toString()}
          />
        </View>
      </View>
      <View style={styles.rentContainer}>
        <Text style={styles.input}>Interest Rate %:</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputField}
            keyboardType='numeric'
            onChangeText={(number) => editInterestRate(number)}
            value={interestRate.toString()}
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
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  }
})

export default EditMortage
