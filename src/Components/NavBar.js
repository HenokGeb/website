//import { getByDisplayValue } from '@testing-library/react'
import React from 'react'
import {Link } from "react-router-dom";

function NavBar() {
  return (
    <div style = {styledNav}>
    <ul style = {styledUl}>
    <li style = {styledLi}><Link to ="/"> Home </Link> </li>
    <li style= {styledLi} ><Link to ="/add-employees"> Add Employees</Link></li>
    <li style= {styledLi} ><Link to ="/employees-list"> Employees List</Link></li>
    </ul>
    
    </div>
  )
}

const styledNav = {
    width: "100%",
    display: "flex",
    height:"5vh",
    backgroundColor:"grey",

}
const styledUl = {
    display: "flex",
    gap: "10px",
    listStyleType: "none",
    margin: "0",
    padding: "0",

}
const styledLi = {


}

export default NavBar