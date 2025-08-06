import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { logoUrl } from "../images";

const Navbar = ({ isUserLoged, setIsUserLoged }) => {


    return (
        <div className="flex justify-evenly">
            <Link to="/"><img src={logoUrl}  className="invert"
                alt="logo" width={160} height={32} loading = "lazy"
             /></Link>

            <nav>
                <ul className="flex  font-semibold font-serif text-2xl space-x-20 justify-center ">
                    <li>
                        <Link to="/" > Home</Link>

                    </li>
                    <li>
                        <Link to="/about" > About</Link>

                    </li>
                    <li>
                        <Link to="/contactus" >Contact Us</Link>

                    </li>

                </ul>
            </nav>

            <div className=" flex gap-4 ml-4 mr-2">
                {
                    !isUserLoged &&
                    <Link to="/login"> <button
                        className="border p-2 m-2 rounded-2xl text-black bg-white ">
                        Login</button> </Link>
                }
                {
                    !isUserLoged &&
                    <Link to="/signup">  <button className="border p-2 m-2 rounded-2xl text-black bg-white ">Sign Up</button> </Link>
                }
                {
                    isUserLoged &&
                    <Link to="/"> <button onClick={() => {
                        setIsUserLoged(false);
                        toast.success("Logged out");
                    }}>log Out</button> </Link>
                }
                {
                    isUserLoged &&
                    <Link to="/dashboard"> <button>Dashboard</button> </Link>
                }
            </div>



        </div>
    )
}
export default Navbar;