import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { convertToDollars } from '../utilities'

const DetailsComponent = (props) => {
  const {
    property
  } = props

  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoView}>
        <Text style={styles.info}>Listed: {property.timeOnZillow}</Text>
        <Text style={styles.info}>Year Built: {property.resoFacts.yearBuilt}</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}>Living Space: {property.resoFacts.livingArea}</Text>
        <Text style={styles.info}>Lot Size: {property.resoFacts.lotSize}</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}>Price / Sqft: ${convertToDollars(property.resoFacts.pricePerSquareFoot)}</Text>
        <Text style={styles.info}>HOA Fee : ${
          property.monthlyHoaFee == null ? 0 : property.monthlyHoaFee
        } </Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}>Parking Spaces: {property.resoFacts.garageSpaces}</Text>
        <Text style={styles.info}>Levels: {property.resoFacts.levels}</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}>Heating: {
          property.resoFacts.hasHeating == true ? <Text>Included</Text> : <Text>Not Included</Text>
        }</Text>
        <Text style={styles.info}>Air Conditioning: {
          property.resoFacts.hasCooling == true ? <Text>Included</Text> : <Text>Not Included</Text>
        }</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}>MLS Id: {property.mlsid}</Text>
        <Text style={styles.info}>Brokerage: {property.brokerageName}</Text>
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    width: '100%',
    backgroundColor: '#D3D3D3',
    overflow: 'hidden',
    padding: 8,
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
  }
})

export default DetailsComponent