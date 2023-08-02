import {useState} from 'react';

const Card = ({question, correctAnswerMarkUpdate, attempt, options, answer})=>{
const [isDisabled, setIsDisabled] = useState(false);
    const onButtonClick=(e)=>{
        if(e.target.tagName==="BUTTON"){
            setIsDisabled(true);
            if(e.target.innerText === answer){
                correctAnswerMarkUpdate();
            }
            attempt();
        }
    }
    return (
        <div className="container" onClick={onButtonClick}>
            <h4 >{question}</h4> 
            <button disabled={isDisabled}>{options.option1}</button>
            <button disabled={isDisabled}>{options.option2}</button>
            <button disabled={isDisabled}>{options.option3}</button>
            <button disabled={isDisabled}>{options.option4}</button>
        </div>
    )
    }

export default Card;