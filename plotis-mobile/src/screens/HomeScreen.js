import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import PropertyTile from '../components/PropertyTile.js'
import SearchBar from '../components/SearchBar.js'
import { generalOptions } from '../api/zillowApi.js'

import axios from 'axios';
import LoadingBar from '../components/LoadingBar.js'

const HomeScreen = ({navigation}) => {

  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const [homeType, setHomeType] = useState()
  const [minPrice, setMinPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()
  const [minBaths, setMinBaths] = useState()
  const [maxBaths, setMaxBaths] = useState()
  const [minBeds, setMinBeds] = useState()
  const [maxBeds, setMaxBeds] = useState()
  const [minSqft, setMinSqft] = useState()
  const [maxSqft, setMaxSqft] = useState()
  const [sort, setSort] = useState()

  const [pageNumber, setPageNumber] = useState()

  const homeTypeOptions = [
    {id: 1, label: 'Home_For_You'},
    {id: 2, label: 'Price_High_Low'},
    {id: 3, label: 'Price_Low_High'},
    {id: 4, label: 'Newest'},
    {id: 5, label: 'Bedrooms'},
    {id: 6, label: 'Bathrooms'},
    {id: 7, label: 'Square_Feet'},
    {id: 8, label: 'Lot_Size'}
  ]

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

  useEffect(() => {

    setSearch('')
  }, [results])

  const PropertyDetailScreen = (zpid) => {
    console.log(zpid)
    navigation.navigate('HomeDetailsStack', {zpid: zpid})
  }

  const newSearch = () => {
    setLoading(true)
    generalOptions.params.location = search
    console.log(generalOptions)
    axios.request(generalOptions)
      .then(function (response) {
        setLoading(false)
        setResults([])
        setResults(response.data.props)
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <View style={styles.screenContainer}>
      <SearchBar search={search} setSearch={setSearch} newSearch={newSearch}/>
      {
        loading == false ? null : <LoadingBar search={search}/>
      }
      <View>
        <Text>Hello</Text>
      </View>
      <FlatList 
        data={results}
        renderItem={({item}) => <PropertyTile 
                                  item={item} 
                                  PropertyDetailScreen={PropertyDetailScreen}/>}
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