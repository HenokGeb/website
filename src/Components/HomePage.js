import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';


const HomePage = (props) => {
  return (
    <div style = {StyledHomePage}>
        <Header title="Employees' Directory"/>
        <SearchBar />
        <EmployeeList setEmployeeDetail={props.setEmployeeDetail} employees={props.employees}/>
    </div>
  )
};
const StyledHomePage = {
  width: "50%",
  backgroundColor: "#80DEEA",
  padding: "10px 0",
  border: " solid 0.25px black",
  borderRadius: "10px",
}

export default HomePage;