import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { convertToDollars } from '../utilities'

const InvestmentMetrics = (props) => {
  const {
    property,
    totalOverallExpenses,
    totalOverallRevenue,
    totalPrincipalAndInterest,
    totalDownPayment,
    totalExpWithoutMortgage
  } = props
  
  const monthlyRent = 1423

  let montlyNetOperatingIncome = totalOverallRevenue - totalExpWithoutMortgage
  let YearlyNetOperatingIncome = montlyNetOperatingIncome * 12
  let caprate = ((YearlyNetOperatingIncome/property.price) * 100).toFixed(2)
  let monthlyCashFlow = montlyNetOperatingIncome - totalPrincipalAndInterest
  let yearlyCashFlow = monthlyCashFlow * 12
  let cashOnCashReturn = yearlyCashFlow / totalDownPayment
  let totalMonthlyExpensesPercent = ((totalExpWithoutMortgage / totalOverallRevenue) * 100).toFixed(2)
  let year1ReturnOnInvestment = ((YearlyNetOperatingIncome / totalDownPayment) * 100).toFixed(2)

  return (
    <View>
      <View>
        <Text>Investment Metrics</Text>
      </View>
      <View style={styles.expense}>
        <Text>Gross Monthly Income:</Text>
        <Text>${convertToDollars(totalOverallRevenue)}</Text>
      </View>
      <View style={styles.expense}>
        <Text>Gross Yearly Income:</Text>
        <Text>${convertToDollars(totalOverallRevenue * 12)}</Text>
      </View>
      <View style={styles.expense}>
        <Text>Total Monthly Expenses (%):</Text>
        <Text>{totalMonthlyExpensesPercent}%</Text>
      </View>
      <View style={styles.expense}>
        <Text>Total Monthly Expenses ($):</Text>
        <Text>${convertToDollars(totalExpWithoutMortgage)}</Text>
      </View>
      <View style={styles.expense}>
        <Text>Total Yearly Expenses:</Text>
        <Text>${convertToDollars(totalExpWithoutMortgage * 12)}</Text>
      </View>
      <View style={styles.expense}>
        <Text>Monthly NOI: </Text>
        <Text>${convertToDollars(montlyNetOperatingIncome)}</Text>
      </View>
      <View style={styles.expense}>
        <Text>Yearly NOI:</Text>
        <Text>${convertToDollars(YearlyNetOperatingIncome)}</Text>
      </View>
      <View style={styles.expense}>
        <Text>CAP Rate</Text>
        <Text>{caprate}%</Text>
      </View>
      <View style={styles.expense}>
        <Text>Total Cashflow Monthly: </Text>
        <Text>${convertToDollars(monthlyCashFlow)}</Text>
      </View>
      <View style={styles.expense}>
        <Text>Total Cashflow Yearly: </Text>
        <Text>${convertToDollars(yearlyCashFlow)}</Text>
      </View>
      <View style={styles.expense}>
        <Text>Cash On Cash Return</Text>
        <Text>{cashOnCashReturn.toFixed(2) * 100}%</Text>
      </View>
      <View style={styles.expense}>
        <Text>Return On Initial Investment:</Text>
        <Text>{year1ReturnOnInvestment}%</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default InvestmentMetrics