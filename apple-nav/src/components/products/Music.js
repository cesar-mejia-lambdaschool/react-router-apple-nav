import React, { Component } from 'react'
import {TweenMax} from 'gsap/TweenMax'

import musicData from '../data/musicData'
import Product from './Product'

class Music extends Component {
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
      <div className='subnav ipad'>
        <div className='iphonecontainer' ref={this.container}>
          {musicData.map((product, i) => <Product key={i} product={product} />)}
        </div>
      </div>
    )
  }
}

export default Music
