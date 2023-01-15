import React from 'react'
import { useState } from 'react'

function Login () { 
        const [employeesData, setEmployeesData] = useState ({
          username: "",
          password: "",
        })
        const handleChange = (event) => {
            const updatedUserData = {
              ...employeesData, [event.target.name]: event.target.value,
            };
            setEmployeesData(updatedUserData);
          }

          const handleSubmit = (event) =>{
            event.preventDefault()
          }



    return ( 
        <div>
        <h3> Welcome to the Login Page</h3>
        <fieldset style = {{ border: "solid blue 1px", textAlign: "center"}}>
        <form onCreateAccount={handleSubmit} >
        <div style ={{ margin: "5px"}}> User Name <input style ={{border: "2px solid", borderRadius: "3px", padding: "5px", margin: "10px"}} onChange = {handleChange}/>
        </div>
        <br />

        <div style ={{ margin: "5px 15px"}}> Password <input type = "password" style ={{border: "2px solid", borderRadius: "3px", padding: "5px", margin: "10px"}} onChange = {handleChange} />
        </div>
        <br />
        <button style ={{ color: "white", backgroundColor: "blue", padding: "5px 10px"}}> Login</button>
        </form>
        </fieldset>
        </div>
    

    )
}

export default Login