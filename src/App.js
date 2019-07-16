import React from 'react';
import logo from './logo.svg';
import './App.scss';
import AppFooter from './AppFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AppFooter />
    </div>
  );
}

export default App;
