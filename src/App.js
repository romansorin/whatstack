import React from 'react';
import './App.scss';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import LandingPage from './LandingPage';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <LandingPage />
      <AppFooter />
    </div>
  );
}

export default App;
