import "./Spinner.css"

const Spinner = () =>{
    return (
        
        <div className="flex flex-cols items-center space-y-2">
            <div className="spinner"> </div>
        <div className="text-black text-lg font-semibold">
            Loading...
        </div>
        </div>
    )

}
export default Spinner;