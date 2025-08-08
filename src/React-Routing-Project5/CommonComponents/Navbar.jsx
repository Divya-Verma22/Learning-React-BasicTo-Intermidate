import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { logoUrl } from "../images";

const Navbar = ({ isUserLoged, setIsUserLoged }) => {


    return (
        <>
        <div className=" flex justify-evenly items-center w-screen   ">
            <Link to="/"><img src={logoUrl} className="invert"
                alt="logo" width={160} height={32} loading="lazy"
            /></Link>

            <nav>
                <ul className=" text-white flex gap-x-6 ">
                    <li>
                        <Link to="/" > Home</Link>

                    </li>
                    <li>
                        <Link to="/about" > about</Link>

                    </li>
                    <li>
                        <Link to="/contactus" >Contact Us</Link>

                    </li>

                </ul>
            </nav>

            <div className=" flex items-center gap-x-4">
                {
                    !isUserLoged &&
                    <Link to="/login"> <button className="bg-gray-700 border-black text-white px-6 py-2 rounded-xl font-semibold shadow-lg  hover:bg-white hover:text-black  transition-all duration-300 ">
                        Login</button> </Link>
                }
                {
                    !isUserLoged &&
                    <Link to="/signup">  <button className="bg-gray-700 border-x-black text-white p-6 py-2 rounded-xl font-semibold shadow-lg  hover:bg-white hover:text-black  transition-all duration-300 ">
                        Sign In
                    </button>
                    </Link>
                }
                {
                    isUserLoged &&
                    <Link to="/"> <button className="bg-gray-700 border-black text-white px-6 py-2 rounded-xl font-semibold shadow-lg  hover:bg-white hover:text-black  transition-all duration-300 "
                
                     onClick={() => {
                        setIsUserLoged(false);

                        toast.success("Logged out");
                    }}>log Out</button> </Link>
                }
                {
                    isUserLoged &&
                    <Link to="/dashboard"> <button className="bg-gray-700 border-black text-white px-6 py-2 rounded-xl font-semibold shadow-lg  hover:bg-white hover:text-black  transition-all duration-300 ">Dashboard</button> </Link>
                }
            </div >



        </div >
        </>
    )
}
export default Navbar;