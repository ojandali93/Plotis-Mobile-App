import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import RecommendedPropertyTile from '../components/RecommendedPropertyTile';

const RecommendedScreen = ({navigation}) => {

  const properties = [{item:1}, {item:2}, {item:3}]

  const RecommendedDetailStack = () => {
    navigation.navigate('RecommendedDetailStack')
  }

  const renderItem = ({ item }) => (
    <RecommendedPropertyTile stytle={styles.tile} RecommendedDetailStack={RecommendedDetailStack}/>
  );

  return (
    <View>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.categoryTitle}>Recommended Properties</Text>
          <FlatList 
            horizontal
            data={properties}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.categoryTitle}>Recommended Properties</Text>
          <FlatList 
            horizontal
            data={properties}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.categoryTitle}>Recommended Properties</Text>
          <FlatList 
            horizontal
            data={properties}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 8
  },
  categoryTitle: {
    paddingVertical: 8 
  }
})

export default RecommendedScreen