import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
    let finalreview = props.review;

    

    return (
        <div>
        <div className=" flex flex-col md:relative  ">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25] "
                    src={finalreview.image} />

                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute
            top-[-6px] z-[-10] left-[10px]"></div>
            </div>
            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize tracking-wide"> {finalreview.name}</p>
                <p className="text-violet-300 uppercase text-sm ">{finalreview.job}</p>
            </div>
            
            <div className="text-violet-400 mx-auto mt-5"
            > < FaQuoteLeft /> </div>
            <div className="text-center mt-4 text-slate-500">
                <p >{finalreview.text}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5"   >
                < FaQuoteRight />
            </div>

        </div>
         </div>
    )
}

export default Card;