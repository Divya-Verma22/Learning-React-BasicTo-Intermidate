import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import { Image3Url } from "../images";


const Template = ({ title, desc1, desc2, image, formtype, setIsUserLoged }) => {

    return (
        <div className="flex">
            <div>
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </div>
                <div>
                    {
                        formtype == "signup" ? (<SignUpForm setIsUserLoged = {setIsUserLoged} />) : (<LogInForm  setIsUserLoged = {setIsUserLoged}/>)
                    }
                </div>
                <div>
                    <div></div>
                    <div>OR</div>
                    <div></div>
                </div>
                <button>
                    <p>
                    Sign in with Google
                    </p>
                 </button>

            </div>
            <div>
                <img src={Image3Url} alt="" 
                width={558} height={584} />
                <img src={image} alt="" 
                width={558} height={584} />
            </div>

        </div>
    )

}
export default Template;