import React, { useState } from 'react';
import Description from './Description';

const StartPage = ({ onStart }) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const handleStartGame = () => {
    if (userName && userAge) {
      onStart(userName, userAge);
    } else {
      alert('Please enter your name and age to start the game.');
    }
  };

  return (
    <div>
      <h1 style={titleStyle}>Welcome to the MCQ Quiz Game!</h1>
      <Description />
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Enter your age"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleStartGame} style={buttonStyle}>
        Start Quiz
      </button>
    </div>
  );
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333',
  fontSize: '28px',
  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  borderRadius: '8px',
  border: '2px solid #ddd',
  fontSize: '16px',
  outline: 'none',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
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

export default StartPage;