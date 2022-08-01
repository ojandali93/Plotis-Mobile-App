import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native'
import ActivityDetail from '../components/ActivityDetail'

import { getAuth } from "firebase/auth";

import { db } from '../../firebase'
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore'

const ActivityScreen = ({navigation}) => {
  const auth = getAuth()

  const [views, setViews] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {
    if(auth.currentUser === null){
      navigation.navigate('LoginStack')
    } else {
      getRecentSearch()
      getRecentViews()
    }
  }, [])

  const getRecentSearch = () => {
    const collectionRef = collection(db, 'RecentSearch')
    const q = query(collectionRef, where('userId', '==', auth.currentUser.uid), orderBy('createdAt', 'desc'))
    onSnapshot(q, (snapshot) => {
      let searchList = []
      snapshot.docs.forEach((doc) => {
        searchList.push({ ...doc.data(), id: doc.id })
      })
      setSearch(searchList)
    })
  }
  
  const getRecentViews = () => {
    const collectionRef = collection(db, 'RecentView')
    const q = query(collectionRef, where('userId', '==', auth.currentUser.uid), orderBy('createdAt', 'desc'))
    onSnapshot(q, (snapshot) => {
      let viewList = []
      snapshot.docs.forEach((doc) => {
        viewList.push({ ...doc.data(), id: doc.id })
      })
      setViews(viewList)
    })
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if(auth.currentUser === null){
        navigation.navigate('LoginStack')
      } else {
        getRecentSearch()
        getRecentViews()
      }
    })
    return unsubscribe
  }, [navigation])

  return (
    <View>
      <Text>
        Recent Search:
      </Text>
      <FlatList 
        data={search}
        keyExtractor={(item) => {item.createdAt.seconds}}
        renderItem={({item}) => {
          return(
            <View>
              <Text>{item.search}</Text>
            </View>
          )
        }}
      />
      <Text>
        Recently Viewed:
      </Text>
      <FlatList 
        data={views}
        horizontal
        keyExtractor={(item) => {item.createdAt.seconds}}
        renderItem={({item}) => {
          return(
            <View>
              <Text>{item.address}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22
  }
})

export default ActivityScreen