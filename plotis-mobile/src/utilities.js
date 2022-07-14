const convertToDollars = (price) => {
  let dollarUSLocale = Intl.NumberFormat('en-US')
  let dollarAmount = dollarUSLocale.format(price)
  return dollarAmount
}

const convertFirstUpper = (text) => {
  let textToConvert = text.toLowerCase()
  let reformatedText = textToConvert.replace('_', ' ')
  let formattedText = reformatedText.charAt(0).toUpperCase() + reformatedText.slice(1)
  return formattedText
}

const formatSingleStringAddress = (address) => {
  let reformattedAddress = address.split(', ')
  return reformattedAddress
}

const buildAddres = (street, city, state, zip) => {
  return street + ' ' + city + ', ' + state + ' ' + zip
}

const convertEpochToDate = (timestamp) => {
  console.log(new Date(timestamp))
  let convertedDate = new Date(timestamp)
  console.log(typeof(convertedDate.toString()))
  let stringDate = convertedDate.toString()
  let fullDate = stringDate.split(' ')
  return fullDate[3]
  
}

module.exports = {
  convertToDollars,
  convertFirstUpper,
  formatSingleStringAddress,
  buildAddres,
  convertEpochToDate
}