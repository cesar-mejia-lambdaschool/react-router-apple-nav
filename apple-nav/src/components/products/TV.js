import React, { Component } from 'react'
import withAnimate from './withAnimate'
import tvData from '../data/tvData'
import Product from './Product'

class TV extends Component {
  render () {
    return (
      <div className='subnav mac'>
        <div className='ipadcontainer' ref={this.props.forwardRef}>
          {tvData.map((product, i) => <Product key={i} product={product} />)}
        </div>
      </div>
    )
  }
}

export default withAnimate(TV)
