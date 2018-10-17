import React, { Component } from 'react'
import withAnimate from './withAnimate'
import watchData from '../data/watchData'
import Product from './Product'

class Watch extends Component {
  render () {
    return (
      <div className='subnav watch'>
        <div className='watchcontainer' ref={this.props.forwardRef}>
          {watchData.map((product, i) => <Product key={i} product={product} />)}
        </div>
      </div>
    )
  }
}

export default withAnimate(Watch)
