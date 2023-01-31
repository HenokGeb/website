import React from 'react'
import EmployeeDetail from './EmployeeDetail';
import Header from './Header';
//import { useContext } from "react"
//import EmployeeContext from "../EmployeeContext"

const EmployeePage = () => {
  //const { employees, employeeDetail} = useContext(EmployeeContext)
  return (
    <div style= {StyledEmployeePage}>
        <Header title = "Employee"/>
        <EmployeeDetail/>
    </div>
  )
};
const StyledEmployeePage = {
  width: "50%",
  //backgroundColor: "#42A5F5",
  fontWeight: "bold",
  border: "black solid 0.25px",
  borderRadius: "10px",
  padding: "10px 0 "
};

export default EmployeePage;