import React, { useState, useEffect, useRef } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Button, Image, FlatList, ScrollView} from 'react-native'

import { propertyOptions } from '../api/zillowApi'

import axios from 'axios';

const DetailScreen = (props) => {
  const {
    route
  } = props

  const [property, setProperty] = useState(route.params.property)
  const [loadedData, setLoadedData] = useState(false)

  const isMounted = useRef(false)

  let zpid = route.params.zpid

  let options = propertyOptions
  options.params.zpid = zpid

  useEffect(() => {
    axios.request(options)
      .then(function (response) {
        setProperty(response.data)
      }).catch(function (error) {
        console.error(error);
      });
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      setLoadedData(true)
    } else {
      isMounted.current = true;
    }
  }, [property]);


  const loadingScreen = () => {
    return(
      <View>
        <Text>Loading Data</Text>
      </View>
    )
  }

  const loadedScreen = () => {
    return(
      <ScrollView>
        <View style={styles.taxHistoryContainer}>
          <View style={styles.totalExpenses}>
            <Text>Expected Monthly Expenses: $2,112</Text>
          </View>
          <View style={styles.expense}>
            <Text>Principle & Interest:</Text>
            <Text>$0</Text>
          </View>
          <View style={styles.expense}>
            <Text>Mortgage Insurance:</Text>
            <Text>$1,938</Text>
          </View>
          <View style={styles.expense}>
            <Text>Property Tax (Monthly):</Text>
            <Text>$1,938</Text>
          </View>
          <View style={styles.expense}>
            <Text>Home Insurance:</Text>
            <Text>$1,938</Text>
          </View>
          <View style={styles.expense}>
            <Text>HOA Fee's:</Text>
            <Text>$1,938</Text>
          </View>
          <View style={styles.expense}>
            <Text>Utilities:</Text>
            <Text>$1,938</Text>
          </View>
          <View style={styles.expense}>
            <Text>Additional Expenses:</Text>
            <Text>$1,938</Text>
          </View>
        </View>
      </ScrollView>
    )
  }

  return (
    <>
      {
        loadedData == false ? loadingScreen() : loadedScreen()
      }
    </>
  )
}

const styles = StyleSheet.create({

})

export default DetailScreen