import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import OneSignal from 'react-onesignal';

function App() {
  
  useEffect(() => {
    OneSignal.init({
      appId: "83ef08d6-6c35-46ac-bf96-961cb844e95d",
    });
  }, []);



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
    </div>
  );
}

export default App;
