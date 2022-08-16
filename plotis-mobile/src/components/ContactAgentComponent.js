import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import email from 'react-native-email'
import { db } from '../../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native';

const ContactAgentComponent = ({property}) => {
  const navigation = useNavigation()

  const propertyAddress = property.address.streetAddress + ', ' + property.address.city +
    ', ' + property.address.state + ' ' + property.address.zipcode

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

  const contactScreen = () => {
    console.log(propertyAddress)
    navigation.navigate('ContactAgentStack', {propertyAddress: propertyAddress, zpid:property.zpid})
  }

  return (
    <View style={styles.container}>
      <View style={styles.connect}>
        <Text style={styles.header}>Connect With An Agent</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Interested in the property above, connect with one of our agents that will be able to assist you!</Text>
      </View>
      <View>
        <View style={styles.infoContainer}>
          <Image style={{height: 80, width: 80}} source={{uri: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'}}/>
          <View style={styles.contactContainer}>
            <Text style={styles.label}>Omar Jandali</Text>
            <Text style={styles.label}>DRE# 02151051</Text>
            <Text style={styles.label}>Realty One Group</Text>
            <Text style={styles.label}>DRE# 0896421</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => {contactScreen()}}>
        <View style={styles.buttoncontainer}>
          <Text style={styles.button}>Connect With Agent</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  connect: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 8
  },
  header: {
    fontSize: 24
  },
  message: {
    fontSize: 16
  },
  messageContainer: {
    marginBottom: 8
  },
  infoContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  contactContainer: {
    marginLeft: 16
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttoncontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#005d91',
    marginTop: 12
  },
  button: {
    fontSize: 16,
    paddingVertical: 16,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default ContactAgentComponent