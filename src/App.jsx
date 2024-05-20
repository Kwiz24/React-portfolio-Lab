import React from 'react';
import './App.css';

// Button component with inline styling
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

// AboutMe component with inline styling
const AboutMe = () => {
  const bio = { text: 'Code Wizard', done: true };
  const bios = [
    { text: 'JavaScript', done: true },
    { text: 'HTML', done: false },
    { text: 'CSS', done: true },
    { text: 'GitHub', done: true },
    { text: 'MongoDB', done: false },
  ];

  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    color: '#4A90E2',
  };

  const skillStyle = {
    color: bio.done ? 'green' : 'red',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Karlon Heileman</h1>
      <p>{bio.text}</p>

      <h2>Skills</h2>
      <p style={skillStyle}>{bio.done ? `Level - ${bio.text}` : bio.text}</p>

      <h2>Skills & Experience</h2>
      <ul>
        {bios.map((bio, index) => (
          <li key={index}>{bio.text}</li>
        ))}
      </ul>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div className="App">
      <AboutMe />
      <Button text="About Me" />
    </div>
  );
};

export default App;