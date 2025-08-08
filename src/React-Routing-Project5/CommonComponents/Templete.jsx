import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import { Image3Url } from "../images";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setIsUserLoged }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-10 px-6 max-w-[1160px] w-full mx-auto min-h-[calc(100vh-80px)] gap-y-10">


            {/* LEFT SECTION */}
            <div className="w-full md:w-[50%]">
                <h2 className="font-semibold text-white text-[1.87rem] leading-[2.375rem]">
                    {title}
                </h2>

                <div className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-white">{desc1}</span>
                    <br />
                    <span className="text-blue-300 italic">{desc2}</span>
                </div>

                <div className="mt-6">
                    {
                        formtype === "signup"
                            ? <SignUpForm setIsUserLoged={setIsUserLoged} />
                            : <LogInForm setIsUserLoged={setIsUserLoged} />
                    }
                </div>

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-white"></div>
                    <p className="text-white font-medium leading-[1.375rem]">OR</p>
                    <div className="w-full h-[1px] bg-white"></div>
                </div>

                {/* ✅ Google Button Fixed */}
               <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white border border-white rounded-md py-2 text-sm hover:bg-gray-800 transition-all duration-200 mb-6">

                    <FcGoogle className="text-xl" />
                    <span>Sign in with Google</span>
                </button>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="relative hidden md:flex flex-col items-center overflow-visible ">
                <img
                    src={Image3Url}
                    alt="Background"
                    width={400}
                    height={400}
                    loading="lazy"
                      className="relative translate-y-4"
                />
                <img
                    src={image}
                    alt="Overlay"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="absolute -top-4 right-4 "
                />
            </div>
        </div>
    );
};

export default Template;
