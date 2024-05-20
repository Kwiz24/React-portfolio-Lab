import React from 'react';

const Button = ({ text }) => {
  const buttonStyle = {
    backgroundColor: '#b974b6',
    borderRadius: '8px',
    color: 'white',
    fontSize: '16pt',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default Button;