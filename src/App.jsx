import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from './views/Home/Home'
import AboutUs from './views/AboutUs/AboutUs'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route path='/*'>
            <Redirect to='/' component={Home} />
            {/* <Redirect to='/not-found' component={Error404} /> */}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
