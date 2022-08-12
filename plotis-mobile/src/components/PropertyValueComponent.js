import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import { convertToDollars, convertEpochToDate } from '../utilities'

const PropertyValueComponent = (props) => {
  const {
    property,
    priceHistory
  } = props

  return (
    <View style={styles.priceHistoryContainer}>
      <View style={styles.headContainer}>
        <Text style={styles.text}>Projected Market Value ${convertToDollars(property.zestimate)}</Text>
      </View>
      <View style={styles.eventContainer}>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.label}>Event</Text>
        <Text style={styles.label}>Price</Text>
      </View>
      {
        priceHistory.map((item) => {
          return(
            <View style={styles.eventContainer} key={item.date}>
              <Text style={styles.labelText}>{item.date}</Text>
              <Text style={styles.labelText}>{item.event}</Text>
              <Text style={styles.labelText}>${convertToDollars(item.price)}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  priceHistoryContainer: {
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

export default PropertyValueComponent