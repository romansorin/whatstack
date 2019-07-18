import React from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import LandingPage from './LandingPage';
import './assets/sass/index.scss';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <LandingPage />
      <AppFooter />
    </div>
  );
}

export default App;
