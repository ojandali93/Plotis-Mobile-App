import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ActivityDetail = (props) => {
  const {
    ActivtyDetailStack
  } = props

  const dimensionWidth = Dimensions.get('window').width
  const imageWidth = 120
  const imageHeight = (imageWidth / 1.78) + 1

  return (
    <>
      <TouchableOpacity onPress={() => {ActivtyDetailStack()}}>
        <View style={[styles.activityContainer, {width: dimensionWidth}]}>
          <View style={styles.imageContainer}>
            <Image style={[styles.mainImage, {height: imageHeight, width: imageWidth}]} source={require('../../assets/luxury-home-1.jpeg')}/>
          </View>
          <View style={styles.details}>
            <View>
              <Text>1243 Atlantic Circle</Text>
              <Text>Moreno Valley, CA 9255s</Text>
            </View>
            <View style={styles.activity}>
              <Text style={{fontWeight: 'bold'}}>Price cut -$100,000</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  activityContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'grey'
  },
  imageContainer: {
    padding: 8
  },
  details: {
    paddingVertical: 8
  },
  activity: {
    marginTop: 8
  }
})

export default ActivityDetail