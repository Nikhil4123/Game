import React, { useState } from 'react';

const QuizPage = ({ questions, onEnd }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer('');
    } else {
      onEnd(score);
    }
  };

  return (
    <div>
      <h2 style={titleStyle}>Question {currentQuestion + 1} of {questions.length}</h2>
      <p style={questionStyle}>{questions[currentQuestion].question}</p>
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index} style={optionContainerStyle}>
            <label style={optionLabelStyle}>
              <input
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleAnswerSelection(option)}
                style={radioStyle}
              />
              <span style={optionTextStyle}>{option}</span>
            </label>
          </div>
        ))}
      </div>
      <button 
        onClick={handleNextQuestion} 
        disabled={!selectedAnswer} 
        style={{
          ...buttonStyle,
          opacity: !selectedAnswer ? 0.5 : 1,
          cursor: !selectedAnswer ? 'not-allowed' : 'pointer'
        }}
      >
        {currentQuestion === questions.length - 1 ? 'Finish' : 'Next Question'}
      </button>
    </div>
  );
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333',
  fontSize: '24px',
};

const questionStyle = {
  marginBottom: '20px',
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#444',
};

const optionContainerStyle = {
  marginBottom: '15px',
};

const optionLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '10px',
  borderRadius: '8px',
  transition: 'background-color 0.3s ease',
  ':hover': {
    backgroundColor: '#f0f0f0',
  },
};

const radioStyle = {
  marginRight: '10px',
};

const optionTextStyle = {
  fontSize: '16px',
};

const buttonStyle = {
  backgroundColor: '#2196F3',
  color: 'white',
  border: 'none',
  padding: '12px 20px',
  borderRadius: '8px',
  cursor: 'pointer',
  width: '100%',
  marginTop: '20px',
  fontSize: '18px',
  fontWeight: 'bold',
};

export default QuizPage;