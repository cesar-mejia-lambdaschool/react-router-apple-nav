import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import './App.css'

import { routes } from './routes'

class App extends Component {
  // * setupRoutes passes the butter
  // todo: Make it prettier, more readable, add more muchness
  setupRoutes = routes => {
    console.log('routes', routes)

    return Object.keys(routes).map(
      (key, index) =>
        (key === 'Home'
          ? <Route
            key={index}
            exact
            path='/'
            // render={props => React.createElement(key, { props })}
            component={routes[key]}
          />
          : <Route
            key={index}
            path={`/${key.toLowerCase()}`}
            component={routes[key]}
            // render={props => React.createElement(key, props)}
          />)
    )
  }
  render () {
    console.log('yo')
    return (
      <div className='App'>
        <TopNav />
        {this.setupRoutes(routes)}
      </div>
    )
  }
}

export default App
