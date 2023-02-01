import React from 'react';
import {useContext} from "react";
import {EmployeeContext} from "../EmployeeContext";

const EmployeeListItem = () => {
  const {employees, setEmployeeDetail} = useContext(EmployeeContext)
  
return (
    employees.map(({image, name, occupation}, index) => {
      const handleEmployeeDetail = ()=> {
        setEmployeeDetail(employees[index])
      }

return (
    <div 
    key={index} 
    style = {StyledEmployeeListItem} 
    onClick={handleEmployeeDetail}>
    <img style= {StyledImage} src= {image} alt={image} />
    <div style= {StyleContent}>
        <h4>{name}</h4>
        <p>{occupation}</p>
    </div>
    </div>
 )})
  )
  };

const StyledImage = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  //backgroundColor: "#80DEEA",
  margin: "10px",
 

};
const StyledEmployeeListItem = {
  display: "flex",
  //gap: "10px",
  margin: "5px 0",
  backgroundColor: "###",
  border: "solid 0.25px black",
  borderRadius: "5px"
};
const StyleContent = {
  //fonttWeight: "bold"
  //margin: "30px 5px",
};

export default EmployeeListItem