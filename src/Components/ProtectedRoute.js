import {useContext} from 'react'
import EmployeeContext from '../EmployeeContext';
import { useNavigate } from 'react-router';

function ProtectedRoute({children}) {
     const navigate = useNavigate();
     const {isAuthenticated} = useContext(EmployeeContext)
   
    return isAuthenticated === true ? children 
    : navigate ({ pathname: "/website", replace: true });
  
    
  
}

export default ProtectedRoute;