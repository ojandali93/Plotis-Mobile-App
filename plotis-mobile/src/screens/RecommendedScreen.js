import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import RecommendedPropertyTile from '../components/RecommendedPropertyTile';

const RecommendedScreen = () => {

  const properties = [{item:1}, {item:2}, {item:3}]

  const renderItem = ({ item }) => (
    <RecommendedPropertyTile></RecommendedPropertyTile>
  );

  return (
    <View>
      <View className="sectionContainer">
        <Text>Recommended Properties</Text>
        <FlatList 
          horizontal
          data={properties}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default RecommendedScreen