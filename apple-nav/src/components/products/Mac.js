import React, { Component } from 'react'
import withAnimate from './withAnimate'
import macData from '../data/macData'
import Product from './Product'

class Mac extends Component {
  render () {
    return (
      <div className='subnav mac'>
        <div className='maccontainer' ref={this.props.forwardRef}>
          {macData.map((product, i) => <Product key={i} product={product} />)}
        </div>
      </div>
    )
  }
}

export default withAnimate(Mac)
