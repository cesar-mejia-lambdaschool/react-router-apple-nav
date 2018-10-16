import React, { Component } from 'react'
import { TweenMax } from 'gsap/TweenMax'

import watchData from '../data/watchData'
import Product from './Product'

class Watch extends Component {
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
      <div className='subnav watch'>
        <div className='watchcontainer' ref={this.container}>
          {watchData.map((product, i) => <Product key={i} product={product} />)}
        </div>
      </div>
    )
  }
}

export default Watch
