import React from 'react';
import { useState } from 'react';
import { faSearch} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import {useContext} from 'react'
import {EmployeeContext} from '../EmployeeContext'

const StyledSearch = styled.div`
display: flex;
align-items: center;
`;
const SearchBar = () => {
const [searchValue, setSearchValue] = useState([]);
const {employees, setEmployeeDetail, setEmployees} = useContext (EmployeeContext);

const handleChange = (event) => {
  setSearchValue(event.target.value)
  //const searchWord= setSearchValue(event.target.value);
  //const newFilter= employees.filter((employee) =>{
   // return employee.name.toLowerCase().includes(searchWord.toLowerCase());
  //});
  //setSearchValue(newFilter);
};

 const handleSearch = () => {
  const searchedValue = employees.filter((employee) => {
    return searchValue.toLowerCase() === employee.name.toLowerCase(); 
  })
    setEmployees(searchedValue);
    setEmployeeDetail(searchedValue[0])
};
/*<div>
{searchValue.length !== 0 && (
  <div> {searchValue.map((employee, key) => {
    return ( <p>{employee.name}</p>)
  })}
  </div>
)}
</div> */


  return (
<StyledSearch>
  <input 
       style = {StyleSearchBar} 
       type= "text" 
       placeholder = "Search by name...."
       onChange= {handleChange}
    
         />
  <FontAwesomeIcon 
    icon= {faSearch} 
    onClick= {handleSearch} 
    style= {{
       cursor:"pointer",  
       marginLeft:"-25px"
      }} 
      />
    </StyledSearch>
  );
}

/*const SearchBar = ({searchedValue}) => {
  const [searchValue, setSearchValue] = useState("")
  const handleInputChange = (event) =>{
    setSearchValue(event.target.value)
  }
  const handleClearClick = ()=>{
    setSearchValue ("")
  }
  const displayButton = searchValue.length > 0
  return (
    <div>
      <input style={StyleSearchBar} type="text" placeholder="Search Employee..." value = {searchValue} onChange ={handleInputChange}></input>
      {displayButton && <button style= {{backgroundColor: "grey", color:"white", border: "1px solid white", borderRadius: "10%", }} onClick = {handleClearClick}> Clear </button>}
    
      </div> 
      );
  }*/


 /* const employeeNames = [
    "John Doe",
    "Metin Khaled",
    "Matteo Omar",
    "Drake Bott",
    "Daniel Xavier",
    "Henok Abebe",
  ]


  const filteredEmployeeNames = employeeNames.filter((employeeName) => {
    return (
      employeeName.includes(searchValue)
  )})
  return (
    <div>
      <input style={StyledSearchBar} type="text" placeholder="Search Employee..." value = {searchValue} onChange ={handleInputChange}></input>
      {displayButton && <button style= {{backgroundColor: "grey", color:"white", border: "1px solid white", borderRadius: "10%", }} onClick = {handleClearClick}> Clear </button>}
    
      </div> 
      );
  };
       {filteredEmployeeNames.map((employeeName) => { 
        return (
        <div key={employeeName}> {employeeName}</div>
        )
      })} 
      </div>
      );
    }; */


const StyleSearchBar = {
  width: "95%",
  border:"1px solid #333",
  borderRadius: "20px",
  padding: "7px 5px",
  margin: "2px 7px",
  
};

export default SearchBar




/*import React from 'react';
import { useState } from 'react';
import { faSearch} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import {useContext} from 'react'
import {EmployeeContext} from '../EmployeeContext'

const StyledSearch = styled.div`
display: flex;
align-items: center;
`;
const SearchBar = () => {
const [searchValue, setSearchValue] = useState([]);
const {employees, setEmployeeDetail, setEmployees} = useContext (EmployeeContext);
const handleChange = (event) => { 
  setSearchValue(event.target.value)
};

const handleSearch = () => {
const searchedValue = employees.filter((employee) => {
    return searchValue.toLowerCase() === employee.name.toLowerCase(); 
  })

    setEmployees(searchedValue);
    setEmployeeDetail(searchedValue[0])
};

return (
      <StyledSearch>
          <input 
             style = {StyleSearchBar} 
             type= "text" 
             placeholder = "Search by name...."
             onChange={handleChange}
    
               />
      <FontAwesomeIcon 
             icon= {faSearch} 
             onClick= {handleSearch} 
              style= {{
                 cursor:"pointer",  
                 marginLeft:"-25px"
             }} 
                />
      </StyledSearch>
  );
}

const StyleSearchBar = {
  width: "95%",
  border:"1px solid #333",
  borderRadius: "20px",
  padding: "7px 5px",
  margin: "2px 7px",
  
};

export default SearchBar */