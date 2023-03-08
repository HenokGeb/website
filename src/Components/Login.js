import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import EmployeeContext from "../EmployeeContext";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useContext(EmployeeContext);
  const navigate = useNavigate()


  const userInfo = {email, password };
  const baseUrl = "https://limitless-temple-21032.herokuapp.com/api/user";

  const handleLogin=  async (userInfo) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, userInfo);
            //console.log(response);
      const token = response?.data;
            localStorage.setItem("token", token);
    } catch (err) {
      console.log(err);
    }

  }
  
  const handleChange = (event) => {
    setEmail(event.target.value);
    setPassword(event.target.value);
  };
const handleSubmit = (e)=> {
  e.preventDefault();
  //const userInfo = {email, password}
  handleLogin(userInfo)
  .then((token) => {
    //authenticate user and redirect to home page
    setIsAuthenticated(true);
    navigate({
      pathname: "/employees-list",
    });
  })
  .catch ((error) => {
//handle login error
setIsAuthenticated(false);
  });
};

  return (
    <div>
      <h3 style={{ textAlign: "center" }}> Welcome to the Login Page</h3>
      <fieldset
        style={{
          border: "solid blue 1px",
          textAlign: "center",
          backgroundColor: "grey",
          margin: "30px 300px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ color: "#fff", fontWeight: "bold", margin: "5px" }}>
            {" "}
            Email{" "}
            <input
              style={{
                border: "2px solid",
                borderRadius: "3px",
                padding: "5px",
                margin: "10px",
              }}
              onChange={handleChange}
            />
          </div>
          <br />

          <div
            style={{ color: "#fff", margin: "5px 15px", fontWeight: "bold" }}
          >
            {" "}
            Password{" "}
            <input
              type="password"
              style={{
                border: "2px solid",
                borderRadius: "3px",
                padding: "5px",
                margin: "10px",
              }}
              onChange={handleChange}
            />
          </div>
          <br />
          <button
            onClick={handleLogin}
            style={{
              color: "white",
              backgroundColor: "black",
              fontWeight: "bold",
              padding: "5px 10px",
            }}
          >
            Login
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default Login;
