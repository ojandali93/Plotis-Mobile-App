import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { convertToDollars } from '../utilities'

import EditRent from './RevenueEdits/EditRent'
import EditAdditionalRevenue from './RevenueEdits/EditAdditionalRevenue'

const RevenueComponent = (props) => {
  const {
    property,
    setTotalOverallRevenue
  } = props

  const [monthlyRent, setMonthlyRent] = useState(property.rentZestimate)
  const [additionalRevenue, setAdditionalRevenue] = useState(0)
  const [totalRevenue, setTotalRevenue] = useState(monthlyRent + additionalRevenue)

  const [editingMonthlyRent, setEditingMonthlyRent] = useState(false)
  const [editingAdditionalRevenue, setEditingAdditionalRevenue] = useState(false)

  useEffect(() => {
    setTotalRevenue(monthlyRent + additionalRevenue)
  }, [monthlyRent])

  useEffect(() => {
    setTotalRevenue(monthlyRent + additionalRevenue)
  }, [additionalRevenue])

  useEffect(() => {
    setTotalOverallRevenue(totalRevenue)
  }, [totalRevenue])

  const currentlyEditingMonthlyRent = () => {
    if(editingMonthlyRent == false){
      setEditingMonthlyRent(true)
    } else {
      setEditingMonthlyRent(false)
    }
  }

  const currentlyEditingAdditionalRevenue = () => {
    if(editingAdditionalRevenue == false){
      setEditingAdditionalRevenue(true)
    } else {
      setEditingAdditionalRevenue(false)
    }
  }

  const updatingMonthlyRent = (value) => {
    if(value == ''){
      setMonthlyRent(0)
    } else {
      setMonthlyRent(parseInt(value))
    }
  }

  const updatingMonthlyAdditionalRevenue = (value) => {
    if(value == ''){
      setAdditionalRevenue(0)
    } else {
      setAdditionalRevenue(parseInt(value))
    }
  }

  return (
    <View style={styles.taxHistoryContainer}>
      <View style={styles.totalExpenses}>
        <Text>Expected Monthly Revenue: ${convertToDollars(totalRevenue)}</Text>
      </View>
      <TouchableOpacity onPress={() => {currentlyEditingMonthlyRent()}}>
        <View style={styles.expense}>
          <Text>Monthly Rent (Total):</Text>
          <Text>${convertToDollars(monthlyRent)}</Text>
        </View>
      </TouchableOpacity>
      {
        editingMonthlyRent == false ? null : <EditRent 
                                                monthlyRent={monthlyRent}
                                                updatingMonthlyRent={updatingMonthlyRent}
                                                />
      }
      <TouchableOpacity onPress={() => {currentlyEditingAdditionalRevenue()}}>
        <View style={styles.expense}>
          <Text>Additional Revenue:</Text>
          <Text>${convertToDollars(additionalRevenue)}</Text>
        </View>
      </TouchableOpacity>
      {
        editingAdditionalRevenue == false ? null : <EditAdditionalRevenue 
                                                      additionalRevenue={additionalRevenue}
                                                      updatingMonthlyAdditionalRevenue={updatingMonthlyAdditionalRevenue}
                                                    />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  taxHistoryContainer: {
    width: '100%',
    backgroundColor: '#D3D3D3',
    overflow: 'hidden',
    padding: 8
  },
  totalExpenses: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  expense: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
})

export default RevenueComponent