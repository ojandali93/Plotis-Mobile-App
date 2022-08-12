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


  let montlyNetOperatingIncome = totalOverallRevenue - totalExpWithoutMortgage
  let YearlyNetOperatingIncome = montlyNetOperatingIncome * 12
  let caprate = ((YearlyNetOperatingIncome/property.price) * 100).toFixed(2)
  let monthlyCashFlow = montlyNetOperatingIncome - totalPrincipalAndInterest
  let yearlyCashFlow = monthlyCashFlow * 12
  let cashOnCashReturn = yearlyCashFlow / totalDownPayment
  let totalMonthlyExpensesPercent = ((totalExpWithoutMortgage / totalOverallRevenue) * 100).toFixed(2)
  let year1ReturnOnInvestment = ((YearlyNetOperatingIncome / totalDownPayment) * 100).toFixed(2)

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Investment Metrics</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.labelMetric}>Gross Monthly Income:</Text>
        <Text style={styles.labelMetric}>${convertToDollars(totalOverallRevenue)}</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.labelMetric}>Gross Yearly Income:</Text>
        <Text style={styles.labelMetric}>${convertToDollars(totalOverallRevenue * 12)}</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.labelMetric}>Total Monthly Expenses (%):</Text>
        <Text style={styles.labelMetric}>{totalMonthlyExpensesPercent}%</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.labelMetric}>Total Monthly Expenses ($):</Text>
        <Text style={styles.labelMetric}>${convertToDollars(totalExpWithoutMortgage)}</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.labelMetric}>Total Yearly Expenses:</Text>
        <Text style={styles.labelMetric}>${convertToDollars(totalExpWithoutMortgage * 12)}</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.labelMetric}>Monthly NOI: </Text>
        <Text style={styles.labelMetric}>${convertToDollars(montlyNetOperatingIncome)}</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.labelMetric}>Yearly NOI:</Text>
        <Text style={styles.labelMetric}>${convertToDollars(YearlyNetOperatingIncome)}</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.labelMetric}>CAP Rate</Text>
        <Text style={styles.labelMetric}>{caprate}%</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.labelMetric}>Total Cashflow Monthly: </Text>
        <Text style={styles.labelMetric}>${convertToDollars(monthlyCashFlow)}</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.labelMetric}>Total Cashflow Yearly: </Text>
        <Text style={styles.labelMetric}>${convertToDollars(yearlyCashFlow)}</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.labelMetric}>Cash On Cash Return</Text>
        <Text style={styles.labelMetric}>{(cashOnCashReturn * 100).toFixed(2)}%</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.labelMetric}>Return On Initial Investment:</Text>
        <Text style={styles.labelMetric}>{year1ReturnOnInvestment}%</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    padding: 8
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  label: {
    fontSize: 24
  },
  expense: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  labelMetric: {
    fontSize: 16
  }
})

export default InvestmentMetrics