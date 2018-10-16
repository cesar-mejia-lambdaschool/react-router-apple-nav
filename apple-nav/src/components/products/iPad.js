import React, { Component } from 'react'
import { TweenMax } from 'gsap/TweenMax'
import ipadData from '../data/ipadData'
import Product from './Product'

class IPad extends Component {
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
        <div className='ipadcontainer' ref={this.container}>
          {ipadData.map((product, i) => <Product key={i} product={product} />)}
        </div>
      </div>
    )
  }
}

export default IPad
