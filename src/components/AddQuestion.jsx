import React, { useEffect, useState } from 'react'
import { InputValue } from './InputValue';
import './addQuestion.css';

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
    setAddQuestion({
        question: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: ''
      })
  }

//   useEffect(() => {
//     localStorage.setItem("questions", JSON.stringify(questions));
//   }, [questions]);


  return (
    <div className='wrapper'>
        <div className='form-add'>
            <form className='form' onSubmit={handleAddQuestionClick}>
                <InputValue
                    text="Question answer"
                    type='text'
                    name='question'
                    placeholder='Enter a question'
                    value={addQuestion.question}
                    onChange={e => handleQuestionOnChange(e)}
                    required
                />
                <InputValue 
                    text="Correct answer"
                    type="text" 
                    name="answer1" 
                    placeholder='Enter a correct answer' 
                    value={addQuestion.answer1}
                    onChange={e => handleQuestionOnChange(e)}
                    required
                />
                <InputValue
                    text="Wrong answer" 
                    type="text" 
                    name="answer2" 
                    placeholder='Enter a wrong answer' 
                    value={addQuestion.answer2}
                    onChange={e => handleQuestionOnChange(e)}
                    required
                />
                <InputValue 
                    text="Wrong answer"
                    type="text" 
                    name="answer3" 
                    placeholder='Enter a wrong answer' 
                    value={addQuestion.answer3}
                    onChange={e => handleQuestionOnChange(e)}
                    required
                />
                <InputValue 
                    text="Wrong answer"
                    type="text" 
                    name="answer4" 
                    placeholder='Enter a wrong answer' 
                    value={addQuestion.answer4}
                    onChange={e => handleQuestionOnChange(e)}
                    required
                />
                <div>

                <button className='button-add'>Add Question</button>
                </div>
            </form>
        </div>

        <div className='question-add'>
            <h1 className='title'>List of questions</h1>
            {[...questions].reverse().map(item => (
                <div className="item-question">
                    <h3 className='title-question'>{item.question}</h3>
                    <ul className='list-answers'>
                        <li>{item.answers.answer1.text}</li>
                        <li>{item.answers.answer2.text}</li>
                        <li>{item.answers.answer3.text}</li>
                        <li>{item.answers.answer4.text}</li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}
