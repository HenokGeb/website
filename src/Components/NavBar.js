//import { getByDisplayValue } from '@testing-library/react'
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import EmployeeContext from "../EmployeeContext";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const { isAuthenticated, handleLogout } = useContext(EmployeeContext);
  const navigate = useNavigate();
  console.log(isAuthenticated);
  const handleLogoutRedirect = () => {
    handleLogout()
    //reroute to the home page and do not show "the logout" button
    navigate({
      pathname: "/website",
    });
}
  return (
    <div>
      <ul
        className="navbarList"
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "right",
          backgroundColor: "#42A5F5",
          height: "3vh",
          padding: "30px",
          textDecoration: "none",
          gap: "20px",
          margin: "0",
          fontWeight: "bold",
        }}
      >
        <li>
          <Link to="/website">Home</Link>
        </li>

        {isAuthenticated && (
          <>
            <li>
              <Link to="/add-employees"> Add Employees</Link>
            </li>
            <li>
              <Link to="/employees-list"> Employees List</Link>
            </li>
            <li>
              <Link to="/article"> Article</Link>
            </li>
            <li>
            <Link onClick={handleLogoutRedirect} to="/log-out"> Log Out</Link>
            </li> 
          </>
        )}
      </ul>
    </div>
  );
}

/*const styledNav = {
    width: "100%",
    display: "flex",
   // height:"10vh",
    backgroundColor: "#42A5F5",
    //position: "fixed",


}
const styledUl = {
    display: "flex",
    gap: "10px",
    listStyleType: "none",
    margin: "0",
    padding: "30px",
    textDecoration: "none",
}*/

export default NavBar;
