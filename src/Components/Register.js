import React from 'react'
import {useState} from "react";

function Register () {
    const [employeesData, setEmployeesData] = useState ({
      name: "",
      occupation: "",
      mobileNumber: "",
      emailAddress: "",
      password: "",
      username: "",
  
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
      <div>Create Account</div>
      <form onCreateAccount={handleSubmit}>
      <input className="input" type ="text" name = "name" placeholder= "Name of the account holder" onChange = {handleChange} />
      <br/>
      <input className="input" type ="text" name = "occupation" placeholder= "Occupation" onChange = {handleChange} />
      <br/>
      <input className="input" type ="number" name = "mobileNumber" placeholder= "Mobile No." onChange = {handleChange} />
      <br/>
      <input className="input" type ="email" name = "emailAddress" placeholder= "Email Address" onChange = {handleChange} />
      <br/>
      <input className="input" type ="password" name = "password" placeholder= "strong password" onChange = {handleChange} />
      <input className="input" type ="text" name = "username" placeholder= "user name" onChange = {handleChange} />
      <button className="input" style= {{ backgroundColor: 'blue', color: 'white'}}>Create Account</button>
      </form>
      </div>
    )
  };

export default Register