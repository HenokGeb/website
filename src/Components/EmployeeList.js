import React from 'react';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = (props) => {
  return (
    <div style = {StyledContent}>

        <EmployeeListItem />

    </div>
  )
};
const StyledContent = {
  padding: "5px",
  //backgroundColor: "#42A5F5",
}

export default EmployeeList;