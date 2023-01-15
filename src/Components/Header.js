import React from 'react';

const Header = (props) => {
  return <div style= {StyledHeader}> {props.title} </div>
};

const StyledHeader = {
  textAlign: "center",
  backgroundColor: "#fff",
  border: "black solid 1px",
  borderRadius: "15px",
  margin:"5px 0",
  padding: "5px",
  fontWeight: "bold",
};

export default Header;