import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'

const RecommendedPropertyTile = (props) => {

  const {
    RecommendedDetailStack
  } = props

  let deviceWidth = Dimensions.get('window').width - 16
  let tileWidth = deviceWidth * .55
  let imageWidth = tileWidth - 8
  let imageHeight = (tileWidth / 1.78) + 1

  return (
    <View style={[styles.mainContainer, {width: tileWidth}]}>
      <TouchableOpacity onPress={() => {RecommendedDetailStack()}}>
        <View style={styles.tileContainer}>
          <View style={[styles.ImageContainer, {height: imageHeight, width: tileWidth}]}>
            <Image style={styles.mainImage} source={require('../../assets/luxury-home-1.jpeg')}/>
          </View>
          <View style={styles.priceContainer}>
            <Text>$1,233,223</Text>
            <Text>For Sale</Text>
          </View>
          <View>
            <Text>1234 Bristol Ave.</Text>
            <Text>Orange, CA 92956</Text>
          </View>
          <View>
            <Text>3 Bed | 3 Bath | 1,234 Sqft</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text>Net Operating Income:</Text>
            <Text>$1,223</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text>Cash On Cash Return:</Text>
            <Text>6.6%</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text>Return On Investment:</Text>
            <Text>10%</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginRight: 16,
    paddingVertical: 8
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default RecommendedPropertyTile