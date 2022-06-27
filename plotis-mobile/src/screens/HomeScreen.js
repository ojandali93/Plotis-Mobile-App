import { NavigationContainer } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import PropertyTile from '../components/PropertyTile.js'
import SearchBar from '../components/SearchBar.js'

const HomeScreen = ({navigation}) => {
  console.log(navigation)

  const properties = [{key: 1}, {key: 2}, {key: 3}]

  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log(search)
  }, [search])

  const PropertyDetailScreen = () => {
    navigation.navigate('HomeDetailsStack')
  }

  return (
    <View style={styles.screenContainer}>
      <SearchBar search={search} setSearch={setSearch}/>
      <FlatList 
        data={properties}
        renderItem={({item}) => <PropertyTile name={item} PropertyDetailScreen={PropertyDetailScreen}/>}
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