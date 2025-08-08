import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const LogInForm = ({ setIsUserLoged }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showpassword, setShowpassword] = useState(false);

  function actionHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function onsubmit(event) {
    event.preventDefault();
    setIsUserLoged(true);
    toast.success("Successfully Logged In");
   < Navigate to= "/dasboard" />
   
    console.log("Login data:", formData);
  }

  return (
    <form onSubmit={onsubmit} className="flex flex-col gap-y-6 mt-6">
      {/* Email */}
      <label className="w-full">
        <p className="text-[1rem] text-white mb-2 leading-[1.35rem]">
          Email Address <sup className="text-red-500">*</sup>
        </p>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Enter your Email"
          onChange={actionHandler}
          className="bg-gray-800 rounded-md text-white w-full px-3 py-2 text-[0.95rem] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </label>

      {/* Password */}
      <label className="w-full relative">
        <p className="text-[1rem] text-white mb-2 leading-[1.35rem]">
          Password <sup className="text-red-500">*</sup>
        </p>
        <input
          required
          type={showpassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={actionHandler}
          className="bg-gray-800 rounded-md text-white w-full px-3 py-2 text-[0.95rem] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <span
          className="absolute right-3 top-10 cursor-pointer"
          onClick={() => setShowpassword((prev) => !prev)}
        >
          {showpassword ? (
            <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={20} fill="#AFB2BF" />
          )}
        </span>

        <Link to="#" className="block text-right mt-2 text-sm text-blue-200 hover:underline">
          Forgot Password?
        </Link>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-yellow-300 rounded-md w-full py-2 text-black font-semibold hover:bg-yellow-200 transition-all duration-200"
      >
        Sign In
      </button>
    </form>
  );
};

export default LogInForm;
