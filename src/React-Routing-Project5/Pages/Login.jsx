import Template from "../CommonComponents/Templete";
import { Image1Url } from "../images";
const Login = ({setIsUserLoged}) =>{
    return(
        <div>
           <Template 
           title = "Welcome Back"
           desc1 = "Strategies for Sustainable and Inclusive Development in Modern Societie"
           desc2 = "Learning is the first step towards development."
           image = {Image1Url}
           formtype= "login"
           setIsUserLoged={setIsUserLoged}

           />
        </div>
    )
}
export default Login;