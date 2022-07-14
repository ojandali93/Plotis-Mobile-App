import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { View, Image, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { propertyOptions } from '../api/zillowApi'

import { convertToDollars, convertEpochToDate } from '../utilities'

import axios from 'axios';

const PropertyDetail = (props) => {
  const {
    route
  } = props

  const [property, setProperty] = useState({})
  const [loading, setLoading] = useState(false)
  const [propertyAddress, setPropertyAddress] = useState('')
  const [taxHistory, setTaxHistory] = useState([])
  const [priceHistory, setPriceHistory] = useState([])

  let zpid = route.params.zpid

  let deviceWidth = Dimensions.get('window').width
  var aspectHeight = (deviceWidth / 1.78) + 1
  let carouselImageWidth = (deviceWidth / 4)
  let carouselImageHeight = (carouselImageWidth / 1.78) 

  let options = propertyOptions
  options.params.zpid = zpid
 
  useEffect(() => {
    axios.request(options)
      .then(function (response) {
        setProperty(response.data)
      }).catch(function (error) {
        console.error(error);
      });
  }, [])

  const createTaxHistory = (taxHistory) => {
    let taxHistoryList = []
    for(let i = 0; i < 5; i++){
      console.log('tax: ', taxHistory[i])
      taxHistoryList.push(taxHistory[i])
    }
    setTaxHistory(taxHistoryList)
  }

  const createPriceHistory = (priceHistory) => {
    let priceHistoryList = []
    for(let i = 0; i < 5; i++){
      priceHistoryList.push(priceHistory[i])
    }
    setPriceHistory(priceHistoryList)
  }

  useEffect(() => {
    setLoading(true)
    const fullAddress = property.streetAddress + '. ' + property.city + ', ' + property.state + ' ' + property.zipcode
    setPropertyAddress(fullAddress)
    createTaxHistory(property.taxHistory)
    createPriceHistory(property.priceHistory)
  }, [property])

  const carouselImages = [
    {
      image: '../../assets/luxury-home-1.jpeg'
    },
    {
      image: '../../assets/luxury-home-1.jpeg'
    },
    {
      image: '../../assets/luxury-home-1.jpeg'
    },
    {
      image: '../../assets/luxury-home-1.jpeg'
    },
    {
      image: '../../assets/luxury-home-1.jpeg'
    },
    {
      image: '../../assets/luxury-home-1.jpeg'
    },
    {
      image: '../../assets/luxury-home-1.jpeg'
    } 
  ]

  const loadingContent = <Text>Loading</Text>

  const loadedContent = <ScrollView>
    <View style={styles.imagesContainer} className="images-container">
      <View style={[styles.mainImageContainer,{height: aspectHeight}]} className="main-image-container">
        <Image style={styles.mainImage} source={{uri: property.imgSrc}}/>
      </View>
      <View style={styles.carouselContainer} className="image-carousel-image">
        <FlatList 
          horizontal
          data={carouselImages}
          renderItem={({item}) => <Image style={{height: carouselImageHeight, width:carouselImageWidth}} source={require('../../assets/luxury-home-1.jpeg')}/>}
        />
      </View>
    </View>

    <View style={styles.contentContainer}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${convertToDollars(property.price)}</Text>
        <Text>{property.homeStatus}</Text>
      </View>
      <View>
        <Text>{propertyAddress}</Text>
      </View>
      <View style={styles.summaryContainer}>
        <Text>{property.bedrooms} Bed | {property.bathrooms} Bath | {convertToDollars(property.livingArea)} Sqft.</Text>
        <Text>{property.homeType}</Text>
      </View>
    </View>  

    <View style={styles.seperate}></View>

    <View style={styles.infoContainer}>
      <View style={styles.infoView}>
        <Text style={styles.info}>Listed: {property.timeOnZillow}</Text>
        <Text style={styles.info}>Year Built: {property.resoFacts.yearBuilt}</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}>Living Space: {property.resoFacts.livingArea}</Text>
        <Text style={styles.info}>Lot Size: {property.resoFacts.lotSize}</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}>Price / Sqft: ${convertToDollars(property.resoFacts.pricePerSquareFoot)}</Text>
        <Text style={styles.info}>HOA Fee : ${
          property.monthlyHoaFee == null ? 0 : property.monthlyHoaFee
        } </Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}>Parking Spaces: {property.resoFacts.garageSpaces}</Text>
        <Text style={styles.info}>Levels: {property.resoFacts.levels}</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}>Heating: {
          property.resoFacts.hasHeating == true ? <Text>Included</Text> : <Text>Not Included</Text>
        }</Text>
        <Text style={styles.info}>Air Conditioning: {
          property.resoFacts.hasCooling == true ? <Text>Included</Text> : <Text>Not Included</Text>
        }</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}>MLS Id: {property.mlsid}</Text>
        <Text style={styles.info}>Brokerage: {property.brokerageName}</Text>
      </View>
    </View> 

    <View style={styles.seperate}></View> 

    <View style={styles.priceHistoryContainer}>
      <View>
        <Text>Projected Market Value ${convertToDollars(property.zestimate)}</Text>
      </View>
      <View style={styles.eventContainer}>
        <Text>Date</Text>
        <Text>Event</Text>
        <Text>Price</Text>
      </View>
      <FlatList 
        data={priceHistory}
        key={priceHistory.time}
        renderItem={({item}) => {
          return(
            <View style={styles.eventContainer}>
              <Text>{item.date}</Text>
              <Text>{item.event}</Text>
              <Text>${convertToDollars(item.price)}</Text>
            </View>
          )
        }}
      />
    </View>

    <View style={styles.seperate}></View> 

    <View style={styles.taxHistoryContainer}>
      <View>
        <Text>Projected Market Value $1,400,000</Text>
      </View>
      <View style={styles.eventContainer}>
        <Text>Year</Text>
        <Text>Tax($)</Text>
        <Text>Assessment</Text>
      </View>
      <FlatList 
        data={taxHistory}
        key={taxHistory.time}
        renderItem={({item}) => {
          return (
            <View style={styles.eventContainer}>
              <Text>{convertEpochToDate(item.time)}</Text>
              <Text>{item.taxPaid}</Text>
              <Text>${convertToDollars(item.value)}</Text>
            </View>
          )
        }}
      />
    </View>

    <View style={styles.seperate}></View> 

    <View style={styles.taxHistoryContainer}>
      <View style={styles.totalExpenses}>
        <Text>Expected Monthly Expenses: $2,112</Text>
      </View>
      <View style={styles.expense}>
        <Text>Principle & Interest:</Text>
        <Text>$1,938</Text>
      </View>
      <View style={styles.expense}>
        <Text>Mortgage Insurance:</Text>
        <Text>$1,938</Text>
      </View>
      <View style={styles.expense}>
        <Text>Property Tax (Monthly):</Text>
        <Text>$1,938</Text>
      </View>
      <View style={styles.expense}>
        <Text>Home Insurance:</Text>
        <Text>$1,938</Text>
      </View>
      <View style={styles.expense}>
        <Text>HOA Fee's:</Text>
        <Text>$1,938</Text>
      </View>
      <View style={styles.expense}>
        <Text>Utilities:</Text>
        <Text>$1,938</Text>
      </View>
      <View style={styles.expense}>
        <Text>Additional Expenses:</Text>
        <Text>$1,938</Text>
      </View>
    </View>

    <View style={styles.seperate}></View> 

    <View style={styles.taxHistoryContainer}>
      <View style={styles.totalExpenses}>
        <Text>Expected Monthly Revenue: $$2,400</Text>
      </View>
      <View style={styles.expense}>
        <Text>Monthly Rent (Total):</Text>
        <Text>$$2,400</Text>
      </View>
      <View style={styles.expense}>
        <Text>Additional Revenue:</Text>
        <Text>$0</Text>
      </View>
    </View>

    <View style={styles.seperate}></View> 

    <View style={styles.taxHistoryContainer}>
      <View style={styles.totalExpenses}>
        <Text>Investment Metrics:</Text>
      </View>
      <View style={styles.expense}>
        <Text>Total Monthly Expenses:</Text>
        <Text>$$2,400</Text>
      </View>
      <View style={styles.expense}>
        <Text>Total Yearly Expenses:</Text>
        <Text>$0</Text>
      </View>
      <View style={styles.expense}>
        <Text>Total Monthly Revenue:</Text>
        <Text>$$2,400</Text>
      </View>
      <View style={styles.expense}>
        <Text>Total Yearly Revenue:</Text>
        <Text>$0</Text>
      </View>
      <View style={styles.expense}>
        <Text>Net Operating Income (Monthly):</Text>
        <Text>$$2,400</Text>
      </View>
      <View style={styles.expense}>
        <Text>Net Operating Income (Yearlly):</Text>
        <Text>$0</Text>
      </View>
      <View style={styles.expense}>
        <Text>CAP Rate:</Text>
        <Text>$$2,400</Text>
      </View>
      <View style={styles.expense}>
        <Text>Cash On Cash Return:</Text>
        <Text>$0</Text>
      </View>
      <View style={styles.expense}>
        <Text>Total Cashflow (Month):</Text>
        <Text>$$2,400</Text>
      </View>
      <View style={styles.expense}>
        <Text>Total Cashflow (Yearly):</Text>
        <Text>$0</Text>
      </View>
      <View style={styles.expense}>
        <Text>Return On Initial Investment (Year 1):</Text>
        <Text>$$2,400</Text>
      </View>
      <View style={styles.expense}>
        <Text>Return On Initial Investment (Year 5):</Text>
        <Text>$0</Text>
      </View>
      <View style={styles.expense}>
        <Text>Return On Initial Investment (Year 10):</Text>
        <Text>$0</Text>
      </View>
    </View>

    <View style={styles.seperate}></View> 

    <View style={styles.taxHistoryContainer}>
      <View style={styles.contactContainer}>
        <Text>Listing Agent: Omar Jandali (DRE# 02151051)</Text>
        <Text>Listing Brokerage: Compass (DRE# 00132433)</Text>
      </View>
      <View style={styles.expense}>
        <TextInput placeholder='First Name'/>
        <TextInput placeholder='Last Name'/>
      </View>
      <View style={styles.expense}>
        <TextInput placeholder='Subject'/>
      </View>
      <View style={styles.expense}>
        <TextInput placeholder='Message'/>
      </View>
      <Button title='Submit'/>
      
    </View>
    
</ScrollView>


  return(
    <View>
      {
        loading == false ? loadingContent : loadedContent 
      }
    </View>
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
  contentContainer: {
    width: '100%',
    backgroundColor: '#D3D3D3',
    overflow: 'hidden',
    padding: 8
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  summaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6
  },
  seperate: {
    height: 2,
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 8
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#D3D3D3',
    overflow: 'hidden',
    padding: 8,
    display: 'flex',
    flexDirection: 'column'
  },
  infoView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },  
  info: {
    paddingVertical: 6,
  },
  priceHistoryContainer: {
    width: '100%',
    backgroundColor: '#D3D3D3',
    overflow: 'hidden',
    padding: 8
  },
  eventContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6
  },
  taxHistoryContainer: {
    width: '100%',
    backgroundColor: '#D3D3D3',
    overflow: 'hidden',
    padding: 8
  },
  totalExpenses: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  expense: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
})

export default PropertyDetail