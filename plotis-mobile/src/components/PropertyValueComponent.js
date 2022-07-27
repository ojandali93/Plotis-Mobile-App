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
      <View>
        <Text>Projected Market Value ${convertToDollars(property.zestimate)}</Text>
      </View>
      <View style={styles.eventContainer}>
        <Text>Date</Text>
        <Text>Event</Text>
        <Text>Price</Text>
      </View>
      {
        priceHistory.map((item) => {
          return(
            <View style={styles.eventContainer} key={item.date}>
              <Text>{item.date}</Text>
              <Text>{item.event}</Text>
              <Text>${convertToDollars(item.price)}</Text>
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

export default PropertyValueComponent