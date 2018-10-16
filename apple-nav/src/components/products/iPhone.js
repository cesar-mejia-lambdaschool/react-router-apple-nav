import React, { Component } from 'react'
import {TweenMax} from 'gsap/TweenMax'

import iphoneData from '../data/iphoneData'
import Product from './Product'

class IPhone extends Component {
  constructor (props) {
    super(props)
    this.container = React.createRef()
  }

  componentDidMount () {
    const node = this.container.current
    TweenMax.from(node, 1, { x: 300, autoAlpha: 0 })
  }
  render () {
    return (
      <div className='subnav mac'>
        <div className='iphonecontainer' ref={this.container}>
          {iphoneData.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      </div>
    )
  }
}

export default IPhone
