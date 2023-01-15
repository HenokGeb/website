import React from 'react'
import EmployeeDetail from './EmployeeDetail';
import Header from './Header';

const EmployeePage = ({employees, employeeDetail}) => {
  return (
    <div style= {StyledEmployeePage}>
        <Header title = "Employee"/>
        <EmployeeDetail employeeDetail={employeeDetail} employees = {employees}/>
    </div>
  )
};
const StyledEmployeePage = {
  width: "50%",
  backgroundColor: "#80DEEA",
  fontWeight: "bold",
  border: "black solid 0.25px",
  borderRadius: "10px",
  padding: "10px 0 "
};

export default EmployeePage;