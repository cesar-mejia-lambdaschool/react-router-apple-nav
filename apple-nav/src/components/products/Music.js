import React, { Component } from 'react'
import withAnimate from './withAnimate'
import musicData from '../data/musicData'
import Product from './Product'

class Music extends Component {
  render () {
    return (
      <div className='subnav ipad'>
        <div className='iphonecontainer' ref={this.props.forwardRef}>
          {musicData.map((product, i) => <Product key={i} product={product} />)}
        </div>
      </div>
    )
  }
}

export default Music
