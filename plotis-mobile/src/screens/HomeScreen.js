import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { generalOptions } from '../api/zillowApi.js'
import axios from 'axios';

import FontAwesome from 'react-native-vector-icons/Feather'

import { getAuth } from "firebase/auth";
import { db } from '../../firebase'
import { collection, addDoc, serverTimestamp, query, onSnapshot, where, deleteDoc, doc } from 'firebase/firestore'

import PropertyTile from '../components/PropertyTile.js'
import SearchBar from '../components/SearchBar.js'
import LoadingBar from '../components/LoadingBar.js'
import SortAndFilter from '../components/SortAndFilter.js'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  const auth = getAuth()

  const recentViewRef = collection(db, 'RecentView')
  const reventSearchRef = collection(db, 'RecentSearch')

  const defaultSearch = 'Irvine, Ca'

  const [search, setSearch] = useState('')
  const [previousSearch, setPreviousSearch] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

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

  const [favoritesList, setFavoritesList] = useState([])
  const [favoritesZpid, setFavoritesZpid] = useState([])

  const collectionRef = collection(db, 'UserFavorites')

  useEffect(() => {
    generalOptions.params.location = defaultSearch
    axios.request(generalOptions)
      .then(function (response) {
        setResults(response.data.props)
      })
      .catch(function (error) {
        console.error(error);
      });
    if(auth.currentUser === null){
      console.log('nothing')
    } else {
      grabUserFavorites()
    }
  }, [])

  useEffect(() => {
    const newFavorites = []
    favoritesList.forEach((item) => {
      newFavorites.push(item.zpid)
    })
    setFavoritesZpid(newFavorites)
  }, [favoritesList])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if(auth.currentUser === null){
        console.log('not logged in')
      } else {
        grabUserFavorites()
      }
    })
    return unsubscribe
  }, [navigation])

  const grabUserFavorites = () => {
    const q = query(collectionRef, where('userId', '==', auth.currentUser.uid))
    onSnapshot(q, (snapshot) => {
      let favorites = []
      snapshot.docs.forEach((doc) => {
        favorites.push({ ...doc.data(), id: doc.id })
      })
      setFavoritesList(favorites)
    })
  }

  const PropertyDetailScreen = (item) => {
    addDoc(recentViewRef, {
      'userId': auth.currentUser.uid,
      'createdAt': serverTimestamp(),
      "address": item.address,
      "bathrooms": item.bathrooms,
      "bedrooms": item.bedrooms,
      "contingentListingType": item.contingentListingType,
      "country": item.country,
      "currency": item.currency,
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
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.error(error)
    })
    navigation.navigate('HomeDetailsStack', {zpid: item.zpid})
  }

  useEffect(() => {
    setPreviousSearch(search)
  }, [search])

  const removeDoc = (zpid) => {
    let selectedFavorite
    favoritesList.forEach((fav) => {
      if(fav.zpid == zpid.zpid){
        selectedFavorite = fav
      }
    })
    const docRef = doc(db, 'UserFavorites', selectedFavorite.id)
    deleteDoc(docRef)
      .then((response) => {
        console.log('delete favorite')
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const addRecentSearch = () => {
    if(auth.currentUser.uid){
      addDoc(reventSearchRef, {
        'search': search,
        'userId': auth.currentUser.uid,
        'createdAt': serverTimestamp()
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.error(error)
      })
    }
  }

  const newSearch = () => {
    setLoading(true)
    generalOptions.params.location = search
    generalOptions.params.page = pageNumber.toString()
    addRecentSearch()
    axios.request(generalOptions)
      .then(function (response) {
        // let responseResults = response.data
        setLoading(false)
        setResults([])
        setSearch([])
        if(response.data.props){
          setResults(response.data.props)
        } else {
          let propZpid = response.data.zpid
          navigation.navigate('HomeDetailsStack', {zpid: propZpid})
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
      if(previousSearch == ''){
        generalOptions.params.location = defaultSearch
      } else {
        generalOptions.params.location = previousSearch
      }
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
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        newSearch={newSearch}
        updateSortFilter={updateSortFilter}
        setPreviousSearch={setPreviousSearch}/>
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
      <View style={styles.seperator}></View>
      <FlatList 
        data={results}
        renderItem={({item}) => <PropertyTile 
                                  item={item} 
                                  PropertyDetailScreen={PropertyDetailScreen}
                                  favoritesList={favoritesList}
                                  favoritesZpid={favoritesZpid}
                                  removeDoc={removeDoc}/>}
      />
      <View >
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
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 44,
    marginBottom: 40,
    height: 800,
    borderTopColor: 'lightgrey',
    borderTopWidth: 2
  },
  seperator: {
    width: '100%',
    height: 2,
    backgroundColor: 'lightgrey',
    marginBottom: 8
  }
})

export default HomeScreen