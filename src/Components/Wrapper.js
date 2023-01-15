import React from 'react'

const Wrapper = (props) => {
  return  <div style={StyledWrapper}>{props.children}</div>
};

const StyledWrapper ={
    maxWidth: "800px",
    margin: " 40px auto",
    backgroundColor:"#fff",
    display: "flex",
    gap: "3px",
    border:"1px solid black",
    borderRadius: "10px"
    
};

export default Wrapper