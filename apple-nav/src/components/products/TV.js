import React, { Component } from 'react'
import { TweenLite } from 'gsap/TweenLite'
import tvData from '../data/tvData'
import Product from './Product'

class TV extends Component {
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
        <div className='ipadcontainer' ref={this.container}>
          {tvData.map((product, i) => <Product key={i} product={product} />)}
        </div>
      </div>
    )
  }
}

export default TV
