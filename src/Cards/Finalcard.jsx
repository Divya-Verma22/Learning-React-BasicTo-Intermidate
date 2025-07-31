import { useState } from "react";
import Tours from "./Tours"
import data from "./data";

const Finalcard = () => {
    const [tours, setTours] = useState(data);
    function removeTour(id) {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }
    if (tours.length === 0) {
        return (
            <div className="no-tour">
                <div>
                    <h2>No place left </h2>
                </div>
                <button className="refresh"
                    onClick={() => setTours(data)}>Refresh</button>
            </div>
        )
    }

    return (
        <div>
            <Tours tours={tours} removeTour={removeTour}> </Tours>
        </div>
    )
}

export default Finalcard;