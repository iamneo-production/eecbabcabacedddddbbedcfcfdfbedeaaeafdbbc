import {useState} from "react";
import './App.css';
import Button from "./components/UI/Button/Button.js"
import Card from "./components/UI/Card/Card"
import data from "./Data/data.js"
import Banner from "./components/UI/Banner/banner"

function App() {
  const [isQuizStarted, setisQuizStarted] = useState(false);
  const [correctAnswers ,setCorrectAnswers] = useState(0);
  const [totalAttempted, setIsTotalAttempted] = useState(0);
  const [showBanner, setShowBanner] = useState(false);

  return (
    <div className="App">
      <h1>Quizz App</h1> 
        {!isQuizStarted && <Button onClick={()=>{
          setisQuizStarted(true);
          setShowBanner(false);
          setCorrectAnswers(0);
          setIsTotalAttempted(0);
        }}>"Start Quiz"</Button>}
        {
            isQuizStarted && data.map(item => {
              return (
                <Card 
                key={item.questionId}
                correctAnswerMarkUpdate={()=>{
                  setCorrectAnswers(correctAnswers+1);
                }}
                attempt={()=>{
                  setIsTotalAttempted(totalAttempted+1)
                }}
                question={item.question}
                options={{
                option1: item.option1,
                option2: item.option2,
                option3: item.option3,
                option4: item.option4
                }}
                answer={item.answer}
                />
              )
            })
          }
          {
            totalAttempted ===5 && <Button onClick={()=>{
                setShowBanner(true);
                setisQuizStarted(false);
                setIsTotalAttempted(0);
            }}>"Show Results"</Button>
          }
          {
            showBanner && <Banner correctAnswered={correctAnswers}/>
          }
    </div>
  );
}

export default App;