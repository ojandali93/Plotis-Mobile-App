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
        <Text style={styles.info}><Text style={styles.category}>Listed:</Text> {property.timeOnZillow}</Text>
        <Text style={styles.info}><Text style={styles.category}>Year Built:</Text> {property.resoFacts.yearBuilt}</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}><Text style={styles.category}>Living Space:</Text> {property.resoFacts.livingArea}</Text>
        <Text style={styles.info}><Text style={styles.category}>Lot Size:</Text> {property.resoFacts.lotSize}</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}><Text style={styles.category}>Price / Sqft:</Text> ${convertToDollars(property.resoFacts.pricePerSquareFoot)}</Text>
        <Text style={styles.info}><Text style={styles.category}>HOA Fee:</Text> ${
          property.monthlyHoaFee == null ? 0 : property.monthlyHoaFee
        } </Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}><Text style={styles.category}>Parking Spaces:</Text> {property.resoFacts.garageSpaces}</Text>
        <Text style={styles.info}><Text style={styles.category}>Levels:</Text> {property.resoFacts.levels}</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}><Text style={styles.category}>Heating:</Text> {
          property.resoFacts.hasHeating == true ? <Text>Included</Text> : <Text>Not Included</Text>
        }</Text>
        <Text style={styles.info}><Text style={styles.category}>Air Conditioning:</Text> {
          property.resoFacts.hasCooling == true ? <Text>Included</Text> : <Text>Not Included</Text>
        }</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}><Text style={styles.category}>Brokerage:</Text> {property.brokerageName}</Text>
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

export default DetailsComponent