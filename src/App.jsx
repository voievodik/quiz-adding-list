import { useState } from "react";
import { AddQuestion } from "./components/AddQuestion"
import { StartQuestion } from "./components/StartQuestion"
import data from './mock-data.json';
import './app.css';

function App() {
  const [questions, setQuestions] = useState(data);
  const [startQuiz, setStartQuiz] = useState(false);
  const [number, setNumber] = useState(-1);
  
  const handleClick = () => {
    setStartQuiz(!startQuiz);
    !startQuiz && setNumber(0);
  }  

  return (
    <div className="app">
      {number === questions.length || number === -1 ? 
      <button 
        className="button-start" 
        onClick={handleClick}
      >
        {!startQuiz ? <span>Start Quiz</span> : <span>Edit Quiz</span>}
      </button>
      : <></>}
      {startQuiz ?
      <StartQuestion questions={questions} number={number} setNumber={setNumber} />
      :
      <AddQuestion questions={questions} setQuestions={setQuestions} />
      } 
    </div>
  )
}

export default App
