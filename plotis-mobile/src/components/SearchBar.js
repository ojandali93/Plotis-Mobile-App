import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'



const SearchBar = (props) => {

  const {
    search, setSearch, newSearch, updateSortFilter
  } = props

  return (
    <View style={styles.searchContainer}>
      <View style={styles.barContainer}>
        <FontAwesome style={styles.icon} size={20} name='search'/>
        <TextInput 
          style={styles.searchBar}
          placeholder="Seach..."
          onChangeText={newText => setSearch(newText)}
          defaultValue={search}
        />
      </View>
      <TouchableOpacity onPress={() => {newSearch()}}>
        <Text style={styles.searchSubmit}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {updateSortFilter()}}>
        <Feather style={styles.icon} size={20} name='sliders'/>
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
    width: '75%'
  },
  searchBar: {
    borderBottomColor: 'black',
    width: '85%',
    borderBottomWidth: 2,
    fontSize: 22,
  },
  searchSubmit: {
    paddingTop: 6
  },
  icon:{
    paddingHorizontal: 8,
    paddingTop: 4
  },
})

export default SearchBar