import React, {createContext, useEffect, useState } from 'react'

export const EmployeeContext = createContext();

export function EmployeeProvider (props) {
const [employees, setEmployees] = useState([ ]);
const [employeeDetail, setEmployeeDetail] = useState({});

useEffect(() => {
  fetch(
    `https://lit-dusk-21328.herokuapp.com/api/employees/allemployees`
  )
  .then((res) => res.json())
  .then((data) => {
    //if (data) 
    setEmployees(data);
    setEmployeeDetail(data[0])
  });

}, []);

    return (

        <EmployeeContext.Provider value = {{ 
          employees, 
          employeeDetail, 
          setEmployeeDetail, 
          setEmployees
        }} >

        {props.children}
        
        </EmployeeContext.Provider>
    
    );
}
export default EmployeeContext;
//export default EmployeeProvider;