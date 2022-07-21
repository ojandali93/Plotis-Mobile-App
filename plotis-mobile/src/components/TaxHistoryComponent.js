import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import { convertEpochToDate, convertToDollars } from '../utilities'

const TaxHistoryComponent = (props) => {
  const {
    property,
    taxHistory
  } = props

  return (
    <View style={styles.taxHistoryContainer}>
      <View>
        <Text>Projected Market Value $1,400,000</Text>
      </View>
      <View style={styles.eventContainer}>
        <Text>Year</Text>
        <Text>Tax($)</Text>
        <Text>Assessment</Text>
      </View>
      <FlatList 
        data={taxHistory}
        key={taxHistory.time}
        renderItem={({item}) => {
          return (
            <View style={styles.eventContainer}>
              <Text>{convertEpochToDate(item.time)}</Text>
              <Text>{item.taxPaid}</Text>
              <Text>${convertToDollars(item.value)}</Text>
            </View>
          )
        }}
      />
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
  eventContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6
  }
})

export default TaxHistoryComponent