import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

const SearchBar = (props) => {

  const {
    search, setSearch, newSearch, updateSortFilter, setPreviousSearch
  } = props

  return (
    <View style={styles.searchContainer}>
      <View style={styles.barContainer}>
        <FontAwesome style={styles.icon} size={20} name='search'/>
        <TextInput 
          style={styles.searchBar}
          placeholder="Seach (Address, City, State, ...a)"
          onChangeText={(newText) => {setSearch(newText)}}
          defaultValue={search}
        />
      </View>
      <TouchableOpacity onPress={() => {newSearch()}}>
        <Text style={styles.searchSubmit}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterAndSort} onPress={() => {updateSortFilter()}}>
        <Feather size={20} name='sliders'/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 8,
    justifyContent: 'space-between'
  },
  barContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    backgroundColor: 'lightgrey',
    paddingVertical: 8,
    borderRadius: 10
  },
  searchBar: {
    borderBottomColor: 'black',
    width: '85%',
    borderBottomWidth: 2,
    fontSize: 18,
  },
  searchSubmit: {
    marginTop: 10,
    fontSize: 18
  },
  icon: {
    paddingHorizontal: 8,
    paddingTop: 4
  },
  filterAndSort: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderColor: 'lightgrey',
    borderRadius: 8,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2
  }
})

export default SearchBar