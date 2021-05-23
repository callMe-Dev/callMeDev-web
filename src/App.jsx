import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Routes from './Routes/Routes'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes />
        <Footer />
      </Router>
    </div>
  )
}

export default App
