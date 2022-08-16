import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { convertToDollars } from '../utilities'

const ListingInfoComponent = (props) => {
  const {
    property
  } = props

  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoView}>
        <Text style={styles.info}><Text style={styles.category}>Agent:</Text> {property.listed_by.display_name}</Text>
      </View>
      <View style={styles.infoView}>
      <Text style={styles.info}><Text style={styles.category}>Brokerage:</Text> {property.listed_by.business_name}</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}><Text style={styles.category}>MLS:</Text> {property.mlsid}</Text>
        <Text style={styles.info}><Text style={styles.category}>Parcel #:</Text> {property.resoFacts.parcelNumber}</Text>
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    width: '100%',
    overflow: 'hidden',
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'column'
  },
  infoView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },  
  info: {
    paddingVertical: 6,
    fontSize: 16
  },
  category: {
    fontWeight: '600'
  }
})

export default ListingInfoComponent