import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';
import {Feather} from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';
import { db } from '../../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const ContactScreen = ({route}) => {
  const {propertyAddress, zpid}  = route.params

  const navigation = useNavigation()

  const collectionRef = collection(db, 'Emails')

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [message, setMessage] = useState()
  const [reason, setReason] = useState()
  const [openReason, setOpenReason] = useState(false)
   
  const updateOpenReason = () => {
    if(openReason == false){
      setOpenReason(true)
    } else {
      setOpenReason(false)
    }
  }
  
  const sendEmail = () => {
    const to = ['contact@plotis.io']
    const emailSubject = firstName + ' ' + lastName + ' contacted you regarding: ' + propertyAddress
    const emailBody = 'You got a new message from :' + firstName + ' ' + lastName + '\n' + 
      'Property: ' + propertyAddress + '\n\n' +
      'Message: ' + message + '\n\n' +
      'Contact: \n' + 'Email: ' + email + '\n' + 'Phone: ' + phone
    addDoc(collectionRef, {
      "property": propertyAddress,
      "email": email,
      "message": emailBody,
      "name": firstName + ' ' + lastName,
      "phone": phone,
      "subject": emailSubject,
      "reason": reason,
      "to": 'contact@plotis.io',
      "createdAt": serverTimestamp()
    })
    .then((response) => {
      navigation.navigate('HomeDetailsStack', {zpid: zpid})
    })
    .catch((error) => {
      console.error(error)
    })
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>Connect With An Agent</Text>  
      </View>
      <View style={styles.sectionColumn}>
        <Text style={styles.text}>
          Ready to buy your next investment property? You have come to the right spot.
          Connect with one of our agents listest below and he will help you throughout the entire 
          process. Just sit back and relax, we will take care of the rest.
        </Text>
      </View>
      <View style={styles.sectionColumn}>
        <Image style={{height: 120, width: 120}} source={{uri: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'}}/>
        <View style={styles.contactContainer}>
          <Text style={styles.label}>Omar Jandali | DRE# 02151051</Text>
          <Text style={styles.label}>Realty One Group | DRE# 0896421</Text>
          <Text style={styles.label}>Email: omar.jandali@plotis.io</Text>
          <Text style={styles.label}>Phone: (949) 403-7179</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subheader}>Get in touch</Text>
      </View>
      <View style={styles.sectionCenter}>
        <Text style={styles.text}>Expect an email response within the next 24 hours. </Text>
      </View>
      <View  style={styles.section}>
        <Text>** Fill up the required fields **</Text>
      </View>
      <View>
        <View style={styles.rentContainer}>
          <Text style={styles.input}>First Name:</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(text) => {setFirstName(text)}}
              value={firstName}
            />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.rentContainer}>
          <Text style={styles.input}>Last Name:</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(text) => {setLastName(text)}}
              value={lastName}
            />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.rentContainer}>
          <Text style={styles.input}>Email:</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(text) => {setEmail(text)}}
              value={email}
            />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.rentContainer}>
          <Text style={styles.input}>Phone:</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(text) => {setPhone(text)}}
              value={phone}
            />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.rentContainer}>
          <Text style={styles.input}>Message:</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.inputField}
              keyboardType='numeric'
              onChangeText={(text) => {setMessage(text)}}
              value={message}
            />
          </View>
        </View>
      </View>
      <View>
      <TouchableOpacity  style={styles.sortMinContainer} onPress={() => {updateOpenReason()}}>
            <View style={styles.sortButton}>
              <Text  style={styles.text}>
                Reason:  
              </Text>
            </View>
            <View style={styles.sortButton}>
              {
                openReason == false ? <Feather style={styles.icon} size={22} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
          </TouchableOpacity>
      </View>
      {
        openReason == false ? null : <Picker
                                      selectedValue={reason}
                                      onValueChange={(itemValue, itemIndex) =>
                                        setReason(itemValue)
                                      }>
                                      <Picker.Item label="No Reason" value={''} />
                                      <Picker.Item label="Property Tour" value={'Property Tour'} />
                                      <Picker.Item label="More Information" value={'More Information'} />
                                      <Picker.Item label="Purchase" value={'Purchase'} />
                                      <Picker.Item label="General Interest" value={'General Interest'} />
                                      <Picker.Item label="Mortgage Info" value={'Mortgage Info'} />
                                      <Picker.Item label="Other" value={'Other'} />
                                    </Picker>
      }
      <View>
        <TouchableOpacity onPress={() => {sendEmail()}}>
          <View style={styles.buttoncontainer}>
            <Text style={styles.button}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 44,
    padding: 8
  },
  section: {
    width: '100%',
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '600'
  },
  subheader: {
    fontSize: 20,
    fontWeight: '600'
  },
  sectionColumn: {
    width: '100%',
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  sectionCenter: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: '400'
  },
  label: {
    paddingLeft: 8,
    marginVertical: 4,
    fontSize: 16,
    fontWeight: '400'
  },
  rentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 18,
    paddingRight: 8,
  },
  inputContainer: {
    width: '100%'
  },
  inputField: {
    fontSize: 18,
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  },
  sortMinContainer: {
    fontSize: 18,
    paddingVertical: 8,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
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

export default ContactScreen