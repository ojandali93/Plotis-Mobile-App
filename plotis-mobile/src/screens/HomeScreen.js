import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import PropertyTile from '../components/PropertyTile.js'
import SearchBar from '../components/SearchBar.js'
import { generalOptions } from '../api/zillowApi.js'

import axios from 'axios';

const HomeScreen = ({navigation}) => {

  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    console.log('send a request')
    axios.request(generalOptions)
      .then(function (response) {
        setResults(response.data.props)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  useEffect(() => {
    console.log(search)
  }, [search])

  const PropertyDetailScreen = (zpid) => {
    console.log(zpid)
    navigation.navigate('HomeDetailsStack', {zpid: zpid})
  }

  return (
    <View style={styles.screenContainer}>
      <SearchBar search={search} setSearch={setSearch}/>
      <FlatList 
        data={results}
        renderItem={({item}) => <PropertyTile item={item} PropertyDetailScreen={PropertyDetailScreen}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 40
  }
})

export default HomeScreen