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

module.exports = {
  convertToDollars,
  convertFirstUpper,
  formatSingleStringAddress
}