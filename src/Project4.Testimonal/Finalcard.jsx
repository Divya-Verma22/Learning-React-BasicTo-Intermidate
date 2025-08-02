import Testimonal from "./Testimonal";
import reviews from "./Data";


const Finalcard = () => {
    return (
        <div className="flex flex-col w-[100vw] h-[100vh] 
         justify-center items-center bg-gray-200 " >
            <div className="items-center">
                <h1 className="text-4xl font-bold">Our Testimonal</h1>
            </div>
            <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>
            <div className="mt-9"> <Testimonal reviews={reviews} /></div>

        </div>
    )
}

export default Finalcard;