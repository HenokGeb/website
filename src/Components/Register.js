import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import EmployeeContext from "../EmployeeContext";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setIsAuthenticated, isAuthenticated } = useContext(EmployeeContext);
  const navigate = useNavigate();
  const userInfo = { userName, email, password };
  const handleChange = (event) => {
    setUserName(event.target.value);
    setEmail(event.target.value);
    setPassword(event.target.value);
  };

  const baseUrl = "https://limitless-temple-21032.herokuapp.com/api/user";

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${baseUrl}/signup`, userInfo);
      console.log(response);

      //taking the user to another page after he is registered
      function protectedRoute ({children})   {
      return ( isAuthenticated === true
            ? children
            : navigate({ pathname: "/login", replace: true }));
            
      }
      console.log(protectedRoute);
      
  
      /*isAuthenticated(true)
      
      navigate({
        pathname: "/add-employees"
      });
            navigate({
        pathname: "/employees-list"
      });
            navigate({
        pathname: "/article"
      });*/
      
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: "#BBDEFB",
          color: "black",
          marginTop: "50px",
          fontWeight: "bold",
        }}
      >
        Create Account
      </div>
      <form style={{ backgroundColor: "#BBDEFB" }}>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="User Name"
          onChange={handleChange}
        />
        <br />
        <input
          className="input"
          type="email"
          name="emailAddress"
          placeholder="Email Address"
          onChange={handleChange}
        />
        <br />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="strong password"
          onChange={handleChange}
        />
        <button
          className="input"
          onClick={handleSignup}
          style={{
            backgroundColor: "black",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
