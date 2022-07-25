import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { generalOptions } from '../api/zillowApi.js'
import axios from 'axios';

import FontAwesome from 'react-native-vector-icons/Feather'

import { getAuth } from "firebase/auth";
import { db } from '../../firebase.js';
import { collection, onSnapshot } from 'firebase/firestore'

import PropertyTile from '../components/PropertyTile.js'
import SearchBar from '../components/SearchBar.js'
import LoadingBar from '../components/LoadingBar.js'
import SortAndFilter from '../components/SortAndFilter.js'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  const auth = getAuth()

  const userCollectionRef = collection(db, 'userFavorites')

  const defaultSearch = 'Irvine, Ca'

  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const [singleResidence, setSingleResidence] = useState()

  const [minPrice, setMinPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()
  const [minBaths, setMinBaths] = useState()
  const [maxBaths, setMaxBaths] = useState()
  const [minBeds, setMinBeds] = useState()
  const [maxBeds, setMaxBeds] = useState()
  const [minSqft, setMinSqft] = useState()
  const [maxSqft, setMaxSqft] = useState()

  const [openSortAndFilter, setOpenSortAndFilter] = useState(false)

  const [selectedSort, setSelectedSort] = useState()

  const [pageNumber, setPageNumber] = useState(1)
  const [previousPage, setPrivatePage] = useState(0)
  const [nextPage, setNextPage] = useState(2)
  const [searchNext, setSearchNext] = useState(false)
  const [searchPrevious, setSearchPrevious] = useState(false)

  const [userFavorites, setUesrFavorites] = useState([])

  useEffect(() => {
    generalOptions.params.location = defaultSearch
    axios.request(generalOptions)
      .then(function (response) {
        setResults(response.data.props)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if(auth.currentUser === null){
        console.log('not logged in')
      } else {
        console.log('logged in')
      }
    })
    return unsubscribe
  }, [navigation])

  const PropertyDetailScreen = (zpid) => {
    console.log(zpid)
    navigation.navigate('HomeDetailsStack', {zpid: zpid})
  }

  const newSearch = () => {
    setLoading(true)
    generalOptions.params.location = search
    generalOptions.params.page = pageNumber.toString()
    axios.request(generalOptions)
      .then(function (response) {
        console.log(response.data)
        if(response.data.address){
          setLoading(false)
          setResults([])
          setResults(response.data.props)
        } else {
          setLoading(false)
          setResults([])
          navigation.navigate('HomeDetailsStack', {zpid: response.data.zpid})
        }
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

  const goToNextPage = () => {
    setNextPage(nextPage + 1)
    setPageNumber(pageNumber + 1)
    setPrivatePage(previousPage + 1)
    setSearchNext(true)
    applyFilterAndSort()
  }

  const goToPreviousPage = () => {
    if(previousPage > 0){
      setPrivatePage(previousPage - 1)
      setPageNumber(pageNumber - 1)
      setNextPage(nextPage - 1)
      setSearchPrevious(true)
      applyFilterAndSort()
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
    if(search == ''){
      generalOptions.params.location = defaultSearch
    } else {
      generalOptions.params.location = search
    }
    if(searchPrevious == true){
      generalOptions.params.page = previousPage
      setSearchNext(false)
    }
    if(searchNext == true){
      generalOptions.params.page = nextPage
      setSearchPrevious(false)
    }
    setLoading(true)
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
      <View>
        <TouchableOpacity onPress={() => {goToPreviousPage()}}>
          <FontAwesome style={styles.icon} size={20} name='chevron-right'/>
        </TouchableOpacity>
          {
            previousPage == 0 ? null : <Text>{previousPage}</Text>
          }
          <Text>{pageNumber}</Text>
          <Text>{nextPage}</Text>
        <TouchableOpacity onPress={() => {goToNextPage()}}>
          <FontAwesome style={styles.icon} size={20} name='chevron-right'/>
        </TouchableOpacity>
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