import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import { routes } from './routes'
import './App.css'

class App extends Component {
  // * setupRoutes passes the butter
  // todo: Make it prettier, more readable, add more muchness
  setupRoutes = routes => {
    return Object.keys(routes).map(
      (key, index) =>
        (key === 'Home' || key === 'Layout'
          ? <Route
            key={index}
            exact
            path='/'
            render={props => React.createElement(routes[key], props)}
          />
          : <Route
            key={index}
            path={`/${key.toLowerCase()}`}
            render={props => React.createElement(routes[key], props)}
          />)
    )
  }
  render () {
    return (
      <Fragment>
        <TopNav />
        {this.setupRoutes(routes)}
      </Fragment>
    )
  }
}

export default App
