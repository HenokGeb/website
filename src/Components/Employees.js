import React from 'react'
import Wrapper from './Wrapper'
import HomePage from './HomePage'
import EmployeePage from './EmployeePage'
//import { useContext } from "react"
//import EmployeeContext from "../EmployeeContext"


function Employees() {
  //const {employees, setEmployeeDetail} = useContext(EmployeeContext)
  return (
    <div>
    <Wrapper>
    <HomePage />
    <EmployeePage/>
    </Wrapper>
    </div>
  )
}

export default Employees