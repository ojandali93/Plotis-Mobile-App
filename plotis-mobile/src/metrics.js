const calculateLoanAmount = (price, downPayment) => {
  let loaAmount = price - downPayment
  return loaAmount
}

const calculateDownPaymentPercent = (price, amountDown) => {
  let downPayment = amountDown / price
  return downPayment.toFixed(2)
}

const calculateDownPaymentAmount = (price, percentDown) => {
  let downPayment = price * percentDown
  return Math.round(downPayment)
}

const calculateClosingCost = (loanAmount) => {
  let closingCost = loanAmount * .03
  return closingCost.toFixed(2)
}

const calculateMortgagePayment = (loanAmount, ir) => {
  let interestRate = (ir / 100)/12
  let powerRate = Math.pow(1 + interestRate, 360)
  let monthlyPayment = loanAmount * ((interestRate * powerRate) / (powerRate - 1))
  return monthlyPayment.toFixed(2)
}

const calculatePropertyTax = (price, taxRate) => {
  let yearlyTax = price * (taxRate / 100) 
  let monthlyTax = yearlyTax / 12 
  return parseInt(Math.round(monthlyTax))
}

module.exports = {
  calculateLoanAmount,
  calculateDownPaymentPercent,
  calculateDownPaymentAmount,
  calculateClosingCost,
  calculateMortgagePayment,
  calculatePropertyTax
} 