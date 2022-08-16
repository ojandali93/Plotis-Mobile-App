import React, { useEffect, useState } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Button, Image, FlatList, ScrollView} from 'react-native'
import SimilarTile from './SimilarTile'

const SimilarListings = (props) => {
  const {
    property,
    navigation
  } = props

  const [listings, setListings] = useState(property.nearbyHomes)


  const goToProperty = (zpid) => {
    navigation.navigate('HomeDetailsStack', {zpid: zpid})
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}> 
          Similar Properties
        </Text>
      </View>
      <FlatList 
        data={listings}
        horizontal={true}
        renderItem={({item}) => {
          return(
            <View>
              <SimilarTile item={item} goToProperty={goToProperty}/>
            </View>
          )
        }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  header: {
    marginBottom: 12
  },
  label: {
    fontSize: 24,
  }
})

export default SimilarListings