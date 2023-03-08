import React, { createContext, useEffect, useState } from "react";

export const EmployeeContext = createContext();

export function EmployeeProvider(props) {
  const [employees, setEmployees] = useState([]);
  const [employeeDetail, setEmployeeDetail] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // const decodedToken = jwt_decode(token);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    //clear the token from the local storage
    localStorage.removeItem("token");
    //set isAuthenticated to false
    setIsAuthenticated (false)
  }

  useEffect(() => {
    fetch(`https://lit-dusk-21328.herokuapp.com/api/employees/allemployees`)
      .then((res) => res.json())
      .then((data) => {
        //if (data)
        setEmployees(data);
        setEmployeeDetail(data[0]);
      });
  }, []);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        employeeDetail,
        setEmployeeDetail,
        setEmployees,
        isAuthenticated,
        setIsAuthenticated,
        handleLogout,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
}
export default EmployeeContext;
//export default EmployeeProvider;
