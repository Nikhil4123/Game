import React, { useState } from 'react';
import StartPage from './StartPage';
import QuizPage from './QuizPage';
import EndPage from './EndPage';
import Description from './Description';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  }
];

const App = () => {
  const [gameState, setGameState] = useState('start');
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [score, setScore] = useState(0);

  const startGame = (name, age) => {
    setUserName(name);
    setUserAge(age);
    setGameState('quiz');
  };

  const endGame = (finalScore) => {
    setScore(finalScore);
    setGameState('end');
  };

  const restartGame = () => {
    setGameState('start');
    setUserName('');
    setUserAge('');
    setScore(0);
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle} className="animated-card">
        {gameState === 'start' && <StartPage onStart={startGame} />}
        {gameState === 'quiz' && <QuizPage questions={questions} onEnd={endGame} />}
        {gameState === 'end' && (
          <EndPage
            userName={userName}
            score={score}
            totalQuestions={questions.length}
            onRestart={restartGame}
          />
        )}
      </div>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .animated-card {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        button {
          transition: all 0.3s ease;
        }
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        input {
          transition: all 0.3s ease;
        }
        input:focus {
          transform: translateY(-2px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '30px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  width: '400px',
  maxWidth: '90%',
};

export default App;