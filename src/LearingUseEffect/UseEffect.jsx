import { useEffect, useState } from "react"



const UseEffect = () => {
 const [text , setText] = useState('');

//  useEffect(()=>{
//     console.log("every time")
//  })
// useEffect(()=>{
//     console.log("every time")
//  },[]);

useEffect(()=>{
    console.log("unlogged")
    
    return ()=> {
        console.log("logged")

    }
        
    
 },[text]);


 function changeHandler(e){
    console.log(text);
    setText(e.target.value);
    
}

    return (
        <div className="App">
    
            <input type="text" onChange={changeHandler} />

        </div>
    )



}

export default UseEffect;