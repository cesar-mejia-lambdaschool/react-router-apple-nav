import React, { Component } from 'react'
import withAnimate from './withAnimate'
import iphoneData from '../data/iphoneData'
import Product from './Product'

class IPhone extends Component {
  render () {
    return (
      <div className='subnav mac'>
        <div className='iphonecontainer' ref={this.props.forwardRef}>
          {iphoneData.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      </div>
    )
  }
}

export default withAnimate(IPhone)
