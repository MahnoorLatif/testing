import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import vector from './vector.png';
// import ClearIcon from '@mui/icons-material/Clear';
import './App.css';

function App() {
  // State to store the list of questions
  const [questions, setQuestions] = useState([]);
  

  // Handler function for adding a question
  const handleAddQuestion = (e) => {
    e.preventDefault();
    const questionInput = e.target.previousElementSibling;
    const newQuestion = questionInput.value.trim();
    if (newQuestion !== '') {
      // Add the new question to the state
      setQuestions([...questions, newQuestion]);
      // Clear the input field
      questionInput.value = '';
    }
  };

  const handleDeleteQuestion = (index) => {
    // Create a new array without the question at the specified index
    const updatedQuestions = questions.filter((_, i) => i !== index);
    // Update the state with the new array of questions
    setQuestions(updatedQuestions);
  };


  return (
    <div className='container border rounded mt-5 w-50'>

      {/* Section Heading Input */}

      {/* <div className='input-group mt-5'>
        <input
          type='text'
          className='form-control border-0 border-bottom'
          placeholder='Section Heading'
          aria-label='Section Heading'
        />
      </div>   */}

      {/* Add Question Button */}
      <div className='input-group mt-5'>
        <input
          type='text'
          className='form-control border-0 border-bottom'
          placeholder='Add Question'
          aria-label='Add Question'
        />

        <button
          style={{ border: '1px solid white', backgroundColor: 'white' }}
          className='add_question border-bottom'
          onClick={handleAddQuestion}
        >
          <img src={vector} alt='vector' style={{ width: '15px' }} /> Add Question
        </button>
      </div>

      <div>
          <button
            style={{ border: '1px solid white', backgroundColor: 'white' }}
    
            className='addmore mt-5'
          >
            {' '}
            <img src={vector} alt='vector' style={{width:'15px' }} /> Add More
          </button>
        </div>

        <button
          className='btn btn-danger ms-1 mt-5 bg-white border-white text-danger mb-2'
          // onClick={handleDiscard}
        >
          Discard
        </button>

        <button
          className='btn btn-success ms-3 mt-5 mb-2 p-3 '
          // onClick={handleAddSection}
        >
          Add Section
        </button>

      

      <br />

      {/* Display added questions */}
      <div className=''>
        {questions.map((question, index) => (
          <div key={index} className='mb-3 d-flex justify-content-between'>
            {question}
            <div className='icon '>
                <DeleteIcon style={{color:'#FF6760' }}
                onClick={() => handleDeleteQuestion(index)} 

              cursor='pointer'/>
               </div>
          </div>
        ))}
      </div>

      

      {/* ------------------------------------------------------------------- */}

    
    </div>
  );
}

export default App;

