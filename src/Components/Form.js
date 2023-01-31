import React from 'react'
import { useState } from "react";

function Form () {
  const [employeesData, setEmployeesData] = useState ({
    name: "",
    imageUrl: "",
    occupation: "",
    mobileNumber: "",
    cellPhone: "",
    sms: "",
    emailAddress: "",

  })
    const handleChange = (event) => {
      const updatedUserData = {
        ...employeesData, [event.target.name]: event.target.value,
      };
      setEmployeesData(updatedUserData);
    }
    function handleSubmit (event) {
      event.preventDefault();
      fetch("https://lit-dusk-21328.herokuapp.com/api/employees/addemployees", {
        method: JSON.stringify(employeesData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  return (
    <div>
    <div style ={{textAlign: "center", fontWeight: "bold", color: "blue", margin: "20px"}}>Add Employee Details</div>
    <form style ={{backgroundColor: "#fff", textAlign: "center"}}onSubmit={handleSubmit}>
    <input className="input" type ="text" name = "name" placeholder= "Name of the employee" onChange = {handleChange} />
    <br/>
    <input className="input"type ="text" name = "imageUrl" placeholder= "Image url" onChange = {handleChange} />
    <br/>
    <input className="input" type ="text" name = "occupation" placeholder= "Occupation" onChange = {handleChange} />
    <br/>
    <input className="input" type ="text" name = "mobileNumber" placeholder= "Office Mobile No." onChange = {handleChange} />
    <br/>
    <input className="input" type ="text" name = "cellPhone" placeholder= "Cell-Phone No." onChange = {handleChange} />
    <br/>
    <input className="input" type ="text" name = "sms" placeholder= "SMS" onChange = {handleChange} />
    <br/>
    <input className="input" type ="text" name = "emailAddress" placeholder= "Email Address" onChange = {handleChange} />
    <br/>
    <button className="input" style= {{ backgroundColor: 'black', fontWeight: "bold", color: 'white'}}>Submit</button>
    </form>
    </div>
  )
};

export default Form;