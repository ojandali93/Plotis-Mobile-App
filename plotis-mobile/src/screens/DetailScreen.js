import React, { useState, useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import {Text, View, StyleSheet, TouchableOpacity, Button, Image, FlatList, ScrollView} from 'react-native'

import SummaryComponent from '../components/SummaryComponent'
import DetailsComponent from '../components/DetailsComponent'
import PropertyValueComponent from '../components/PropertyValueComponent'
import TaxHistoryComponent from '../components/TaxHistoryComponent'
import ExpensesComponent from '../components/ExpensesComponent'
import RevenueComponent from '../components/RevenueComponent'
import InvestmentMetrics from '../components/InvestmentMetrics'
import ContactAgentComponent from '../components/ContactAgentComponent'


import { calculateMortgagePayment } from '../metrics'

import { propertyOptions } from '../api/zillowApi'

import { convertEpochToDate } from '../utilities'

import axios from 'axios';

const DetailScreen = (props) => {
  const {
    route
  } = props

  const [property, setProperty] = useState(route.params.property)
  const [loadedData, setLoadedData] = useState(false)
  const [propertyAddress, setPropertyAddress] = useState('')
  const [priceHistory, setPriceHistory] = useState([])
  const [taxHistory, setTaxHistory] = useState([])

  const [totalOverallExpenses, setTotalOverallExpenses] = useState(0)
  const [totalOverallRevenue, setTotalOverallRevenue] = useState(0)
  const [totalPrincipalAndInterest, setTotalPrincipalAndInterest]= useState(0)
  const [totalDownPayment, setTotalDownPayment] = useState(0)

  const [totalExpWithoutMortgage, setTotalExpWithoutMortgage] = useState(0)

  const isMounted = useRef(false)

  let deviceWidth = Dimensions.get('window').width
  var aspectHeight = (deviceWidth / 1.78) + 1
  let carouselImageWidth = (deviceWidth / 4)
  let carouselImageHeight = (carouselImageWidth / 1.78) 

  let zpid = route.params.zpid

  let options = propertyOptions
  options.params.zpid = zpid

  useEffect(() => {
    axios.request(options)
      .then(function (response) {
        setProperty(response.data)
        createPriceHistory(response.data.priceHistory)
        createTaxHistory(response.data.taxHistory)
      }).catch(function (error) {
        console.error(error);
      });
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      const fullAddress = property.streetAddress + '. ' + property.city + ', ' + property.state + ' ' + property.zipcode
      setPropertyAddress(fullAddress)
      setLoadedData(true)
    } else {
      isMounted.current = true;
    }
  }, [property]);

  const createPriceHistory = (priceHistory) => {
    let priceHistoryList = []
    if(priceHistory.length <= 5 && priceHistory.length > 0){
      setPriceHistory(priceHistory)
    } 
    if(priceHistory.length == 0){
      let currentPriceHistory = [{
        'date': '2022-07-15',
        'event': 'List For Sale',
        'price': property.price
      }]
      setPriceHistory(currentPriceHistory)
    }
    if(priceHistory.length > 5){
      for(let i = 0; i < 5; i++){
        priceHistoryList.push(priceHistory[i])
      }
      setPriceHistory(priceHistoryList)
    }
  }

  const createTaxHistory = (taxHistory) => {
    let taxHistoryList = []
    for(let i = 0; i < 5; i++){
      taxHistoryList.push(taxHistory[i])
    }
    setTaxHistory(taxHistoryList)
  }

  const loadingScreen = () => {
    return(
      <View>
        <Text>Loading Data</Text>
      </View>
    )
  }

  const loadedScreen = () => {
    return(
      <ScrollView>
        <View style={styles.imagesContainer} className="images-container">
          <View style={[styles.mainImageContainer,{height: aspectHeight}]} className="main-image-container">
            <Image style={styles.mainImage} source={{uri: property.imgSrc}}/>
          </View>
          <View style={styles.carouselContainer} className="image-carousel-image">
            {/* <FlatList 
              horizontal
              data={carouselImages}
              renderItem={({item}) => <Image style={{height: carouselImageHeight, width:carouselImageWidth}} source={require('../../assets/luxury-home-1.jpeg')}/>}
            /> */}
          </View>
        </View>

        <SummaryComponent property={property} propertyAddress={propertyAddress}/>

        <View style={styles.seperate}></View>

        <DetailsComponent property={property} />

        <View style={styles.seperate}></View>

        <PropertyValueComponent property={property} priceHistory={priceHistory}/>

        <View style={styles.seperate}></View> 
              
        <TaxHistoryComponent property={property} taxHistory={taxHistory}/>

        <View style={styles.seperate}></View>

        <RevenueComponent 
          property={property}
          setTotalOverallRevenue={setTotalOverallRevenue}/>

        <View style={styles.seperate}></View>

        <ExpensesComponent 
          property={property}
          setTotalOverallExpenses={setTotalOverallExpenses}
          setTotalPrincipalAndInterest={setTotalPrincipalAndInterest}
          setTotalDownPayment={setTotalDownPayment}
          setTotalExpWithoutMortgage={setTotalExpWithoutMortgage}
        />

        <View style={styles.seperate}></View>

        <InvestmentMetrics 
          property={property}
          totalOverallExpenses={totalOverallExpenses}
          totalOverallRevenue={totalOverallRevenue}
          totalPrincipalAndInterest={totalPrincipalAndInterest}
          totalDownPayment={totalDownPayment}
          totalExpWithoutMortgage={totalExpWithoutMortgage}
        />

        <View style={styles.seperate}></View>

        <ContactAgentComponent property={property}/>
        
      </ScrollView>
    )
  }

  return (
    <>
      {
        loadedData == false ? loadingScreen() : loadedScreen()
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  imagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  mainImageContainer: {
    width: '100%',
    overflow: 'hidden',
  },
  mainImage: {
    width: '100%',
    height: '100%'
  },
  carouselContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  seperate: {
    height: 2,
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 8
  },
})

export default DetailScreen