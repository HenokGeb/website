//import { getByDisplayValue } from '@testing-library/react'
import React from 'react'
import {Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
    <ul style={{
      listStyle: "none", 
      display: "flex", 
      justifyContent: "right",
      backgroundColor: "#42A5F5",
      height:"3vh",
      padding: "30px",
      textDecoration: "none",
      gap: "20px",
      margin: "0",
      fontWeight: "bold",
      

    }}> 
    <li><Link to ="/website"> Home </Link> </li>
    <li ><Link to ="/add-employees"> Add Employees</Link></li>
    <li ><Link to ="/employees-list"> Employees List</Link></li>
    </ul>
    </div>
 )
}

/*const styledNav = {
    width: "100%",
    display: "flex",
   // height:"10vh",
    backgroundColor: "#42A5F5",
    //position: "fixed",


}
const styledUl = {
    display: "flex",
    gap: "10px",
    listStyleType: "none",
    margin: "0",
    padding: "30px",
    textDecoration: "none",
}*/

export default NavBar