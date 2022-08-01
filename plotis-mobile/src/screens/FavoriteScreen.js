import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { getAuth } from "firebase/auth";
import { app, db } from '../../firebase'
import {
  collection, getDocs, addDoc, onSnapshot, query, where
} from 'firebase/firestore'

import PropertyTile from '../components/PropertyTile'
import FavoritesTile from '../components/FavoritesTile';
 
const FavoriteScreen = ({navigation}) => {
  const auth = getAuth()

  const [favorites, setFavorites] = useState([])
  const [favoritesZpid, setFavoritesZpid] = useState([])

  useEffect(() => {
    if(auth.currentUser === null){
      navigation.navigate('LoginStack')
    } else {
      collectuserFavorites()
    }
  }, [])

  const collectuserFavorites = () => {
    const collectionRef = collection(db, 'UserFavorites')
    const q = query(collectionRef, where('userId', '==', auth.currentUser.uid))
    onSnapshot(q, (snapshot) => {
      let properties = []
      snapshot.docs.forEach((doc) => {
        properties.push({ ...doc.data(), id: doc.id })
      })
      console.log('hello')
      setFavorites(properties)
    })
  }

  useEffect(() => {
    favorites.forEach((item) => {
      console.log(item.zpid)
      favoritesZpid.push(item.zpid)
    })
  }, [favorites])

  const PropertyDetailScreen = (zpid) => {
    console.log(zpid)
    navigation.navigate('HomeDetailsStack', {zpid: zpid})
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if(auth.currentUser === null){
        navigation.navigate('LoginStack')
      } else {
        collectuserFavorites()
      }
    })
    return unsubscribe
  }, [navigation])

  return (
    <View>
      <FlatList 
        data={favorites}
        keyExtractor={(item) => {item.createdAt}}
        renderItem={({item}) => <FavoritesTile 
                                  item={item} 
                                  PropertyDetailScreen={PropertyDetailScreen}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22
  }
})

export default FavoriteScreen