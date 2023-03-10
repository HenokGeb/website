import "./App.css";
//import HomePage from "./Components/HomePage";
//import EmployeePage from './Components/EmployeePage';
//import Wrapper from './Components/Wrapper';
//import imageOne from "./assets/Images/Image_one.jpeg";
//import imageTwo from "./assets/Images/Image_two.jpeg";
//import imageThree from "./assets/Images/Image_three.jpeg";
//import React, {useState, useEffect} from "react";
import Form from "./Components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from "./Components/Employees";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { EmployeeProvider } from "./EmployeeContext";
//import EmployeeContext from "./EmployeeContext"
//import {useState} from "react";
import Footer from "./Components/Footer";
import Article from "./Components/Article";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  /*const employees= [
    {
      id: 1,
    image: imageOne,
    name: "John Doe",
    title: " Front End Developer",
    callMobile: "Mobile: + 364387439749",
    SMS: "SMS: 617-9999 0002",
    emailAddress: "Email: JohnDoe@gmail.com",
  },
  {
    id: 2,
    image: imageTwo,
    name: "Juan Lee",
    title: " Back End Developer",
    callMobile: "MObile: + 364387439749",
    SMS: "SMS: 617-9999 0002",
    emailAddress: "Email: JohnDoe@gmail.com",
  },
  {
    id: 3,
    image: imageThree,
    name: "Matew Dave",
    title: " Full Stack Developer",
    callMobile: "Mobile: +364387439749",
    SMS: "SMS: 617-9999 0002",
    emailAddress: "Email: JohnDoe@gmail.com",
  },
];*/

  /*const [employees, setEmployees] = useState([]);


useEffect(() => {
  fetch(
    `https://lit-dusk-21328.herokuapp.com/api/employees/allemployees`
  )
  .then((res) => res.json())
  .then((data) => {
    if (data) setEmployees(data);
  });

}, []);

const [employeeDetail, setEmployeeDetail] = useState({
  id: 1,
  image: imageOne,
  name: "John Doe",
  occupation: " Front End Developer",
  callMobile: "Mobile: + 364387439749",
  SMS: "SMS: 617-9999 0002",
  emailAddress: "Email: JohnDoe@gmail.com",
}) */

  return (
    <EmployeeProvider>
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="/website" element={<Home />} />
            <Route
              path="/add-employees"
              element={
                <ProtectedRoute>
                  <Form />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employees-list"
              element={
                <ProtectedRoute>
                  <Employees />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/article"
              element={
                <ProtectedRoute>
                  <Article />
                </ProtectedRoute>
              }
            />
            <Route path="/log-out" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </EmployeeProvider>
  );
}

export default App;
