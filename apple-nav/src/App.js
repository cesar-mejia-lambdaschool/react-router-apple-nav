import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import './App.css'

import { routes } from './routes'
class App extends Component {
  setupRoutes = routes => {
    return Object.keys(routes).map(
      (key, index) =>
        (key === 'Home'
          ? <Route key={index} exact path='/' component={routes[key]} />
          : <Route
            key={index}
            path={`/${key.toLowerCase()}`}
            render={props => (routes[key].props = { ...props })}
            />)
    )
  }
  render () {
    return (
      <div className='App'>
        <TopNav />
        {this.setupRoutes(routes)}
      </div>
    )
  }
}

export default App
