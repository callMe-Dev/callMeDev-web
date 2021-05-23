import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { routes } from './routes'

export default function Routes() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route path={route.url} exact={route.exact} key={nanoid()}>
          {route.component}
        </Route>
      ))}
    </Switch>
  )
}
