import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { convertToDollars, convertFirstUpper } from '../utilities'

const SimilarTile = (props) => {
  const {
    item,
    goToProperty
  } = props

  let deviceWidth = 300
  var aspectHeight = (deviceWidth / 1.78) + 1

  let fullAddress1 = item.address.streetAddress 
  let fullAddress2 = item.address.city + ', ' + item.address.state + ' ' + item.address.zipcode

  return (
    <View style={styles.conatiner}>
      <TouchableOpacity style={styles.touchable} onPress={() => {goToProperty(item.zpid)}}>
        <View >
          <Image style={[styles.image, {height: aspectHeight, width: deviceWidth}]} source={{uri: item.miniCardPhotos[0].url}}/>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${convertToDollars(item.price)}</Text>
            <Text style={styles.status}>{item.homeStatus}</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.address}>{fullAddress1}</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.address}>{fullAddress2}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    display: 'flex',
    width: 318,
    borderRightWidth: 1,
    borderRightColor: 'grey',
    borderLeftWidth: 1,
    borderLeftColor: 'grey'
  },
  touchable: {
    margin: 8
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  price: {
    fontSize: 16,
    fontWeight: '600'
  },
  status: {
    fontSize: 16  
  },
  address: {
    fontSize: 16  
  },
})

export default SimilarTile