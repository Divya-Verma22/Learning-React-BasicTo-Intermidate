import { useState } from "react";

const ProductForm = (props) =>{
   

    
   const [newTitle , setTitle] = useState('');
   const [newDate , setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value)
        // console.log(event.target.value);
        
    }
    function datechangeHandler(event){
        setDate(event.target.value);
        // console.log(event.target.value);
        
    }
    function submitHandler(e){
        e.preventDefault();


        const productDate = {
            title: newTitle,
            date : newDate
        }
        console.log(productDate);
        setTitle('');
        setDate('');

        props.saveProduct(productDate);
        //how remove filled info from form!!!!!



    }
    return(
        <form onSubmit={submitHandler}>
        <div>
            <div>
                <label>title</label>
                <input type="text" placeholder="enter title" 
                value={newTitle}
                onChange={titleChangeHandler} />
            </div>
            <div>
                <label>date </label>
                <input type="date"  //fetch form value of form 5
                onChange={datechangeHandler}
                value={newDate}
                 min={2004-12-4} max={1999-3-20}  placeholder="enter date " />
            </div>
            <div>
                <button>add to cart</button>
            </div>
        </div>
        </form>
    )
}

export default ProductForm;