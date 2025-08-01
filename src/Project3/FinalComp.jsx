// import "./index.css"

import { useEffect, useState } from "react";
import Filter from "./Filter";
import Cards from "./cards";
import Navbar from "./navbar";
import Filterdata from "./Filterdata";
import { apiUrl } from "./Filterdata";
import { toast } from "react-toastify";
import Spinner from "./Spinner";


const FinalComp = () => {
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category , setCategory] = useState(Filterdata[0].title)


    async function fetchapi() {
        setLoading(true)
        try {
            const response = await fetch(apiUrl);
            const output = await response.json();
            console.log(output.data);
            setCourses(output.data);
        }
        catch (error) {
            toast.error("something went wrong")

        }
        setLoading(false)

    }



    useEffect(() => {
        fetchapi();

    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-gray-600">
            <div> <Navbar /> </div>

            <div className="bg-gray-600">
                 <div><Filter Filterdata={Filterdata} 
                 category = {category} setCategory= {setCategory}
                 /></div> 
            <div className="w-11/12 flex  flex-wrap max-w-[1200px] items-center mx-auto min-h-[50vh] justify-center" >
                {
                    loading ? (<Spinner />) : (<Cards courses={courses} category= {category}/>)
                }

            </div>

            </div>
           
        </div>
    )


}

 export default FinalComp;