import React from 'react'
import Wrapper from './Wrapper'
import HomePage from './HomePage'
import EmployeePage from './EmployeePage'


function Employees(props) {
  return (
    <div>
    <Wrapper>
    <HomePage setEmployeeDetail= {props.setEmployeeDetail} employees = {props.employees} />
    <EmployeePage employeeDetail= {props.employeeDetail} employees = {props.employees} />
    </Wrapper>
    </div>
  )
}

export default Employees