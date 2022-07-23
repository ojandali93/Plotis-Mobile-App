import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';

import {Picker} from '@react-native-picker/picker';

const SortAndFilter = (props) => {
  const {
    selectedSort,
    setSelectedSort,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    minBeds,
    setMinBeds,
    maxBeds,
    setMaxBeds,
    maxBaths,
    setMaxBaths,
    minBaths,
    setMinBaths,
    minSqft,
    setMinSqft,
    maxSqft,
    setMaxSqft,
    applyFilterAndSort
  } = props

  const [sortOpen, setSortOpen] = useState(false)
  const [openMinPrice, setOpenMinPrice] = useState(false)
  const [openMaxPrice, setOpenMaxPrice] = useState(false)
  const [openMinSqft, setOpenMidSqft] = useState(false)
  const [openMaxSqft, setOpenMaxSqft] = useState(false)

  const bedCount = [{
    value: undefined, label: 'Any', key: 7
  },
  {
    value: 1, label: '1', key: 1
  },
  {
    value: 2, label: '2', key: 2
  },
  {
    value: 3, label: '3', key: 3
  },
  {
    value: 4, label: '4', key: 4
  },
  {
    value: 5, label: '5', key: 5
  },
  { 
    value: 6, label: '6', key: 6
  }]

  const bathCount = [{
    value: undefined, label: 'Any', key: 7
  },
  {
    value: 1, label: '1', key: 1
  },
  {
    value: 2, label: '2', key: 2
  },
  {
    value: 3, label: '3', key: 3
  },
  {
    value: 4, label: '4', key: 4
  },
  {
    value: 5, label: '5', key: 5
  },
  { 
    value: 6, label: '6', key: 6
  }]

  const updateSortOpen = () => {
    if(sortOpen == false){
      setSortOpen(true)
    } else {
      setSortOpen(false)
    }
  }

  const updateMinPrice = () => {
    if(openMinPrice == false){
      setOpenMinPrice(true)
    } else {
      setOpenMinPrice(false)
    }
  }

  const updateMaxPrice = () => {
    if(openMaxPrice == false){
      setOpenMaxPrice(true)
    } else {
      setOpenMaxPrice(false)
    }
  }

  const updateMinSqft = () => {
    if(openMinSqft == false){
      setOpenMidSqft(true)
    } else {
      setOpenMidSqft(false)
    }
  }

  const updateMaxSqft = () => {
    if(openMaxSqft == false){
      setOpenMaxSqft(true)
    } else {
      setOpenMaxSqft(false)
    }
  }

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => {updateSortOpen()}}>
          <Text>
            Sort Results: 
          </Text>
        </TouchableOpacity>
        {
          sortOpen == false ? null : <Picker
                                        selectedValue={selectedSort}
                                        onValueChange={(itemValue, itemIndex) =>
                                          setSelectedSort(itemValue)
                                        }>
                                        <Picker.Item label="Select Sorth" value="unselected" />
                                        <Picker.Item label="Home For You" value="Home_For_You" />
                                        <Picker.Item label="Price (High to Low)" value="Price_High_Low" />
                                        <Picker.Item label="Price (Low to High)" value="Price_Low_High" />
                                        <Picker.Item label="Newest" value="Newest" />
                                        <Picker.Item label="Home For You" value="Home_For_You" />
                                        <Picker.Item label="Bedrooms" value="Bedrooms" />
                                        <Picker.Item label="Bathrooms" value="Bathrooms" />
                                        <Picker.Item label="Square Feet" value="Square_Feet" />
                                      </Picker>
        }
      </View>
      <View>
        <Text>
          Min. Beds:
        </Text>
        <FlatList 
          data={bedCount}
          horizontal={true}
          keyExtractor={item => item.key}
          renderItem={(item) => {
            return (
              <TouchableOpacity onPress={() => {setMinBeds(item.item.value)}}>
                <Text>{item.item.label}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <View>
        <Text>
          Max Beds:
        </Text>
        <FlatList 
          data={bedCount}
          horizontal={true}
          keyExtractor={item => item.key}
          renderItem={(item) => {
            return (
              <TouchableOpacity onPress={() => {setMaxBeds(item.item.value)}}>
                <Text>{item.item.label}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <View>
        <Text>
          Min Baths:
        </Text>
        <FlatList 
          data={bathCount}
          horizontal={true}
          keyExtractor={item => item.key}
          renderItem={(item) => {
            return (
              <TouchableOpacity onPress={() => {setMinBaths(item.item.value)}}>
                <Text>{item.item.label}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <View>
        <Text>
          Max Baths:
        </Text>
        <FlatList 
          data={bathCount}
          horizontal={true}
          keyExtractor={item => item.key}
          renderItem={(item) => {
            return (
              <TouchableOpacity onPress={() => {setMaxBaths(item.item.value)}}>
                <Text>{item.item.label}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => {updateMinSqft()}}>
          <Text>
            Min Sqft:  
          </Text>
        </TouchableOpacity>
        {
          openMinSqft == false ? null : <Picker
                                        selectedValue={minSqft}
                                        onValueChange={(itemValue, itemIndex) =>
                                          setMinSqft(itemValue)
                                        }>
                                        <Picker.Item label="Select Min Sqft" value={0} />
                                        <Picker.Item label="500" value={500} />
                                        <Picker.Item label="1000" value={1000}/>
                                        <Picker.Item label="1500" value={1500}/>
                                        <Picker.Item label="2000" value={2000}/>
                                        <Picker.Item label="2500" value={2500}/>
                                        <Picker.Item label="3000" value={3000}/>
                                        <Picker.Item label="3500" value={3500}/>
                                        <Picker.Item label="4000" value={4000}/>
                                        <Picker.Item label="5000" value={5000}/>
                                        <Picker.Item label="5500" value={5500}/>
                                        <Picker.Item label="6000" value={6000}/>
                                        <Picker.Item label="6500" value={6500}/>
                                        <Picker.Item label="7000" value={7000}/>
                                        <Picker.Item label="7500" value={7500}/>
                                      </Picker>
        }
      </View>
      <View>
        <TouchableOpacity onPress={() => {updateMaxSqft()}}>
          <Text>
            Max Sqft:  
          </Text>
        </TouchableOpacity>
        {
          openMaxSqft == false ? null : <Picker
                                        selectedValue={maxSqft}
                                        onValueChange={(itemValue, itemIndex) =>
                                          setMaxSqft(itemValue)
                                        }>
                                        <Picker.Item label="Select Max Sqft" value={0} />
                                        <Picker.Item label="500" value={500} />
                                        <Picker.Item label="1000" value={1000}/>
                                        <Picker.Item label="1500" value={1500}/>
                                        <Picker.Item label="2000" value={2000}/>
                                        <Picker.Item label="2500" value={2500}/>
                                        <Picker.Item label="3000" value={3000}/>
                                        <Picker.Item label="3500" value={3500}/>
                                        <Picker.Item label="4000" value={4000}/>
                                        <Picker.Item label="5000" value={5000}/>
                                        <Picker.Item label="5500" value={5500}/>
                                        <Picker.Item label="6000" value={6000}/>
                                        <Picker.Item label="6500" value={6500}/>
                                        <Picker.Item label="7000" value={7000}/>
                                        <Picker.Item label="7500" value={7500}/>
                                      </Picker>
        }
      </View>
      <TouchableOpacity onPress={() => {applyFilterAndSort()}}>
        <Text>Apply Filter & Sort</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SortAndFilter
