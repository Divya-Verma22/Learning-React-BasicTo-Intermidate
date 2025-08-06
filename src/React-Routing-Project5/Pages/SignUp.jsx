
import Template from "../CommonComponents/Templete";
import { Image2Url } from "../images";

const SignUp = ({setIsUserLoged}) =>{
    return (
        <div>
            <Template 
            title = "Join the World of Tech and education with us"
           desc1 = "Every skill you acquire doubles your chances of success."
           desc2 = "Growth comes from consistently learning and applying knowledge."
           image = {Image2Url}
           formtype= "signup"
           setIsUserLoged={setIsUserLoged}
           />
        </div>

     
    )
    
   
}
export default SignUp;