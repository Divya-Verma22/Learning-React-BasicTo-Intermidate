
import React from "react";
const Filter = (props) => {
    let Filterdata = props.Filterdata;
    let category = props.category;
    let setcategory = props.setCategory;

    function filterHandler(title) {
        setcategory(title);
    }

    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 
        gap-y-4 mx-auto py-4 justify-center">
            {Filterdata.map((data) => (
                <button  className={`text-lg px-2 py-1 rounded-md 
                        font-medium text-white bg-black 
                                hover:bg-opacity-50 border-2 transition-all duration-300 
                                ${category === title.data ?
                            "bg-opacity-60 border-white" :
                            "bg-opacity-40 border-transparent"}`} 
                            onClick={() => filterHandler(data.title)}
                    key={data.id} >{data.title} </button>
                              
                   


            ))}
        </div>
    )

}
export default Filter;