import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { convertToDollars } from '../utilities'

const SummaryComponent = (props) => {
  const {
    property,
    propertyAddress
  } = props

  return (
    <View style={styles.contentContainer}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${convertToDollars(property.price)}</Text>
        <Text>{property.homeStatus}</Text>
      </View>
      <View>
        <Text>{propertyAddress}</Text>
      </View>
      <View style={styles.summaryContainer}>
        <Text>{property.bedrooms} Bed | {property.bathrooms} Bath | {convertToDollars(property.livingArea)} Sqft.</Text>
        <Text>{property.homeType}</Text>
      </View>
    </View>  
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    backgroundColor: '#D3D3D3',
    overflow: 'hidden',
    padding: 8
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  summaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6
  },
})

export default SummaryComponent