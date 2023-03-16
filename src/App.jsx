import { useState } from "react";
import { AddQuestion } from "./components/AddQuestion"
import { StartQuestion } from "./components/StartQuestion"
import data from './mock-data.json';

function App() {
  const [questions, setQuestions] = useState(data);
  
  return (
    <div className="App">
      {/* <StartQuestion questions={questions} /> */}
      <AddQuestion questions={questions} setQuestions={setQuestions} />
    </div>
  )
}

export default App
