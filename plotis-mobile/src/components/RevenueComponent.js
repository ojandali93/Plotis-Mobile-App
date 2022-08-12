import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { convertToDollars } from '../utilities'

import { Feather } from 'react-native-vector-icons'

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
        <Text style={styles.mainText}>Expected Monthly Revenue: ${convertToDollars(totalRevenue)}</Text>
      </View>
      <View  style={styles.sortMinContainer}>
        <TouchableOpacity style={styles.rentBreak} onPress={() => {currentlyEditingMonthlyRent()}}>
          <View style={styles.expense}>
            <View style={styles.expenseValue}>
              <Text style={styles.text}>Monthly Rent (Total):</Text>
            </View>
            <View style={styles.dropDown}>
              <Text style={styles.label}>${convertToDollars(monthlyRent)}</Text>
              {
                editingMonthlyRent == false ? <Feather style={styles.icon} size={24} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
          </View>
        </TouchableOpacity>
        {
          editingMonthlyRent == false ? null : <EditRent 
                                                  monthlyRent={monthlyRent}
                                                  updatingMonthlyRent={updatingMonthlyRent}
                                                  />
        }
      </View>
      <View  style={styles.sortMinContainer}>
        <TouchableOpacity style={styles.rentBreak} onPress={() => {currentlyEditingAdditionalRevenue()}}>
          <View style={styles.expense}>
            <View style={styles.expenseValue}>
              <Text style={styles.text}>Additional Revenue:</Text>
            </View>
            <View  style={styles.dropDown}>
              <Text style={styles.label}>${convertToDollars(additionalRevenue)}</Text>
              {
                editingAdditionalRevenue == false ? <Feather style={styles.icon} size={24} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
          </View>
        </TouchableOpacity>
        {
          editingAdditionalRevenue == false ? null : <EditAdditionalRevenue 
                                                        additionalRevenue={additionalRevenue}
                                                        updatingMonthlyAdditionalRevenue={updatingMonthlyAdditionalRevenue}
                                                      />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taxHistoryContainer: {
    width: '100%',
    overflow: 'hidden',
    padding: 8
  },
  totalExpenses: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 8
  },
  expense: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  expenseValue: {
    display: 'flex',
    flexDirection: 'row',
  },
  mainText: {
    fontSize: 22
  },
  label: {
    fontSize: 16,
    marginRight: 8
  },
  dropDown: {
    display: 'flex',
    flexDirection: 'row'
  },
  sortMinContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 8,
    paddingVertical: 8
  },
  rentBreak: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  icon: {
    paddingRight: 4
  }
})

export default RevenueComponent