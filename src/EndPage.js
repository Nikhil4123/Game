import React from 'react';

const EndPage = ({ userName, score, totalQuestions, onRestart }) => {
  return (
    <div>
      <h2 style={titleStyle}>Quiz Completed!</h2>
      <p style={resultStyle}>
        Congratulations, {userName}!
      </p>
      <p style={scoreStyle}>
        You scored <span style={highlightStyle}>{score}</span> out of <span style={highlightStyle}>{totalQuestions}</span>!
      </p>
      <button onClick={onRestart} style={buttonStyle}>
        Play Again
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

const resultStyle = {
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '10px',
  color: '#444',
};

const scoreStyle = {
  textAlign: 'center',
  fontSize: '20px',
  marginBottom: '30px',
  color: '#666',
};

const highlightStyle = {
  color: '#2196F3',
  fontWeight: 'bold',
  fontSize: '24px',
};

const buttonStyle = {
  backgroundColor: '#FF4081',
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

export default EndPage;