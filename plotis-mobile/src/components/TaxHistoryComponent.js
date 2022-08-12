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
      <View style={styles.headContainer}>
        <Text style={styles.text}>Projected Market Value $1,400,000</Text>
      </View>
      <View style={styles.eventContainer}>
        <Text style={styles.label}>Year</Text>
        <Text style={styles.label}>Tax($)</Text>
        <Text style={styles.label}>Assessed</Text>
      </View>
      {
        taxHistory.map((item) => {
          if(item != undefined){
            return(
              <View style={styles.eventContainer} key={item.time}>
                <Text style={styles.labelText}>{convertEpochToDate(item.time)}</Text>
                <Text style={styles.labelText}>{item.taxPaid}</Text>
                <Text style={styles.labelText}>${convertToDollars(item.value)}</Text>
              </View>
            )
          } else {
            <></>
          }
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  taxHistoryContainer: {
    width: '100%',
    overflow: 'hidden',
    padding: 8
  },
  eventContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6
  },
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 22,
    paddingBottom: 16
  },
  label: {
    fontSize: 16,
    fontWeight: '600'
  },
  labelText: {
    fontSize: 16,
  }
})

export default TaxHistoryComponent