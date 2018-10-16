import React, { Component } from 'react'
import { TweenLite } from 'gsap/TweenLite'

import macData from '../data/macData'
import Product from './Product'
class Mac extends Component {
  constructor (props) {
    super(props)
    this.container = React.createRef()
  }

  componentDidMount () {
    const node = this.container.current
    TweenLite.from(node, 1, { x: 300, autoAlpha: 0 })
  }
  render () {
    return (
      <div className='subnav mac'>
        <div className='maccontainer' ref={this.container}>
          {macData.map((product, i) => <Product key={i} product={product} />)}
        </div>
      </div>
    )
  }
}

export default Mac
