
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";



const SignUpForm = ({setIsUserLoged}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const [showpassword, setShowpassword] = useState(false);
    const [showpassword2, setShowpassword2] = useState(false);

    function actionHandler(event) {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })

    }



    function onsubmit(event) {
        event.preventDefault();
        if(formData.password !== formData.cpassword){
            toast.error("password do not match");
            return;
        }
        setIsUserLoged(true);
        toast.success("logged in  ")
        const account = {
            ...formData
        }
        console.log(account);
        navigate("/dashboard");
        
    }

    return (
        <div>
            <div>
                <button>Students</button>
                <button>Instructor</button>

            </div>


            <form onSubmit={onsubmit}>
                <div>
                    <label htmlFor="firstname"><p>First Name<sup>*</sup></p>
                        <input type="text" name="firstname" id="firstname" placeholder="First Name"
                            value={formData.firstname} onChange={actionHandler} required />
                    </label>

                    <label htmlFor="lastname"><p>Last Name<sup>*</sup></p>
                        <input type="text" name="lastname" id="lastname" placeholder="Last Name"
                            value={formData.lastname} onChange={actionHandler} required />
                    </label>

                </div>

                <label htmlFor="email"><p>Email<sup>*</sup></p>
                    <input type="text" name="email" id="email" placeholder="Enter Email id"
                        value={formData.email} onChange={actionHandler} required />
                </label>


                {/* create password */}

                <label htmlFor="password"><p>Create password<sup>*</sup></p>
                    <input type={showpassword ? ("text") : ("password")} name="password" id="password" placeholder="password"
                        value={formData.password} onChange={actionHandler} required />
                    <span onClick={() => setShowpassword((prev) => !prev)}>
                        {showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>
                </label>


                <label htmlFor="cpassword"><p>Confirm password<sup>*</sup></p>
                    <input type={showpassword2 ? ("text") : ("password") } name="cpassword" id="cpassword" placeholder="confirm password"
                        value={formData.cpassword} onChange={actionHandler} required />
                    <span onClick={() => setShowpassword2((prev) => !prev)}>
                        {showpassword2 ?   (<AiOutlineEyeInvisible />)  : (<AiOutlineEye />) }
                    </span>
                </label>
                <button>Create Account</button>





            </form>
        </div>
    )
}
export default SignUpForm;