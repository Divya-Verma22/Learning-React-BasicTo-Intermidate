import { useState } from "react";

const Form = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isVisible: true,
        mode: "",
        favcar: ""
    })
    // console.log(formData);


    function nameHandler(event) {
        const { name, value, checked, type } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }
    function sHandler(event) {
        event.preventDefault();
        console.log("finally")
        console.log(formData);
    }




    //     const [firstName , setFirstName] = useState("");
    //     const [lastName , setLastName] = useState("");

    //     console.log(firstName);
    //      console.log(lastName);

    // function firstnameHandler(e){
    //     setFirstName(e.target.value);

    // }

    // function lastnameHandler(e){
    //     setLastName(e.target.value);

    // }



    return (
        <div>
            <form onSubmit={sHandler}>
                <input type="text"
                    placeholder="First Name" onChange={nameHandler} className="border-2"
                    name="firstName"
                    value={formData.firstName} />
                <br /> <br />
                <input type="text"
                    placeholder="Last Name" onChange={nameHandler} className="border-2"
                    name="lastName"
                    value={formData.lastName} />
                <br />
                <br />
                <input type="email" name="email" placeholder="enter email" className="border-2"
                    onChange={nameHandler}
                    value={formData.email} />
                <br />
                <br />
                <textarea placeholder="enter your comments" name="comments" className="border-2"
                    onChange={nameHandler} value={formData.comments}> </textarea>
                <br />
                <br />
                <label htmlFor="isVisible"> am i visible</label>
                <input type="checkbox" name="isVisible" onChange={nameHandler} id="isVisible"
                    checked={formData.isVisible} />
                <br />
                <br />
                <fieldset>
                    <legend>Mode For: </legend>
                    <input type="radio" name="mode" id="online-mode" onChange={nameHandler}
                        value="online-mode" checked={formData.mode == "online-mode"} />
                    <label htmlFor="online-mode">online mode</label>
                    <input type="radio" name="mode" id="offline-mode" onChange={nameHandler}
                        value="offline-mode" checked={formData.mode == "offline-mode"} />
                    <label htmlFor="offline-mode">offline mode</label>


                </fieldset>
                <label htmlFor="favcar"></label>
                <select name="favcar" id="favcar"
                    value={formData.favcar} onChange={nameHandler}
                >
                    <option value="a"> a</option>
                    <option value="b"> b</option>
                    <option value="c"> c</option>

                </select>

                {/* <input type="submit" value='submit' />
               */}
                <button>Submit</button>



            </form>
        </div>
    )

}
export default Form;