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

  useEffect(() => {
    console.log(homePrice)
  }, [])

  return (
    <View>
      <View>
        <Text>Home Price:</Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => editHomePrice(number)}
          value={homePrice.toString()}
        />
      </View>
      <View>
        <Text>Down Payment $:</Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => editDownPaymentAmount(number)}
          value={downPaymentAmount.toString()}
        />
      </View>
      <View>
        <Text>Down Payment %:</Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => editDownPaymentPercent(number)}
          value={(downPaymentPercent * 100).toFixed(2).toString()}
        />
      </View>
      <View>
        <Text>Loan Program:</Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => editLoanProgram(number)}
          value={loanProgram.toString()}
        />
      </View>
      <View>
        <Text>Interest Rate %:</Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => editInterestRate(number)}
          value={interestRate.toString()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth:1,
    borderColor: 'black'
  }
})

export default EditMortage
