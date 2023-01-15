import React from 'react';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = (props) => {
  return (
    <div style = {StyledContent}>

        <EmployeeListItem setEmployeeDetail={props.setEmployeeDetail} employees={props.employees} />

    </div>
  )
};
const StyledContent = {
  padding: "50px 5px 30px 5px",
}

export default EmployeeList;