import {useState} from "react";
const Banner = ({correctAnswered})=>{
    const [ questionsCorrect ] = useState(correctAnswered);
return (
    <h3>You have answered {questionsCorrect} / 5  Correctly</h3> 
)
}
export default Banner;