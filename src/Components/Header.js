import React from 'react';
import Styled from "styled-components"

const StyledHeader = Styled.div`
text-align: center;
background-color: #fff;
border: black solid 1px;
border-radius: 15px;
margin: 5px 0;
padding: 5px;
font-weight: bold;

@media (max-width: 599px) {
  margin-top: 0;
  color: green;
  padding: 2px;
}
`;

const Header = (props) => {
  return <StyledHeader> {props.title} </StyledHeader>
};


export default Header;