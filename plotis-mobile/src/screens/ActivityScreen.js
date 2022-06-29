import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native'
import ActivityDetail from '../components/ActivityDetail'

const ActivityScreen = ({navigation}) => {

  const activity = [{key: 1}, {key:2}, {key:3}, {key: 4}, {key:5}, {key:6}, {key:7}, {key: 8}, {key:9}, {key:10}]

  const ActivtyDetailStack = () => {
    navigation.navigate('ActivityDetailsStack')
  }

  const renderItem = ({ item }) => (
    <ActivityDetail stytle={styles.tile} ActivtyDetailStack={ActivtyDetailStack}/>
  );

  return (
    <View>
      <View>
        <FlatList 
          data={activity}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22
  }
})

export default ActivityScreen