import React, { Component } from 'react'
import withAnimate from './withAnimate'
import ipadData from '../data/ipadData'
import Product from './Product'

class IPad extends Component {
  render () {
    return (
      <div className='subnav ipad'>
        <div className='ipadcontainer' ref={this.props.forwardRef}>
          {ipadData.map((product, i) => <Product key={i} product={product} />)}
        </div>
      </div>
    )
  }
}

export default withAnimate(IPad)
