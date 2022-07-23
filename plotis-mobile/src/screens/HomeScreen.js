import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import PropertyTile from '../components/PropertyTile.js'
import SearchBar from '../components/SearchBar.js'
import { generalOptions } from '../api/zillowApi.js'

import axios from 'axios';
import LoadingBar from '../components/LoadingBar.js'
import SortAndFilter from '../components/SortAndFilter.js'

const HomeScreen = ({navigation}) => {

  const [search, setSearch] = useState('Irvine, CA')
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
  const [location, setLocation] = useState('Irvine, CA')

  const [openSortAndFilter, setOpenSortAndFilter] = useState(false)

  const [selectedSort, setSelectedSort] = useState()

  const [pageNumber, setPageNumber] = useState()

  useEffect(() => {
    console.log(search)
    generalOptions.params.location = search
    axios.request(generalOptions)
      .then(function (response) {
        setResults(response.data.props)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  useEffect(() => {
  }, [selectedSort])

  useEffect(() => {
  }, [search])

  useEffect(() => {
  }, [results])

  useEffect(() => {
  }, [minBeds])
  
  useEffect(() => {
  }, [maxBeds])

  useEffect(() => {
  }, [minBaths])
  
  useEffect(() => {
  }, [maxBaths])

  useEffect(() => {
  }, [minSqft])


  useEffect(() => {
  }, [maxSqft])

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

  const updateSortFilter = () => {
    if(openSortAndFilter == false){
      setOpenSortAndFilter(true)
    } else {
      setOpenSortAndFilter(false)
    }
  }

  const applyFilterAndSort = () => {
    if(minPrice != undefined){
      generalOptions.params.minPrice = minPrice
    }
    if(maxPrice != undefined){
      generalOptions.params.maxPrice = maxPrice
    }
    if(minBaths != undefined){
      generalOptions.params.bathsMin = minBaths
    }
    if(maxBaths != undefined){
      generalOptions.params.bathsMax = maxBaths
    }
    if(minBeds != undefined){
      generalOptions.params.bedsMin = minBeds
    }
    if(maxBeds != undefined){
      generalOptions.params.bedsMax = maxBeds
    }
    if(minSqft != undefined){
      generalOptions.params.sqftMin = minSqft
    }
    if(maxSqft != undefined){
      generalOptions.params.sqftMax = maxSqft
    }
    if(selectedSort != undefined){
      generalOptions.params.sort = selectedSort
    }
    if(location != undefined){
      console.log(search)
      generalOptions.params.location = search
    }
    setLoading(true)
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
      <SearchBar search={search} 
        setSearch={setSearch} 
        newSearch={newSearch}
        updateSortFilter={updateSortFilter}/>
      {
        loading == false ? null : <LoadingBar search={search}/>
      }
      {
        openSortAndFilter == false ? null : <SortAndFilter 
                                              selectedSort={selectedSort}
                                              setSelectedSort={setSelectedSort}
                                              minPrice={minPrice}
                                              setMinPrice={setMinPrice}
                                              maxPrice={maxPrice}
                                              setMaxPrice={setMaxPrice}
                                              maxBaths={maxBaths}
                                              setMaxBaths={setMaxBaths}
                                              minBaths={minBaths}
                                              setMinBaths={setMinBaths}
                                              minBeds={minBeds}
                                              setMinBeds={setMinBeds}
                                              maxBeds={maxBeds}
                                              setMaxBeds={setMaxBeds}
                                              minSqft={minSqft}
                                              setMinSqft={setMinSqft}
                                              maxSqft={maxSqft}
                                              setMaxSqft={setMaxSqft}
                                              applyFilterAndSort={applyFilterAndSort}
                                            />
      }
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