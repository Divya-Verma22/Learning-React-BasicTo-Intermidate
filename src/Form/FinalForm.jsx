import { useState } from "react";

const FinalForm = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        country: "India",
        address: "",
        city: "",
        state: "",
        postal: "",
        comments: false,
        candidates: false,
        offer: false,
        notification: ""


    })

    function actionHandler(event) {
        const { name, type, checked, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }
    function submitHandler(event) {
        event.preventDefault();
        console.log("finaly");
        console.log(formData)

    }
    return (
        <div className="flex flex-col mt-2 border-2 items-center  text-black ">
           <p className="bold"> Registration Form </p>

            <form onSubmit={submitHandler} >
                <label htmlFor="firstname" className="text-xl mx-6" >First Name</label>
                <br />
                <input type="text" name="firstname" id="firstname" placeholder="First Name"
                    onChange={actionHandler} value={formData.firstname}
                    className="border border-gray-300 rounded w-[94vw] h-8 px-4 mx-4"
                />
                <br />
                <label htmlFor="lastname" className="text-xl mx-6 " >Last Name  </label>
                <br />
                <input type="text" name="lastname" id="lastname" placeholder="Last Name"
                    onChange={actionHandler} value={formData.lastname}
                    className="border border-gray-300 rounded w-[94vw] h-8 px-4 mx-4" />
                <br />

                <label htmlFor="email" className="text-xl mx-6">Email </label>
                <br />
                <input type="email" name="email" id="email" placeholder="email123@gmail.com"
                    onChange={actionHandler} value={formData.email}
                    className="border border-gray-300 rounded w-[94vw] h-8 px-4 mx-4" />
                <br />



                <div className="mb-4">
                    <label htmlFor="country" className="text-xl mx-6">Country</label>
                    <br />
                    <select
                        name="country"
                        id="country"
                        onChange={actionHandler}
                        value={formData.country}
                        className="border border-gray-300 rounded w-[94vw] h-8 px-4 mx-4"
                    >
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">Mexico</option>
                    </select>
                </div>




                <label htmlFor="address" className="text-xl mx-6">Address</label>
                <br />
                <input type="text" name="address" id="address"
                    placeholder="1234 Main st" onChange={actionHandler} value={formData.address}
                    className="border border-gray-300 rounded w-[94vw] h-8 px-4 mx-4" />
                <br />
                <label htmlFor="city" className="text-xl mx-6">City</label>
                <br />
                <input type="text" name="city" id="city" placeholder="Assansol"
                    onChange={actionHandler} value={formData.city}
                    className="border border-gray-300 rounded w-[94vw] h-8 px-4 mx-4" />
                <br />
                <label htmlFor="state" className="text-xl mx-6">State</label>
                <br />
                <input type="text" name="state" id="state" placeholder="West Bengal"
                    onChange={actionHandler} value={formData.state}
                    className="border border-gray-300 rounded w-[94vw] h-8 px-4 mx-4" />
                <br />
                <label htmlFor="postal-code" className="text-xl mx-6">Postal Code</label>
                <br />
                <input type="text" name="postal" id="postal-code" placeholder="713301"
                    onChange={actionHandler} value={formData.postal}
                    className="border border-gray-300 rounded w-[94vw] h-8 px-4 mx-4" />
                <br /> <br />


                {/* checked */}

                <fieldset>
                    <legend className="font-semibold ">By Email</legend>

                    <div className="flex">
                        <input type="checkbox"
                            id="comments" name="comments"
                            onChange={actionHandler}
                            checked={formData.comments}
                        />
                        <div className="flex flex-col mx-2" >
                            <label htmlFor="comments" className="mt-2 font-semibold text-gray-900">Comments</label>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>


                    <div className="flex">

                        <input type="checkbox"
                            id="candidates" name="candidates"
                            onChange={actionHandler}
                            checked={formData.candidates}
                        />
                        <div className="flex flex-col mx-2 " >
                            <label htmlFor="candidates" className="mt-2 font-semibold text-gray-900">Candidates</label>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <input type="checkbox"
                            id="offer" name="offer"
                            onChange={actionHandler}
                            checked={formData.offer}
                        />
                        <div className="flex flex-col mx-2" >
                            <label htmlFor="offer" className="mt-2 font-semibold text-gray-900">offer</label>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>





                </fieldset>


                <br />
                <br />

                <fieldset>
                    <legend className="font-semibold">
                        Push Notifications
                    </legend>
                    <p className="font-semibold"> There are delivered via SMS to your mobile phone.</p>

                    <input type="radio" name="notification" id="byemail"
                        onChange={actionHandler} value="byemail" checked={formData.notification === "byemail"} />
                    <label htmlFor="byemail" className="mx-2">same as email</label>
                    <br />

                    <input type="radio" name="notification" id="everything"
                        onChange={actionHandler} value="everything" checked={formData.notification === "everything"} />
                    <label htmlFor="everything" className="mx-2">Everything</label>
                    <br />

                    <input type="radio" name="notification" id="viasms"
                        onChange={actionHandler} value="viasms" checked={formData.notification === "viasms"} />
                    <label htmlFor="viasms" className="mx-2">Via sms</label>
                </fieldset>

                <button className="border-2 border-blue-500 bg-blue-500 text-white py-1 px-4 rounded text-center hover:bg-blue-600 transition-all  ">
                    Save
                </button>


            </form>
        </div>
    )

}
export default FinalForm;