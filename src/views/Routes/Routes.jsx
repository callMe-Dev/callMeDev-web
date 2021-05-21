import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import AboutUs from '../AboutUs/AboutUs'
import Home from '../Home/Home'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about-us' component={AboutUs} />
      <Route path='/*'>
        <Redirect to='/' component={Home} />
        {/* <Redirect to='/not-found' component={Error404} /> */}
      </Route>
    </Switch>
  )
}
