import React, {Component} from 'react'
import {Link } from "react-router-dom";
//import { Button } from '@material-ui/core';

class Home extends Component {
  render() {
  return (
    <div>
    <h1 style= {{color: "blue",}}> Welcome to the Employee page</h1>
    <br/>
    <br />
    <p style = {styledParagraph}> Dolor duo sit sed amet magna no et dolor diam. Sed takimata dolor dolores voluptua et dolore. 
    Erat sit lorem duo duo diam justo amet dolores dolore. At diam et nonumy lorem gubergren eirmod et et. 
    Sadipscing dolor.
     </p> 
    <div style = {styledContainer}>
    <button style ={{color: "black", margin: "0 25px", backgroundColor: "#42A5F5", padding: "0.25rem 20px" }}><Link to ="/login"> Login</Link> </button>
    <br />
    <br />
    <button style ={{color: "black", margin: "0 25px", backgroundColor: "#42A5F5", padding: "0.25rem 20px" }}><Link to ="/register"> Register</Link></button>
    </div>
    </div>
  )
}
}
const styledParagraph= {

}
const styledContainer= {
    //color: "white",
    //textDecoration: "none",
    margin: "50px",
    display: "flex",
  

}

export default Home