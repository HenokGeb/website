import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';


const HomePage = () => {
  return (
    <div style = {StyledHomePage}>
        <Header title="Employees' Directory"/>
        <SearchBar />
        <EmployeeList />
    </div>
  )
};
const StyledHomePage = {
  width: "50%",
  backgroundColor: "#fff",
  //padding: "10px 0",
  //border: " solid 0.25px black",
  //borderRadius: "10px",
}

export default HomePage;