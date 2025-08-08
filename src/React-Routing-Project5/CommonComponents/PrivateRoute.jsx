import { Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";


const PrivateRoute = ({isUserloged , children}) =>{
    
    if(isUserloged){
        return children;
    }
    else{
        return <Navigate to = "/login"/>
    }

}
export default PrivateRoute