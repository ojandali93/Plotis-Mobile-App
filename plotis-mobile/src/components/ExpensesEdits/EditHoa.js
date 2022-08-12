import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const EditHoa = (props) => {
  const {
    hoa,
    updateHOA
  } = props

  return (
    <View >
      <View style={styles.rentContainer}>
        <Text style={styles.input}>$</Text>
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputField}
          keyboardType='numeric'
          onChangeText={(number) => updateHOA(number)}
          value={hoa.toString()}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rentContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 8
  },
  input: {
    fontSize: '18',
    paddingRight: 8,
  },
  inputContainer: {
    width: '90%'
  },
  inputField: {
    fontSize: 18,
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  }
})

export default EditHoa