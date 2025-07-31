import { useState } from "react";

function Card({ id, image, info, price, name , removeTour}) {
    const [readmore, setReadmore] = useState(false);
    // readmore - false at first if we click mean readmore true if true than 
    const description = readmore ? info : `${info.substring(0, 200)}...`
    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return (

        <div className="card">
            <img src={image}
                className="image"
                alt={`${name} image loading`} />

            <div className="tour-info">
                <div className="details" >
                    <h4 className="price">${price}</h4>
                    <h4 className="name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read"
                        onClick={readmoreHandler}>
                        {readmore ? 'show Less' : 'read more'}
                    </span>
                </div>
            </div>

            <button onClick={() => removeTour(id) } //debugging from here children to prent call 
                className="button">Not interested</button>  



        </div>
    )


}
export default Card;