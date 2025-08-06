import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const LogInForm = ({ setIsUserLoged }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [showpassword, setShowpassword] = useState(false);

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
        setIsUserLoged(true);
        toast.success("sucess Loggin");
        navigate("/dashboard")
        console.log("finally")
        console.log(formData);
}

    return (
        <form onSubmit={onsubmit}>
            <label htmlFor="email">
                <p>Email Address<sup>*</sup></p>

                <input required
                    type="email" id="email" value={formData.email}
                    placeholder="Enter your Email " onChange={actionHandler}
                    name="email" />

            </label>
            <br />
            <label htmlFor="password">
                <p>Password<sup>*</sup></p>

                <input required
                    type={showpassword ? ("text") : ("password")} name="password" id="password"
                    placeholder="Enter password" value={formData.password} onChange={actionHandler} />

                <span onClick={() => setShowpassword((prev) => !prev)}>
                    {showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>
                <Link to="#">
                    <p>
                        Forget password
                    </p> </Link>
            </label>

            <button >Sign In</button>


        </form>
    )
}
export default LogInForm;