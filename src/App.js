import React from 'react'
import { Route } from 'react-router-dom'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import LandingPage from './LandingPage'
import Test from './Test'
import './assets/sass/index.scss'

function App() {
  return (
    <div className='app'>
      <AppHeader />
      <Route path='/' exact component={LandingPage} />
      <Route path='/test' exact component={Test} />
      <AppFooter />
    </div>
  )
}

export default App
