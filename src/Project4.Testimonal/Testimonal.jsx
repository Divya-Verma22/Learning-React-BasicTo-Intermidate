import { useState } from "react";
import Card from "./Card";
;
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonal = (props) => {
    const [index , setIndex] = useState(0);
    let review = props.reviews;
    function leftHandler(){
        if(index-1 < 0){
            setIndex(review.length-1);
        }
        else{
            setIndex(index - 1);

        }

    }
    function rightHandler(){
        if(index + 1 >= review.length){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }

        
    }
    function supriseHandler(){
        let randomindex = Math.floor(Math.random() * review.length);
        setIndex(randomindex);
        
    }
    return (
        <div className=" w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
         md-10 p-10 transition-all duration-700 hover:shadow-xl  rounded-md">
            <Card review={review[index]} />
           
            <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto" >
                <button className="cursor-pointer hover:text-violet-500" onClick={leftHandler}>
                    <FiChevronLeft />
                </button>
                <button className="cursor-pointer hover:text-violet-500" onClick={rightHandler}>
                    <FiChevronRight />
                </button>

            </div>

            <div  className="mt-6">
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 
                                    cursor-pointer px-10 py-2 rounded-md font-bold  text-white text-lg" 
                                    onClick={supriseHandler}>Suprise Me</button>
            </div>
        </div>




    )
}

export default Testimonal;