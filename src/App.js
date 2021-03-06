import React from 'react';
import logo from './assets/css/logo.svg';
import './assets/css/App.css';
import Demo from './Demo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Demo name='App'/>
    </div>
  );
}

export default App;
