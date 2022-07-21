import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const EditHoa = (props) => {
  const {
    hoa,
    updateHOA
  } = props

  return (
    <View>
      <View>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(number) => updateHOA(number)}
          value={hoa.toString()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditHoa