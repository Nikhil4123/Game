import React from 'react';

const Description = () => {
  return (
    <div style={descriptionStyle}>
      <p>
        Welcome to our exciting MCQ Quiz Game! Test your knowledge across various topics with our carefully crafted questions. Challenge yourself, learn new facts, and have fun along the way. Are you ready to begin your quest for knowledge?
      </p>
    </div>
  );
};

const descriptionStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  padding: '15px',
  marginBottom: '20px',
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#333',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
};

export default Description;