import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { convertToDollars, convertFirstUpper,  } from '../utilities'
import FontAwesome from 'react-native-vector-icons/Feather'

import { db } from '../../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

import { getAuth } from "firebase/auth";

const PropertyTile = (props) => {
  const {
    item,
    PropertyDetailScreen,
    favoritesList,
    favoritesZpid,
    removeDoc
  } = props

  const currentPropertyZpid = item.zpid

  const auth = getAuth()

  const collectionRef = collection(db, 'UserFavorites')

  const addToFavorites = () => {
    if(auth.currentUser === null){
      navigation.navigate('LoginStack')
    } else {
      addDoc(collectionRef, {
        "id": item.zpid,
        "address": item.address,
        "bathrooms": item.bathrooms,
        "bedrooms": item.bedrooms,
        "contingentListingType": item.contingentListingType,
        "country": item.country,
        "currency": item.currency,
        "createdAt": serverTimestamp(),
        "dateSold": item.dateSold,
        "daysOnZillow": item.daysOnZillow,
        "hasImage": item.hasImage,
        "imgSrc": item.imgSrc,
        "latitude": item.latitude,
        "listingStatus": item.listingStatus,
        "listingSubType": item.listingSubType,
        "livingArea": item.livingArea,
        "longitude": item.longitude,
        "lotAreaUnit": item.lotAreaUnit,
        "lotAreaValue": item.lotAreaValue,
        "price": item.price,
        "propertyType": item.propertyType,
        "zpid": item.zpid,
        "userId": auth.currentUser.uid
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.error(error)
      })
    }
  }

  const addWatchList = () => {
    return(
      <View style={styles.boxAdd}>
        <TouchableOpacity onPress={() => {addToFavorites()}}>
          <Text style={styles.button}>
            Add to Watchlist
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  const removeWatchList = () => {
    return(
      <View style={styles.boxRemove}>
        <TouchableOpacity onPress={() => {removeDoc(item)}}>
          <Text style={styles.button}>
            Remove from Watchlist
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  let deviceWidth = Dimensions.get('window').width - 16
  var aspectHeight = (deviceWidth / 1.78) + 1

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {PropertyDetailScreen(item)}}>
        <View style={[styles.imageContainer,{height: aspectHeight}]}>
          <Image style={styles.mainImage} source={{uri: item.imgSrc}}/>
        </View>
        {/* <TouchableOpacity onPress={() => {addToFavorites()}}>
          <FontAwesome style={styles.icon} size={20} name='heart'/>
        </TouchableOpacity> */}
        <View style={styles.contentContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${convertToDollars(item.price)}</Text>
            <Text style={styles.status}>{convertFirstUpper(item.listingStatus)}</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.address}>{item.address}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.summary}>{item.bedrooms} Beds | {item.bathrooms} Baths | {item.livingArea} Sqft.</Text>
            <Text style={styles.homeType}>{convertFirstUpper(item.propertyType)}</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.menuContainer}>
            {
              favoritesZpid.includes(currentPropertyZpid) ? removeWatchList() : addWatchList()
            }
            <View style={styles.box}>
              <TouchableOpacity>
                <Text style={styles.button}>
                  Contact Agent
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.details}>
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
            <Text style={styles.disclaimer}>*** 30 year fixed, 20% down, 3.14% interest rate ***</Text>
          </View> */}
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 6,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: 'hidden',
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
    marginTop: 8,
  },
  address: {
    fontSize: 16,
    fontWeight: '600'
  },
  separator: {
    marginVertical: 8,
    height: 2,
    width: '100%',
    backgroundColor: 'grey'
  },  
  homeType: {
    marginTop: 4,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  summary: {
    fontSize: 16,
    fontWeight: '600'
  },
  homeType: {
    fontSize: 16,
    fontWeight: '600'
  },
  icon:{
    paddingHorizontal: 8,
    paddingTop: 4
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  box: {
    width: '48%',
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8
  },
  boxAdd: {
    width: '48%',
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8
  },
  boxRemove: {
    width: '48%',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8
  },
  button: {
    fontSize: 16,
    fontWeight: '600'
  }
})

export default PropertyTile