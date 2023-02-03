import React from 'react'
import Styled from "styled-components"

const StyledWrapper = Styled.div`
  max-Width: 800px;
  margin: 40px auto;
  backgroundColor: #fff;
  display: flex;
  gap: 3px;
  border:1px solid black;

  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
    margin-left: 100px;
    color: blue;
    background: #42A5F5;
    gap: 10px;

  }
  
;`

const Wrapper = (props) => {
  return<StyledWrapper>{props.children}</StyledWrapper>
};


export default Wrapper