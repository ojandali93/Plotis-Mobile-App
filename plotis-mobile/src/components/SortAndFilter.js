import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'

import { Feather } from 'react-native-vector-icons'

import {Picker} from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';

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
    value: 1, label: '1+', key: 1
  },
  {
    value: 2, label: '2+', key: 2
  },
  {
    value: 3, label: '3+', key: 3
  },
  {
    value: 4, label: '4+', key: 4
  },
  {
    value: 5, label: '5+', key: 5
  },
  { 
    value: 6, label: '6+', key: 6
  }]

  const bathCount = [{
    value: undefined, label: 'Any', key: 7
  },
  {
    value: 1, label: '1+', key: 1
  },
  {
    value: 2, label: '2+', key: 2
  },
  {
    value: 3, label: '3+', key: 3
  },
  {
    value: 4, label: '4+', key: 4
  },
  {
    value: 5, label: '5+', key: 5
  },
  { 
    value: 6, label: '6+', key: 6
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
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.numberItem}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>
              Min. Beds:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <FlatList 
              contentContainerStyle={styles.list}
              data={bedCount}
              horizontal={true}
              keyExtractor={item => item.key}
              renderItem={(item) => {
                if(minBeds === item.item.value){
                  return (
                    <View style={[styles.optionContainerUnselected, {backgroundColor:'#005d91'}]}>
                      <TouchableOpacity onPress={() => {setMinBeds(item.item.value)}}>
                        <Text style={styles.optionsText}>{item.item.label}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                } else {
                  return (
                    <View style={styles.optionContainerUnselected}>
                      <TouchableOpacity onPress={() => {setMinBeds(item.item.value)}}>
                        <Text style={styles.optionsText}>{item.item.label}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
              }}
            />
          </View>

        </View>
        <View style={styles.numberItem}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>
              Max Beds:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <FlatList 
              data={bedCount}
              contentContainerStyle={styles.list}
              horizontal={true}
              keyExtractor={item => item.key}
              renderItem={(item) => {
                if(maxBeds === item.item.value){
                  return (
                    <View style={[styles.optionContainerUnselected, {backgroundColor:'#005d91'}]}>
                      <TouchableOpacity onPress={() => {setMaxBeds(item.item.value)}}>
                        <Text style={styles.optionsText}>{item.item.label}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                } else {
                  return (
                    <View style={styles.optionContainerUnselected}>
                      <TouchableOpacity onPress={() => {setMaxBeds(item.item.value)}}>
                        <Text style={styles.optionsText}>{item.item.label}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
              }}
            />
          </View>
        </View>
        <View style={styles.numberItem}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>
              Min Baths:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <FlatList 
              data={bathCount}
              contentContainerStyle={styles.list}
              horizontal={true}
              keyExtractor={item => item.key}
              renderItem={(item) => {
                // return (
                //   <TouchableOpacity style={styles.optionContainerUnselected} onPress={() => {setMinBaths(item.item.value)}}>
                //     <Text style={styles.optionsText}>{item.item.label}</Text>
                //   </TouchableOpacity>
                // )
                if(minBaths === item.item.value){
                  return (
                    <View style={[styles.optionContainerUnselected, {backgroundColor:'#005d91'}]}>
                      <TouchableOpacity onPress={() => {setMinBaths(item.item.value)}}>
                        <Text style={styles.optionsText}>{item.item.label}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                } else {
                  return (
                    <View style={styles.optionContainerUnselected}>
                      <TouchableOpacity onPress={() => {setMinBaths(item.item.value)}}>
                        <Text style={styles.optionsText}>{item.item.label}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
              }}
            />
          </View>
        </View>
        <View style={styles.numberItem}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>
              Max Baths:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <FlatList 
              data={bathCount}
              contentContainerStyle={styles.list}
              horizontal={true}
              keyExtractor={item => item.key}
              renderItem={(item) => {
                // return (
                //   <TouchableOpacity style={styles.optionContainerUnselected} onPress={() => {setMaxBaths(item.item.value)}}>
                //     <Text style={styles.optionsText}>{item.item.label}</Text>
                //   </TouchableOpacity>
                // )
                if(maxBaths === item.item.value){
                  return (
                    <View style={[styles.optionContainerUnselected, {backgroundColor:'#005d91'}]}>
                      <TouchableOpacity onPress={() => {setMaxBaths(item.item.value)}}>
                        <Text style={styles.optionsText}>{item.item.label}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                } else {
                  return (
                    <View style={styles.optionContainerUnselected}>
                      <TouchableOpacity onPress={() => {setMaxBaths(item.item.value)}}>
                        <Text style={styles.optionsText}>{item.item.label}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
              }}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity  style={styles.sortMinContainer} onPress={() => {updateMinPrice()}}>
            <View style={styles.sortButton}>
              <Text  style={styles.text}>
                Min Price:  
              </Text>
            </View>
            <View style={styles.sortButton}>
              {
                openMinSqft == false ? <Feather style={styles.icon} size={22} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
          </TouchableOpacity>
          {
            openMinPrice == false ? null : <Picker
                                          selectedValue={minPrice}
                                          onValueChange={(itemValue, itemIndex) =>
                                            setMinPrice(itemValue)
                                          }>
                                          <Picker.Item label="Select Min Price" value={0} />
                                          <Picker.Item label="$100,000" value={100000} />
                                          <Picker.Item label="$200,000" value={200000}/>
                                          <Picker.Item label="$300,000" value={300000}/>
                                          <Picker.Item label="$400,000" value={400000}/>
                                          <Picker.Item label="$500,000" value={500000}/>
                                          <Picker.Item label="$600,000" value={600000}/>
                                          <Picker.Item label="$700,000" value={700000}/>
                                          <Picker.Item label="$800,000" value={800000}/>
                                          <Picker.Item label="$900,000" value={900000}/>
                                          <Picker.Item label="$1,000,000" value={1000000}/>
                                          <Picker.Item label="$1,500,000" value={1500000}/>
                                          <Picker.Item label="$2,000,000" value={2000000}/>
                                          <Picker.Item label="$2,500,000" value={2500000}/>
                                          <Picker.Item label="$3,000,000" value={3000000}/>
                                          <Picker.Item label="$3,500,000" value={3500000}/>
                                          <Picker.Item label="$4,000,000" value={4000000}/>
                                          <Picker.Item label="$4,500,000" value={4500000}/>
                                          <Picker.Item label="$5,000,000" value={5000000}/>
                                          <Picker.Item label="$10,000,000" value={10000000}/>
                                          <Picker.Item label="$15,000,000" value={15000000}/>
                                        </Picker>
          }
        </View>
        <View>
          <TouchableOpacity  style={styles.sortMinContainer} onPress={() => {updateMaxPrice()}}>
            <View style={styles.sortButton}>
              <Text  style={styles.text}>
                Max Price:  
              </Text>
            </View>
            <View style={styles.sortButton}>
              {
                openMaxPrice == false ? <Feather style={styles.icon} size={22} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
          </TouchableOpacity>
          {
            openMaxPrice == false ? null : <Picker
                                          selectedValue={minPrice}
                                          onValueChange={(itemValue, itemIndex) =>
                                            setMaxPrice(itemValue)
                                          }>
                                          <Picker.Item label="Select Max Price" value={0} />
                                          <Picker.Item label="$100,000" value={100000} />
                                          <Picker.Item label="$200,000" value={200000}/>
                                          <Picker.Item label="$300,000" value={300000}/>
                                          <Picker.Item label="$400,000" value={400000}/>
                                          <Picker.Item label="$500,000" value={500000}/>
                                          <Picker.Item label="$600,000" value={600000}/>
                                          <Picker.Item label="$700,000" value={700000}/>
                                          <Picker.Item label="$800,000" value={800000}/>
                                          <Picker.Item label="$900,000" value={900000}/>
                                          <Picker.Item label="$1,000,000" value={1000000}/>
                                          <Picker.Item label="$1,500,000" value={1500000}/>
                                          <Picker.Item label="$2,000,000" value={2000000}/>
                                          <Picker.Item label="$2,500,000" value={2500000}/>
                                          <Picker.Item label="$3,000,000" value={3000000}/>
                                          <Picker.Item label="$3,500,000" value={3500000}/>
                                          <Picker.Item label="$4,000,000" value={4000000}/>
                                          <Picker.Item label="$4,500,000" value={4500000}/>
                                          <Picker.Item label="$5,000,000" value={5000000}/>
                                          <Picker.Item label="$10,000,000" value={10000000}/>
                                          <Picker.Item label="$15,000,000" value={15000000}/>
                                        </Picker>
          }
        </View>
        <View>
          <TouchableOpacity  style={styles.sortMinContainer} onPress={() => {updateMinSqft()}}>
            <View style={styles.sortButton}>
              <Text  style={styles.text}>
                Min Sqft:  
              </Text>
            </View>
            <View style={styles.sortButton}>
              {
                openMinSqft == false ? <Feather style={styles.icon} size={22} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
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
          <TouchableOpacity  style={styles.sortMinContainer} onPress={() => {updateMaxSqft()}}>
            <View style={styles.sortButton}>
              <Text style={styles.text}>
                Max Sqft:  
              </Text>
            </View>
            <View style={styles.sortButton}>
              {
                openMaxSqft == false ? <Feather style={styles.icon} size={22} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
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
        <View>
          <TouchableOpacity style={styles.sortMinContainer} onPress={() => {updateSortOpen()}}>
            <View style={styles.sortButton}>
              <Text style={styles.text}>
                Sort Results: 
              </Text>
            </View>
            <View style={styles.sortButton}>
              {
                sortOpen == false ? <Feather style={styles.icon} size={22} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
          </TouchableOpacity>
          {
            sortOpen == false ? null : <KeyboardAvoidingView>
                                        <Picker
                                          style={styles.picker}
                                          selectedValue={selectedSort}
                                          onValueChange={(itemValue, itemIndex) =>
                                            setSelectedSort(itemValue)
                                          }>
                                          <Picker.Item label="Select Sorth" value="unselected" />
                                          <Picker.Item label="Home For You" value="Home_For_You" />
                                          <Picker.Item label="Price (High to Low)" value="Price_High_Low" />
                                          <Picker.Item label="Price (Low to High)" value="Price_Low_High" />
                                          <Picker.Item label="Newest" value="Newest" />
                                          <Picker.Item label="Bedrooms" value="Bedrooms" />
                                          <Picker.Item label="Bathrooms" value="Bathrooms" />
                                          <Picker.Item label="Square Feet" value="Square_Feet" />
                                        </Picker>
                                      </KeyboardAvoidingView>
          }
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => {applyFilterAndSort()}}>
        <Text style={styles.buttonText}>Apply Filter & Sort</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 8,
    marginRight: 8
  },
  scrollContainer: {
    height: '83%'
  },
  sortContainer: {
    paddingVertical: 8,
    borderColor: 'grey',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sortMinContainer: {
    marginTop: 16,
    paddingVertical: 8,
    borderColor: 'grey',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 8
  },
  icon: {
    paddingHorizontal: 8
  },
  picker: {
    display: 'flex',
  },
  numberItem: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  labelContainer: {
    padding: 8
  },
  labelText: {
    fontSize: 18,
    fontWeight: '400',
  },
  listContainer: {
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  list: {
    borderRadius: 8,
    borderColor: 'grey',
    borderWidth: 2
  },
  optionContainerUnselected: {
    padding: 8,
    paddingHorizontal: 12,
    borderLeftWidth: 1,
    borderLeftColor: 'grey',
    borderRightWidth: 1,
    borderRightColor: 'grey'
  },
  optionContainerSelected: {
    padding: 8,
    paddingHorizontal: 12,
    borderLeftWidth: 1,
    borderLeftColor: 'grey', 
    borderRightWidth: 1,
    borderRightColor: 'grey',
    backgroundColor: '#005d91'
  },
  optionsText: {
    fontSize: 18
  },
  buttonContainer: {
    marginVertical: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'darkgrye',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
    backgroundColor: '#005d91'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    paddingVertical: 4
  }
})

export default SortAndFilter
