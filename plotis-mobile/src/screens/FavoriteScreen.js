import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import PropertyTile from '../components/PropertyTile'
 
const FavoriteScreen = ({navigation}) => {

  const properties = [{key: 1}, {key: 2}, {key: 3}]

  const PropertyDetailScreen = () => {
    navigation.navigate('FavoriteDetailsStack')
  }

  return (
    <View style={styles.screenContainer}>
      <FlatList 
        data={properties}
        renderItem={({item}) => <PropertyTile name={item} PropertyDetailScreen={PropertyDetailScreen}/>}
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