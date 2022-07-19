const calculateLoanAmount = (price, downPayment) => {
  let loaAmount = price - downPayment
  return loaAmount
}

const downPaymentPercent = (price, amountDown) => {
  let downPayment = amountDown / price
  return downPayment.toFixed(2)
}

const downPaymentAmount = (price, percentDown) => {
  let downPayment = price * percentDown
  return downPayment.toFixed(2)
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

module.exports = {
  calculateLoanAmount,
  downPaymentPercent,
  downPaymentAmount,
  calculateClosingCost,
  calculateMortgagePayment
} 