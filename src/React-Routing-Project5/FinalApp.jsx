import Navbar from "./CommonComponents/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { useState } from "react";


const FinalApp = () => {
    const [isUserLoged, setIsUserLoged] = useState(false);
    return (
        <div className="h-[100vh] w-[100vw]">
            <Navbar isUserLoged={isUserLoged} setIsUserLoged={setIsUserLoged} />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login setIsUserLoged={setIsUserLoged} />} />
                <Route path="/signup" element={<SignUp setIsUserLoged={setIsUserLoged} />} />

                <Route path="/dashboard" element={<Dashboard />} />




            </Routes>
        </div>
    )
}
export default FinalApp;