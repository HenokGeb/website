import React from 'react'
import { useState } from "react";

function Form () {
    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [occupation, setOccupation] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [cellPhone, setCellPhone] = useState("")
    const [sms, setSms] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    
    const handleName = (event) => {
        setName(event.target.value)
    };
    const handleImageUrl = (event) => {
        setImageUrl(event.target.value)
    };
    const handleOccupation = (event) => {
      setOccupation(event.target.value)
  };
  const handleMobileNumber = (event) => {
    setMobileNumber(event.target.value)
};
const handleCellPhone = (event) => {
  setCellPhone(event.target.value)
};
const handleSms = (event) => {
  setSms(event.target.value)
};
const handleEmailAddress= (event) => {
  setEmailAddress(event.target.value)
};

const handleClick = () => {

}
  return (
    <div>
    <div>Form to Add Employee Details</div>
    <form >
    <input className="input" type ="text" value = {name} placeholder= "Name of the employee" onChange = {handleName} />
    <br/>
    <input className="input"type ="text" value = {imageUrl} placeholder= "Image url" onChange = {handleImageUrl} />
    <br/>
    <input className="input" type ="text" value = {occupation} placeholder= "Occupation" onChange = {handleOccupation} />
    <br/>
    <input className="input" type ="text" value = {mobileNumber} placeholder= "Office Mobile No." onChange = {handleMobileNumber} />
    <br/>
    <input className="input" type ="text" value = {cellPhone} placeholder= "Cell-Phone No." onChange = {handleCellPhone} />
    <br/>
    <input className="input" type ="text" value = {sms} placeholder= "SMS" onChange = {handleSms} />
    <br/>
    <input className="input" type ="text" value = {emailAddress} placeholder= "Email Address" onChange = {handleEmailAddress} />
    <br/>
    <button className="input" onClick={handleClick} style= {{ backgroundColor: 'blue', color: 'white'}}>Submit</button>
    </form>
    </div>
  )
};

export default Form;