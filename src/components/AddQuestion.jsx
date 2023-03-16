import React, { useState } from 'react'

export const AddQuestion = ({ questions, setQuestions}) => {
  const [addQuestion, setAddQuestion] = useState({
    question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: ''
  })


  const handleQuestionOnChange = (e) => {
    e.preventDefault();
    setAddQuestion({...addQuestion, [e.target.name] : e.target.value})
  }

  const handleAddQuestionClick = (e) => {
    e.preventDefault();

    const newQuestion = {
        question: addQuestion.question,
        answers: {
            answer1: {
                text: addQuestion.answer1,
                correct: true
            },
            answer2: {
                text: addQuestion.answer2,
                correct: false
            },
            answer3: {
                text: addQuestion.answer3,
                correct: false
            },
            answer4: {
                text: addQuestion.answer4,
                correct: false
            },
        }
    }

    setQuestions([...questions, newQuestion])
  }


  return (
    <div>
        <div>
            {questions.map(item => (
                <div>
                    <h3>{item.question}</h3>
                    <ul>
                        <li>{item.answers.answer1.text}</li>
                        <li>{item.answers.answer2.text}</li>
                        <li>{item.answers.answer3.text}</li>
                        <li>{item.answers.answer4.text}</li>
                    </ul>
                </div>
            ))}
        </div>

        <div>
            <form onSubmit={handleAddQuestionClick}>
                <input 
                    type="text" 
                    name="question" 
                    placeholder='Enter a question' 
                    onChange={e => handleQuestionOnChange(e)}
                    required
                />
                <input 
                    type="text" 
                    name="answer1" 
                    placeholder='Enter a correct answer' 
                    onChange={e => handleQuestionOnChange(e)}
                    required
                />
                <input 
                    type="text" 
                    name="answer2" 
                    placeholder='Enter a wrong answer' 
                    onChange={e => handleQuestionOnChange(e)}
                    required
                />
                <input 
                    type="text" 
                    name="answer3" 
                    placeholder='Enter a wrong answer' 
                    onChange={e => handleQuestionOnChange(e)}
                    required
                />
                <input 
                    type="text" 
                    name="answer4" 
                    placeholder='Enter a wrong answer' 
                    onChange={e => handleQuestionOnChange(e)}
                    required
                />
                <button>Add Question</button>
            </form>
        </div>

        {/* <div>
            {addQuestion.answer1}
            {addQuestion.answer2}
            {addQuestion.answer3}
            {addQuestion.answer4}
        </div> */}
    </div>
  )
}
