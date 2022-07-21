import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import { calculateMortgagePayment, 
  calculateLoanAmount, 
  calculateDownPaymentAmount, 
  calculateDownPaymentPercent,
  calculatePropertyTax } from '../metrics'
import { convertToDollars } from '../utilities'

import EditMortage from './ExpensesEdits/EditMortage'
import EditPropertyTax from './ExpensesEdits/EditPropertyTax'
import EditHomeInsurance from './EditHomeInsurance'
import EditHoa from './ExpensesEdits/EditHoa'
import EditUtilities from './ExpensesEdits/EditUtilities'
import EditAdditionaExpenses from './ExpensesEdits/EditAdditionaExpenses'

const ExpensesComponent = (props) => {
  const {
    property
  } = props

  const [editMortgage, setEditMortgage] = useState(false)
  const [editMortgageIns, setEditMortgageIns] = useState(true)
  const [editPropertyTax, setEditPropertyTax] = useState(false)
  const [editHomeInsurance, setEditHomeInsurance] = useState(false)
  const [editHoa, setEditHoa] = useState(false)
  const [editUtilities, setEditUtilities] = useState(false)
  const [editingAdditionalExpenses, setEditAddtionalExpenses] = useState(false)

  const [homePrice, setHomePrice] = useState(property.price)
  const [downPaymentPercent, setDownPaymentPercent] = useState(.2)
  const [downPaymentAmount, setDownPaymentAmount] = useState(homePrice * downPaymentPercent)
  const [loanProgram, setLoanProgram] = useState('30 Year Fixed')
  const [interestRate, setInterestRate] = useState(property.mortgageRates.thirtyYearFixedRate)
  const [loanAmount, setLoanAmount] = useState(calculateLoanAmount(homePrice, downPaymentAmount))
  const [monthlyMortgage, setMonthlyMortgage] = useState(Math.round(calculateMortgagePayment(loanAmount, interestRate)))

  const [taxRate, setTaxRate] = useState(1.00)
  const [yearlyTax, setYearlyTax] = useState(homePrice * (taxRate / 100))
  const [monthlyTax, setMonthlyTax] = useState(calculatePropertyTax(homePrice, taxRate))

  const [homeInsuranceYearly, setHomeInsuranceYearly] = useState(1947)
  const [homeInsuranceMonthly, setHomeInsuranceMonthly] = useState(162.25)

  const [hoa, setHoa] = useState(0)

  const [utilities, setUtilities] = useState(0)

  const [additionaExpenses, setAdditionalExpenses] = useState(0)

  const [totalMonthlyExpenses, setTotalMonthlyExpenses] = useState(0)

  const isMounted = useRef(false)
  const isMonthlyExpenses = useRef(false)
  const isHOA = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
    } else {
      isMounted.current = true;
    }
  }, []) 

  useEffect(() => {
    if (isHOA.current) {
    } else {
      if(property.hoaFee != null){
        setHoa(propert.hoaFee)
      }
      isHOA.current = true;
    }
  }, [hoa]) 

  useEffect(() => {
    if (isMonthlyExpenses.current) {
    } else {
      calculateTotalExpenses()
      isMonthlyExpenses.current = true
    }
  }, [totalMonthlyExpenses]) 

  useEffect(() => {
    setDownPaymentAmount(calculateDownPaymentAmount(homePrice, downPaymentPercent))
  }, [homePrice])

  useEffect(() => {
    let updatedDownPaymentPercent = calculateDownPaymentPercent(homePrice, downPaymentAmount)
    if(updatedDownPaymentPercent == downPaymentPercent){
      setLoanAmount(calculateLoanAmount(homePrice, downPaymentAmount))
    } else {
      setDownPaymentPercent(updatedDownPaymentPercent)
    }
  }, [downPaymentAmount])

  useEffect(() => {
    setLoanAmount(calculateLoanAmount(homePrice, downPaymentAmount))
  }, [downPaymentPercent])

  useEffect(() => {
    setMonthlyMortgage(calculateMortgagePayment(loanAmount, interestRate))
  }, [loanAmount])

  useEffect(() => {
    setMonthlyMortgage(calculateMortgagePayment(loanAmount, interestRate))
  }, [interestRate])

  useEffect(() => {
    calculateTotalExpenses()
  }, [monthlyMortgage])

  useEffect(() => {
    calculateTotalExpenses()
  }, [monthlyTax])

  useEffect(() => {
    calculateTotalExpenses()
  }, [hoa])

  useEffect(() => {
    calculateTotalExpenses()
  }, [utilities])

  useEffect(() => {
    calculateTotalExpenses()
  }, [additionaExpenses])

  useEffect(() => {
    calculateTotalExpenses()
  }, [homeInsuranceMonthly])

  const editHomePrice = (value) => {
    let price = parseInt(value)
    if(value == ""){
      setHomePrice(0)
    } else {
      setHomePrice(price)
    }
  }

  const editDownPaymentAmount = (value) => {
    if(value == ""){
      setDownPaymentAmount(0)
    } else {
      setDownPaymentAmount(parseInt(value))
    }
  }

  const editDownPaymentPercent = (value) => {
    if(value == ""){
      setDownPaymentPercent(0)
    } else {
      setDownPaymentPercent((parseInt(value))/100)
    }
  }

  const editLoanProgram = (value) => {
    if(value == ""){
      setLoanProgram(0)
    } else {
      setLoanProgram(parseInt(value))
    }
  }

  const editInterestRate = (value) => {
    if(value == ""){
      setInterestRate(0.00)
    } else {
      setInterestRate(parseFloat(value))
    }
  }

  const updateHOA = (value) => {
    if(value == ''){
      setHoa(0)
    } else {
      setHoa(parseInt(value))
    }
  }

  const updateUtilities = (value) => {
    if(value == ''){
      setUtilities(0)
    } else {
      setUtilities(parseInt(value))
    }
  }

  const updateAdditionaExpenses = (value) => {
    if(value == ''){
      setAdditionalExpenses(0)
    } else {
      setAdditionalExpenses(parseInt(value))
    }
  }

  const editingMortgage = () => {
    if(editMortgage == false){
      setEditMortgage(true)
    } else {
      setEditMortgage(false)
    }
  }

  const editMortgageInsurance = (clicked) => {
    if(editMortgageIns == true){
      setEditMortgageIns(false)
    } else {
      setEditMortgageIns(true)
    }
  }

  const editingPropertyTax = () => {
    if(editPropertyTax == false){
      setEditPropertyTax(true)
    } else {
      setEditPropertyTax(false)
    }
  }

  const editingHomeInsurance = () => {
    if(editHomeInsurance == false){
      setEditHomeInsurance(true)
    } else {
      setEditHomeInsurance(false)
    }
  }

  const editingHoa = () => {
    if(editHoa == false){
      setEditHoa(true)
    } else {
      setEditHoa(false)
    }
  }

  const editingUtlities = () => {
    if(editingAdditionalExpenses == false){
      setEditUtilities(true)
    } else {
      setEditUtilities(false)
    }
  }

  const currentlyEditingAdditionaExpenses = () => {
    if(editingAdditionalExpenses == false){
      setEditAddtionalExpenses(true)
    } else {
      setEditAddtionalExpenses(false)
    }
  }

  const calculateTotalExpenses = () => {
    let totalExp = parseInt(monthlyMortgage) + parseInt(monthlyTax) + parseInt(homeInsuranceMonthly) + parseInt(hoa) + parseInt(utilities) + parseInt(additionaExpenses)
    setTotalMonthlyExpenses(totalExp)
  }

  return (
    <View style={styles.taxHistoryContainer}>
      <View style={styles.totalExpenses}>
        <Text>Expected Monthly Expenses: ${convertToDollars(Math.round(totalMonthlyExpenses))}</Text>
      </View>
      <TouchableOpacity onPress={() => {editingMortgage()}}>
        <View style={styles.expense}>
          <Text>Principle & Interest:</Text>
          <Text>${convertToDollars(parseInt(monthlyMortgage))}</Text>
        </View>
      </TouchableOpacity>
      <View>
        {
          editMortgage == false ? null : <EditMortage 
                                            homePrice={homePrice}
                                            downPaymentAmount={downPaymentAmount}
                                            downPaymentPercent={downPaymentPercent}
                                            loanProgram={loanProgram}
                                            interestRate={interestRate}
                                            loanAmount={loanAmount}
                                            monthlyMortgage={monthlyMortgage}
                                            editHomePrice={editHomePrice}
                                            editMortgageInsurance={editMortgageInsurance}
                                            editDownPaymentAmount={editDownPaymentAmount}
                                            editDownPaymentPercent={editDownPaymentPercent}
                                            editLoanProgram={editLoanProgram}
                                            editInterestRate={editInterestRate}
                                          />
        }
      </View>
      {/* <View style={styles.expense}>
        <Text>Mortgage Insurance:</Text>
        <Text>$1,221</Text>
      </View> */}
      <TouchableOpacity onPress={() => {editingPropertyTax()}}>
        <View style={styles.expense}>
          <Text>Property Tax (Monthly):</Text>
          <Text>${convertToDollars(monthlyTax)}</Text>
        </View>
      </TouchableOpacity>
      <View>
        {
          editPropertyTax == false ? null : <EditPropertyTax 
                                              homePrice={homePrice}
                                              taxRate={taxRate}
                                              yearlyTax={yearlyTax}/>
        }
      </View>
      <TouchableOpacity onPress={() => {editingHomeInsurance()}}>
        <View style={styles.expense}>
          <Text>Home Insurance:</Text>
          <Text>${Math.round(convertToDollars(homeInsuranceMonthly))}</Text>
        </View>
      </TouchableOpacity>
      <View>
        {
          editHomeInsurance == false ? null : <EditHomeInsurance 
                                              homeInsuranceYearly={homeInsuranceYearly}
                                              homeInsuranceMonthly={homeInsuranceMonthly}/>
        }
      </View>
      <TouchableOpacity onPress={() => {editingHoa()}}>
        <View style={styles.expense}>
          <Text>HOA Fee's:</Text>
          <Text>${hoa}</Text>
        </View>
      </TouchableOpacity>
      <View>
        {
          editHoa == false ? null : <EditHoa updateHOA={updateHOA} hoa={hoa}/>
        }
      </View>
      <TouchableOpacity onPress={() => {editingUtlities()}}>
        <View style={styles.expense}>
          <Text>Utilities:</Text>
          <Text>${utilities}</Text>
        </View>
      </TouchableOpacity>
      <View>
        {
          editUtilities == false ? null : <EditUtilities updateUtilities={updateUtilities} utilities={utilities}/>
        }
      </View>
      <TouchableOpacity onPress={() => {currentlyEditingAdditionaExpenses()}}>
        <View style={styles.expense}>
          <Text>Additional Expenses:</Text>
          <Text>${additionaExpenses}</Text>
        </View>
      </TouchableOpacity>
      {
        editingAdditionalExpenses == false ? null : <EditAdditionaExpenses 
                                                  updateAdditionaExpenses={updateAdditionaExpenses}
                                                  additionaExpenses={additionaExpenses}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
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

export default ExpensesComponent