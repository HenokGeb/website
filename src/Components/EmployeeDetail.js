import React from 'react';
import {useContext} from "react";
import EmployeeContext from "../EmployeeContext"

const EmployeeDetail = () => {
const { employeeDetail} = useContext(EmployeeContext);
  return (
      <div style={StyledEmployeeDetail}>
        <img style={StyledImage} src = {employeeDetail.image} alt={employeeDetail.image} />
      <div style = {StyledContent}>
          <h3>{employeeDetail.name}</h3>
             <p>{employeeDetail.occupation}</p>
             <p>{employeeDetail.callMobile}</p>
             <p>{employeeDetail.sMS}</p>
             <p>{employeeDetail.emailAddress}</p>
       </div>
      </div>
  )
};

const StyledEmployeeDetail = {
  //disply: "flex",
  //gap: "100px",
  padding: "100px",
  //alignItem: "center",
  backgroundColor: "#fff",
  


};
const StyledImage = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  alignItem: "center",
  
};
const StyledContent = {
  alignItem: "center",
  //padding: "5px 10px",
}

export default EmployeeDetail;