import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import { calculateMortgagePayment, 
  calculateLoanAmount, 
  calculateDownPaymentAmount, 
  calculateDownPaymentPercent,
  calculatePropertyTax } from '../metrics'
import { convertToDollars } from '../utilities'

import { Feather } from 'react-native-vector-icons'

import EditMortage from './ExpensesEdits/EditMortage'
import EditPropertyTax from './ExpensesEdits/EditPropertyTax'
import EditHomeInsurance from './EditHomeInsurance'
import EditHoa from './ExpensesEdits/EditHoa'
import EditUtilities from './ExpensesEdits/EditUtilities'
import EditAdditionaExpenses from './ExpensesEdits/EditAdditionaExpenses'

const ExpensesComponent = (props) => {
  const {
    property,
    setTotalOverallExpenses,
    setTotalPrincipalAndInterest,
    setTotalDownPayment,
    setTotalExpWithoutMortgage
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

  const [gasMonthly, setGasMonthly] = useState(0)
  const [sewerMonthly, setSewerMonthly] = useState(0)
  const [waterMonthly, setWaterMonthly] = useState(0)
  const [electricMonthly, setElectricMonthly] = useState(0)

  const [internetMonthly, setInternetMonthly] = useState(0)
  const [maintenanceMonthly, setMaintenanceMonthly] = useState(0)
  const [vacancyMOnhtly, setVacancyMonthly] = useState(0)
  const [managementMonthyl, setManagementMonthly] = useState(0)
  const [repairsMonthly, setRetpairsMonthly] = useState(0)
  const [homeWarrantlyMonthly, setHomeWarrantlyMonthly] = useState(0)
  const [extraExpenses, setExtraExpenses] = useState(0)

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
    setTotalDownPayment(calculateDownPaymentAmount(homePrice, downPaymentPercent))
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
    // setLoanAmount(calculateLoanAmount(homePrice, downPaymentAmount))
    setDownPaymentAmount(calculateDownPaymentAmount(homePrice, downPaymentPercent))
  }, [downPaymentPercent])

  useEffect(() => {
    setMonthlyMortgage(calculateMortgagePayment(loanAmount, parseFloat(interestRate)))
    setTotalPrincipalAndInterest(calculateMortgagePayment(loanAmount, parseFloat(interestRate)))
  }, [loanAmount])

  useEffect(() => {
    setMonthlyMortgage(calculateMortgagePayment(loanAmount, interestRate))
    setTotalPrincipalAndInterest(calculateMortgagePayment(loanAmount, parseFloat(interestRate)))
  }, [interestRate])

  useEffect(() => {
    calculateTotalExpenses()
  }, [monthlyMortgage])

  useEffect(() => {
    calculateTotalExpenses()
    calculateTotalExpenseWithoutMortgage()
  }, [monthlyTax])

  useEffect(() => {
    calculateTotalExpenses()
    calculateTotalExpenseWithoutMortgage()
  }, [hoa])

  useEffect(() => {
    calculateTotalExpenses()
    calculateTotalExpenseWithoutMortgage()
  }, [utilities])

  useEffect(() => {
    calculateTotalExpenses()
    calculateTotalExpenseWithoutMortgage()
  }, [additionaExpenses])

  useEffect(() => {
    calculateTotalExpenses()
    calculateTotalExpenseWithoutMortgage()
  }, [homeInsuranceMonthly])

  useEffect(() => {
    setUtilities(gasMonthly + waterMonthly + electricMonthly + sewerMonthly)
  }, [gasMonthly])
  
  useEffect(() => {
    setUtilities(gasMonthly + waterMonthly + electricMonthly + sewerMonthly)
  }, [waterMonthly])

  useEffect(() => {
    setUtilities(gasMonthly + waterMonthly + electricMonthly + sewerMonthly)
  }, [electricMonthly])

  useEffect(() => {
    setUtilities(gasMonthly + waterMonthly + electricMonthly + sewerMonthly)
  }, [sewerMonthly])

  useEffect(() => {
    setAdditionalExpenses(internetMonthly + maintenanceMonthly + managementMonthyl + vacancyMOnhtly + repairsMonthly + repairsMonthly + homeWarrantlyMonthly + extraExpenses)
  }, [internetMonthly, maintenanceMonthly, managementMonthyl, vacancyMOnhtly, repairsMonthly, homeWarrantlyMonthly, extraExpenses])

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
      setInterestRate(value)
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
    if(editUtilities == false){
      setEditUtilities(true)
    } else {
      setEditUtilities(false)
    }
  }

  const updateGasMonthly = (value) => {
    if(value == ''){
      setGasMonthly(0)
    } else {
      let newValue = parseInt(value)
      setGasMonthly(newValue)
    }
  }

  const updateElectricMonthly = (value) => {
    if(value == ''){
      setElectricMonthly(0)
    } else {
      let newValue = parseInt(value)
      setElectricMonthly(newValue)
    }
  }

  const updateSewerMonthly = (value) => {
    if(value == ''){
      setSewerMonthly(0)
    } else {
      let newValue = parseInt(value)
      setSewerMonthly(newValue)
    }
  }

  const updateWaterMonthly = (value) => {
    if(value == ''){
      setWaterMonthly(0)
    } else {
      let newValue = parseInt(value)
      setWaterMonthly(newValue)
    }
  }

  const updateInternetMonthly = (value) => {
    if(value == ''){
      setInternetMonthly(0)
    } else {
      let newValue = parseInt(value)
      setInternetMonthly(newValue)
    }
  }

  const updateMaintenenceMonthly = (value) => {
    if(value == ''){
      setMaintenanceMonthly(0)
    } else {
      let newValue = parseInt(value)
      setMaintenanceMonthly(newValue)
    }
  }

  const updateManagementMonthly = (value) => {
    if(value == ''){
      setManagementMonthly(0)
    } else {
      let newValue = parseInt(value)
      setManagementMonthly(newValue)
    }
  }

  const updateVacancyMonthly = (value) => {
    if(value == ''){
      setVacancyMonthly(0)
    } else {
      let newValue = parseInt(value)
      setVacancyMonthly(newValue)
    }
  }

  const updateRepairMonthly = (value) => {
    if(value == ''){
      setRetpairsMonthly(0)
    } else {
      let newValue = parseInt(value)
      setRetpairsMonthly(newValue)
    }
  }

  const updateHomeWarranty = (value) => {
    if(value == ''){
      setHomeWarrantlyMonthly(0)
    } else {
      let newValue = parseInt(value)
      setHomeWarrantlyMonthly(newValue)
    }
  }

  const updateExtraExpenses = (value) => {
    if(value == ''){
      setExtraExpenses(0)
    } else {
      let newValue = parseInt(value)
      setExtraExpenses(newValue)
    }
  }

  const currentlyEditingAdditionaExpenses = () => {
    if(editingAdditionalExpenses == false){
      setEditAddtionalExpenses(true)
    } else {
      setEditAddtionalExpenses(false)
    }
  }

  const calculateTotalExpenseWithoutMortgage = () => {
    let totalExp = parseInt(monthlyTax) + parseInt(homeInsuranceMonthly) + parseInt(hoa) + parseInt(utilities) + parseInt(additionaExpenses)
    setTotalExpWithoutMortgage(totalExp)
  }

  const calculateTotalExpenses = () => {
    let totalExp = parseInt(monthlyMortgage) + parseInt(monthlyTax) + parseInt(homeInsuranceMonthly) + parseInt(hoa) + parseInt(utilities) + parseInt(additionaExpenses)
    setTotalOverallExpenses(totalExp)
    setTotalMonthlyExpenses(totalExp)
  }

  return (
    <View style={styles.taxHistoryContainer}>
      <View style={styles.totalExpenses}>
        <Text style={styles.mainText}>Expected Monthly Expenses: ${convertToDollars(Math.round(totalMonthlyExpenses))}</Text>
      </View>
      <View  style={styles.sortMinContainer}>
        <TouchableOpacity  style={styles.rentBreak} onPress={() => {editingMortgage()}}>
          <View style={styles.expense}>
            <View style={styles.expenseValue}>
              <Text style={styles.text}>Principle & Interest:</Text>
            </View>
            <View style={styles.dropDown}>
              <Text style={styles.label}>${convertToDollars(parseInt(monthlyMortgage))}</Text>
              {
                editMortgage == false ? <Feather style={styles.icon} size={24} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
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
      </View>
      {/* <View style={styles.expense}>
        <Text>Mortgage Insurance:</Text>
        <Text>$1,221</Text>
      </View> */}
      <View  style={styles.sortMinContainer}>
        <TouchableOpacity  style={styles.rentBreak} onPress={() => {editingPropertyTax()}}>
          <View style={styles.expense}>
            <View style={styles.expenseValue}>
              <Text style={styles.text}>Property Tax (Monthly):</Text>
            </View>
            <View style={styles.dropDown}>
              <Text style={styles.label}>${convertToDollars(monthlyTax)}</Text>
              {
                editPropertyTax == false ? <Feather style={styles.icon} size={24} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
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
      </View>
      <View  style={styles.sortMinContainer}>
        <TouchableOpacity style={styles.rentBreak} onPress={() => {editingHomeInsurance()}}>
          <View style={styles.expense}>
            <View style={styles.expenseValue}>
              <Text style={styles.text}>Home Insurance:</Text>
            </View>
            <View style={styles.dropDown}>
              <Text style={styles.label}>${Math.round(convertToDollars(homeInsuranceMonthly))}</Text>
              {
                editHomeInsurance == false ? <Feather style={styles.icon} size={24} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
          </View>
        </TouchableOpacity>
        <View>
          {
            editHomeInsurance == false ? null : <EditHomeInsurance 
                                                homeInsuranceYearly={homeInsuranceYearly}
                                                homeInsuranceMonthly={homeInsuranceMonthly}/>
          }
        </View>
      </View>
      <View  style={styles.sortMinContainer}>
        <TouchableOpacity style={styles.rentBreak} onPress={() => {editingHoa()}}>
          <View style={styles.expense}>
            <View style={styles.expenseValue}>
              <Text style={styles.text}>HOA Fee's:</Text>
            </View>
            <View style={styles.dropDown}>
              <Text style={styles.label}>${hoa}</Text>
              {
                editHoa == false ? <Feather style={styles.icon} size={24} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
          </View>
        </TouchableOpacity>
        <View>
          {
            editHoa == false ? null : <EditHoa updateHOA={updateHOA} hoa={hoa}/>
          }
        </View>
      </View>
      <View  style={styles.sortMinContainer}>
        <TouchableOpacity style={styles.rentBreak} onPress={() => {editingUtlities()}}>
          <View style={styles.expense}>
            <View style={styles.expenseValue}>
              <Text style={styles.text}>Utilities:</Text>
            </View>
            <View style={styles.dropDown}>
              <Text style={styles.label}>${utilities}</Text>
              {
                editUtilities == false ? <Feather style={styles.icon} size={24} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
          </View>
        </TouchableOpacity>
        <View>
          {
            editUtilities == false ? null : <EditUtilities 
                                              updateUtilities={updateUtilities} 
                                              utilities={utilities}
                                              gasMonthly={gasMonthly}
                                              updateGasMonthly={updateGasMonthly}
                                              sewerMonthly={sewerMonthly}
                                              updateSewerMonthly={updateSewerMonthly}
                                              waterMonthly={waterMonthly}
                                              updateWaterMonthly={updateWaterMonthly}
                                              electricMonthly={electricMonthly}
                                              updateElectricMonthly={updateElectricMonthly}
                                              />
          }
        </View>
      </View>
      <View  style={styles.sortMinContainer}>
        <TouchableOpacity style={styles.rentBreak} onPress={() => {currentlyEditingAdditionaExpenses()}}>
          <View style={styles.expense}>
            <View style={styles.expenseValue}>
              <Text style={styles.text}>Additional Expenses:</Text>
            </View>
            <View style={styles.dropDown}>
              <Text style={styles.label}>${additionaExpenses}</Text>
              {
                editingAdditionalExpenses == false ? <Feather style={styles.icon} size={24} name='chevron-down'/> : <Feather style={styles.icon} size={22} name='chevron-up'/>
              }
            </View>
          </View>
        </TouchableOpacity>
        {
          editingAdditionalExpenses == false ? null : <EditAdditionaExpenses 
                                                        internetMonthly={internetMonthly}
                                                        maintenanceMonthly={maintenanceMonthly}
                                                        managementMonthyl={managementMonthyl}
                                                        vacancyMOnhtly={vacancyMOnhtly}
                                                        repairsMonthly={repairsMonthly}
                                                        homeWarrantlyMonthly={homeWarrantlyMonthly}
                                                        extraExpenses={extraExpenses}
                                                        updateInternetMonthly={updateInternetMonthly}
                                                        updateMaintenenceMonthly={updateMaintenenceMonthly}
                                                        updateManagementMonthly={updateManagementMonthly}
                                                        updateVacancyMonthly={updateVacancyMonthly}
                                                        updateHomeWarranty={updateHomeWarranty}
                                                        updateExtraExpenses={updateExtraExpenses}
                                                        updateRepairMonthly={updateRepairMonthly}
                                                        />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taxHistoryContainer: {
    width: '100%',
    overflow: 'hidden',
    padding: 8
  },
  totalExpenses: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 8
  },
  expense: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  expenseValue: {
    display: 'flex',
    flexDirection: 'row',
  },
  mainText: {
    fontSize: 22
  },
  label: {
    fontSize: 18,
    marginRight: 8
  },
  dropDown: {
    display: 'flex',
    flexDirection: 'row'
  },
  sortMinContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 8,
    paddingVertical: 8
  },
  rentBreak: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  icon: {
    paddingRight: 4
  }
})

export default ExpensesComponent