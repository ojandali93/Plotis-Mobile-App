import React from 'react'
import { Dimensions } from 'react-native'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function PropertyTile() {

  let deviceWidth = Dimensions.get('window').width - 16
  var aspectHeight = (deviceWidth / 1.78) + 1

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer,{height: aspectHeight}]}>
        <Image style={styles.mainImage} source={require('../../assets/luxury-home-1.jpeg')}/>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ 1,259,999</Text>
          <Text style={styles.status}>For Sale</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>23 Lowlette Lane.</Text>
          <Text style={styles.address}>Mission Viejo, CA 92692</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.details}>
          <Text style={styles.summary}>6 Beds | 6 Baths | 10,000 Sqft. | 1.3 acre Lot</Text>
          <Text style={styles.homeType}>Single Family Residence</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.details}>
          <View style={styles.metricContainer}>
            <Text style={styles.metricName}>Net Operating Income (Monthly): </Text>
            <Text style={styles.metricValue}>$5,789</Text>
          </View>
          <View style={styles.metricContainer}>
            <Text style={styles.metricName}>Cash on Cash Return: </Text>
            <Text style={styles.metricValue}>2.45%</Text>
          </View>
          <View style={styles.metricContainer}>
            <Text style={styles.metricName}>Return on Initial Investment: </Text>
            <Text style={styles.metricValue}>9.97%</Text>
          </View>
        </View>
        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimer}>*** 30 year fixed, 20% down, 3.14% interest rate | $3,443 rent ***</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 8,
    borderRadius: 6,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: 'hidden'
  },
  mainImage: {
    width: '100%',
    height: '100%'
  },
  contentContainer: {
    width: '100%',
    backgroundColor: '#D3D3D3',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    overflow: 'hidden',
    paddingHorizontal: 8
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 24
  },   
  addressContainer: {
    display: 'flex',
    marginTop: 8
  },
  address: {
    fontSize: 14
  },
  separator: {
    marginHorizontal: '3%',
    marginVertical: 8,
    height: 2,
    width: '94%',
    backgroundColor: 'grey'
  },  
  homeType: {
    marginTop: 4,
  },
  metricContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4
  },
  metricValue: {
    fontWeight: 'bold'
  },
  disclaimerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 8,
    width: '100%',
    justifyContent: 'center',
  },  
  disclaimer: {
    fontSize: 12,
  }
})