import React from 'react';
import { useState } from 'react';

const SearchBar = () => {
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
      <input style={StyledSearchBar} type="text" placeholder="Search Employee..." value = {searchValue} onChange ={handleInputChange}></input>
      {displayButton && <button style= {{backgroundColor: "grey", color:"white", border: "1px solid white", borderRadius: "10%", }} onClick = {handleClearClick}> Clear </button>}
    
      </div> 
      );
  };

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


const StyledSearchBar = {
  width: "95%",
  border:"1px solid #333",
  borderRadius: "20px",
  padding: "5px 5px",
  margin: "5px 0 0",
  
};

export default SearchBar