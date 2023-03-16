import React, { useEffect, useState } from 'react'
import './startQuestion.css'

export const StartQuestion = ({ questions, number, setNumber }) => {
  
  const [question, setQuestion] = useState(null);
  const [mark, setMark] = useState(0)
  const [correct, setCorrect] = useState(false)

  useEffect(() => {
    setQuestion(questions[number])
  }, [number])
  
  const handleClick = (e, answer) => {
    setCorrect(answer.correct)
}

const handleNext = () => {
    setNumber(prev => prev + 1);
    if(correct) setMark(prev => prev + 1)
}

const restartQuiz = () => {
  setNumber(0);
  setMark(0);
}

  return (
    <div className="quiz-wrapper">
      {question ?
      <div className="quiz-question">
        <h2 className='quiz-title'>{question?.question}</h2>
        <ul className="quiz-answers">
          <li onClick={(e) => handleClick(e, question.answers.answer1)}>{question?.answers.answer1.text}</li>
          <li onClick={(e) => handleClick(e, question.answers.answer2)}>{question?.answers.answer2.text}</li>
          <li onClick={(e) => handleClick(e, question.answers.answer3)}>{question?.answers.answer3.text}</li>
          <li onClick={(e) => handleClick(e, question.answers.answer4)}>{question?.answers.answer4.text}</li>
        </ul>
        <button
          className='quiz-button'
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      :
      <div className='correct-answers'>
        <h2>Correct answers: {mark}</h2>
        <div>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      </div>
      }
    </div>
  )
}
