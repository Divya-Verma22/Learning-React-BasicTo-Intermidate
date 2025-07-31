import { useState } from "react";
import "./Products"
import ProductForm from "./ProductForm";

function Products  (props){

    function saveProduct(product){
        console.log("hi am inside products.jsx")
        console.log(product);
        props.printdata(product);

    }
    const [title, setTitle] = useState(props.title);
    function changeProductHandler() {
        setTitle("Bluetooth");
        console.log("Button clicked");


    }
    return (
 
        <div className="newP">
            <ProductForm saveProduct= {saveProduct} />
            <div className="title">
                <h1>{title}</h1>
            </div>

            <button onClick={changeProductHandler} className="button"> Change</button>
        </div>

    )

}
export default Products;