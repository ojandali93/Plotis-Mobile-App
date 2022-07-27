import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import email from 'react-native-email'
import { db } from '../../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const ContactAgentComponent = (props) => {
  
  const {
    property
  } = props

  const propertyAddress = property.address.streetAddress + ', ' + property.address.city +
    ', ' + property.address.state + ' ' + property.address.zipcode

  const [name, setName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [phone, ssetPhone] = useState('')
  const [message, setMessage] = useState('')

  const collectionRef = collection(db, 'Emails')
  
  const sendEmail = () => {
    const to = ['contact@plotis.io']
    const emailSubject = name + ' contacted you regarding: ' + propertyAddress
    const emailBody = 'You got a new message from :' + name + '\n' + 
      'Property: ' + propertyAddress + '\n\n' +
      'Message: ' + message + '\n\n' +
      'Contact: \n' + 'Email: ' + userEmail + '\n' + 'Phone: ' + phone

    addDoc(collectionRef, {
      "property": propertyAddress,
      "email": userEmail,
      "message": emailBody,
      "name": name,
      "phone": phone,
      "subject": emailSubject,
      "to": 'contact@plotis.io',
      "createdAt": serverTimestamp()
    })
    .then((response) => {

    })
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <View>
      <View>
        <Text>Contact An Agent</Text>
        <Text>Interested in the property above, connect with one of our agents that will be able to assist you!</Text>
      </View>
      <View>
        <Text>Agent:</Text>
        <View>
          <Image style={{height: 40, width: 40}} source={{uri: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'}}/>
          <View>
            <Text>Omar Jandali | DRE# 0121051</Text>
            <Text>Realty One Group</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>Name</Text>
        <TextInput 
          style={styles.creative}
          value={name}
          onChangeText={(text) => {setName(text)}}
        />
        <Text>Email</Text>
        <TextInput 
          style={styles.creative}
          value={email}
          onChangeText={(text) => {setUserEmail(text)}}
        />
        <Text>Phone</Text>
        <TextInput 
          style={styles.creative}
          value={phone}
          onChangeText={(text) => {ssetPhone(text)}}
        />
        <Text>Message</Text>
        <TextInput 
          style={styles.creative}
          value={message}
          onChangeText={(text) => {setMessage(text)}}
        />
        <TouchableOpacity onPress={() => {sendEmail()}}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  creative: {

  }
})

export default ContactAgentComponent