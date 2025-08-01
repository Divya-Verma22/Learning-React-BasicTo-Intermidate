import { useState } from "react";
import Card from "./Card";
const Cards = ({ courses, category }) => {


    // console.log("cards ka andar hun")
    // console.log(courses)

    const [likedCourses, setLikedCourses] = useState([]);
    //converting into single array

    const getCourses = () => {
        if (category === "All") {

            let allcourse = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allcourse.push(courseData);
                })
            }

            )
            return allcourse;
        }
        else{
            // console.log(courses.title);
            return courses[category] ;
        }
        

    }



    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">

            {
                getCourses().map((course) => {
                    return <Card key={course.id} course={course}
                        likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })
            }

        </div>
    )

}
export default Cards;