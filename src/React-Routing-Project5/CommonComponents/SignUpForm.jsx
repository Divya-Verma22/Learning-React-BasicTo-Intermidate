import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpForm = ({ setIsUserLoged }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [showpassword, setShowpassword] = useState(false);
  const [showpassword2, setShowpassword2] = useState(false);
const [accountype, setAccountype] = useState("student");


  function actionHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function onsubmit(event) {
    event.preventDefault();

    if (formData.password !== formData.cpassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsUserLoged(true);
    toast.success("Account Created Successfully");
    const account = {
        ...formData ,
        accountype
    }
   

    console.log("SignUp Data:", account);
    navigate("/dashboard");
  }

  return (
    <div>
        <div className="flex bg-gray-800 p-1 rounded-full max-w-max gap-z-1 ">


            <button 
            className= {accountype === "student"  ? "bg-black text-white rounded-full": "bg-transparent text-white py-2 px-5 transition-all rounded-full max-w-max duration-200"}
            onClick={()=>setAccountype("student")}>
            Student
            </button>
            <button 
              className= {accountype=== "instructor" ? "bg-black text-white rounded-full ": "bg-transparent text-white py-2 px-5 transition-all rounded-full max-w-max duration-200"}
            onClick={()=>setAccountype("instructor")}> 
                Instructor
            </button>
        </div>
    <form onSubmit={onsubmit} className="flex flex-col gap-y-6 mt-6">
      {/* Name Section */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* First Name */}
        <label className="w-full">
          <p className="text-white text-[1rem] mb-2">
            First Name <sup className="text-red-500">*</sup>
          </p>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={actionHandler}
            required
            className="bg-gray-800 text-white px-3 py-2 rounded-md w-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </label>

        {/* Last Name */}
        <label className="w-full">
          <p className="text-white text-[1rem] mb-2">
            Last Name <sup className="text-red-500">*</sup>
          </p>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={actionHandler}
            required
            className="bg-gray-800 text-white px-3 py-2 rounded-md w-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </label>
      </div>

      {/* Email */}
      <label className="w-full">
        <p className="text-white text-[1rem] mb-2">
          Email Address<sup className="text-red-500">*</sup>
        </p>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={actionHandler}
          required
          className="bg-gray-800 text-white px-3 py-2 rounded-md w-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </label>

      {/* Password */}
      <label className="w-full relative">
        <p className="text-white text-[1rem] mb-2">
          Create Password <sup className="text-red-500">*</sup>
        </p>
        <input
          type={showpassword ? "text" : "password"}
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={actionHandler}
          required
          className="bg-gray-800 text-white px-3 py-2 rounded-md w-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <span
          className="absolute right-3 top-[42px] cursor-pointer"
          onClick={() => setShowpassword((prev) => !prev)}
        >
          {showpassword ? (
            <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={20} fill="#AFB2BF" />
          )}
        </span>
      </label>

      {/* Confirm Password */}
      <label className="w-full relative">
        <p className="text-white text-[1rem] mb-2">
          Confirm Password <sup className="text-red-500">*</sup>
        </p>
        <input
          type={showpassword2 ? "text" : "password"}
          name="cpassword"
          placeholder="Confirm Password"
          value={formData.cpassword}
          onChange={actionHandler}
          required
          className="bg-gray-800 text-white px-3 py-2 rounded-md w-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <span
          className="absolute right-3 top-[42px] cursor-pointer"
          onClick={() => setShowpassword2((prev) => !prev)}
        >
          {showpassword2 ? (
            <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={20} fill="#AFB2BF" />
          )}
        </span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-yellow-300 rounded-md w-full py-2 text-black font-semibold hover:bg-yellow-200 transition-all duration-200"
      >
        Create Account
      </button>
    </form>
    </div>
  );
};

export default SignUpForm;
