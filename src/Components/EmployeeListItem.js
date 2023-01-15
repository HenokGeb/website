import React from 'react';

const EmployeeListItem = ({employees, setEmployeeDetail}) => {
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
  backgroundColor: "#80DEEA",
  margin: "10px",
 

};
const StyledEmployeeListItem = {
  display: "flex",
  //gap: "10px",
  margin: "20px",
};
const StyleContent = {
  margin: "30px 5px",
};

export default EmployeeListItem