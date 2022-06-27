import React from 'react'
import { Dimensions } from 'react-native'
import { View, Image, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const PropertyDetail = () => {

  let deviceWidth = Dimensions.get('window').width
  var aspectHeight = (deviceWidth / 1.78) + 1
  let carouselImageWidth = (deviceWidth / 4)
  let carouselImageHeight = (carouselImageWidth / 1.78) 

  console.log(carouselImageWidth)
  console.log(carouselImageHeight)

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

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imagesContainer} className="images-container">
          <View style={[styles.mainImageContainer,{height: aspectHeight}]} className="main-image-container">
            <Image style={styles.mainImage} source={require('../../assets/luxury-home-1.jpeg')}/>
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
            <Text style={styles.price}>$ 1,364,333</Text>
            <Text>For Sale</Text>
          </View>
          <View>
            <Text>31276 Palma Dr., Laguna Niguel, CA 92692</Text>
          </View>
          <View style={styles.summaryContainer}>
            <Text>3 Bed | 3 Bath | 3,434 Sqft.</Text>
            <Text>Single Family</Text>
          </View>
        </View>  

        <View style={styles.seperate}></View>

        <View style={styles.infoContainer}>
          <Text style={styles.info}>Days Listed: 23</Text>
          <Text style={styles.info}>Year Built: 1989</Text>
          <Text style={styles.info}>Living Space: 1,432 sqft</Text>
          <Text style={styles.info}>Lot Size: 1.23 acres</Text>
          <Text style={styles.info}>Price / Sqft: $304</Text>
          <Text style={styles.info}>HOA Fee : $99 </Text>
          <Text style={styles.info}>Parking Spaces: 2</Text>
          <Text style={styles.info}>Heading Unit: Central</Text>
          <Text style={styles.info}>Air Conditioning: Cetral</Text>
        </View> 

        <View style={styles.seperate}></View> 

        <View style={styles.priceHistoryContainer}>
          <View>
            <Text>Projected Market Value $1,400,000</Text>
          </View>
          <View style={styles.eventContainer}>
            <Text>Date: 6/17/2022</Text>
            <Text>Event: Price Change</Text>
            <Text>Price: $1,222,222</Text>
          </View>
          <View style={styles.eventContainer}>
            <Text>Date: 6/17/2022</Text>
            <Text>Event: Price Change</Text>
            <Text>Price: $1,222,222</Text>
          </View>
          <View style={styles.eventContainer}>
            <Text>Date: 6/17/2022</Text>
            <Text>Event: Price Change</Text>
            <Text>Price: $1,222,222</Text>
          </View>
          <View style={styles.eventContainer}>
            <Text>Date: 6/17/2022</Text>
            <Text>Event: Price Change</Text>
            <Text>Price: $1,222,222</Text>
          </View>
          <View style={styles.eventContainer}>
            <Text>Date: 6/17/2022</Text>
            <Text>Event: Price Change</Text>
            <Text>Price: $1,222,222</Text>
          </View>
        </View>

        <View style={styles.seperate}></View> 

        <View style={styles.taxHistoryContainer}>
          <View>
            <Text>Projected Market Value $1,400,000</Text>
          </View>
          <View style={styles.eventContainer}>
            <Text>Year: 2021</Text>
            <Text>Tax($): $3,407</Text>
            <Text>Assessment: $304,554</Text>
          </View>
          <View style={styles.eventContainer}>
            <Text>Year: 2021</Text>
            <Text>Tax($): $3,407</Text>
            <Text>Assessment: $304,554</Text>
          </View>
          <View style={styles.eventContainer}>
            <Text>Year: 2021</Text>
            <Text>Tax($): $3,407</Text>
            <Text>Assessment: $304,554</Text>
          </View>
          <View style={styles.eventContainer}>
            <Text>Year: 2021</Text>
            <Text>Tax($): $3,407</Text>
            <Text>Assessment: $304,554</Text>
          </View>
          <View style={styles.eventContainer}>
            <Text>Year: 2021</Text>
            <Text>Tax($): $3,407</Text>
            <Text>Assessment: $304,554</Text>
          </View>
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
    padding: 8
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