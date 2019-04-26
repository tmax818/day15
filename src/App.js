import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is</p>
        <a
          className="App-link"
          href="http://www.tylermaxwell.co/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Day 15
        </a>
        <p>of my</p>
        <a
          className="App-link"
          href="https://medium.com/rubypythoncjs/180-websites-in-180-days-14a3c18f4984"
          target="_blank"
          rel="noopener noreferrer"
        >
          180 day challenge
        </a>
      </header>
    </div>
  );
}

export default App;
