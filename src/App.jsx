import { useState } from "react";
import { AddQuestion } from "./components/AddQuestion"
import { StartQuestion } from "./components/StartQuestion"
import data from './mock-data.json';
import './app.css';

function App() {
  const [questions, setQuestions] = useState(data);
  
  

  return (
    <div className="app">
      {/* <StartQuestion questions={questions} /> */}
      <AddQuestion questions={questions} setQuestions={setQuestions} />
    </div>
  )
}

export default App
