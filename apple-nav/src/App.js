import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import './App.css'

import { routes } from './routes'

class App extends Component {
  // * setupRoutes passes the butter
  // todo: Make it prettier, more readable, add more muchness
  setupRoutes = routes => {
    return Object.keys(routes).map(
      (key, index) =>
        (key === 'Home'
          ? <Route
            key={index}
            exact
            path='/'
            render={props => React.createElement(key, { ...props }, null)}
          />
          : <Route
            key={index}
            path={`/${key.toLowerCase()}`}
            render={props => React.createElement(key, { ...props }, null)}
          />)
    )
  }
  render () {
  ``  console.log('yo')
    return (
      <div className='App'>
        <TopNav />
        {this.setupRoutes(routes)}
      </div>
    )
  }
}

export default App
