import React, { Component } from 'react'
import withAnimate from './withAnimate'
import Product from './Product'

class SubNav extends Component {
  render () {
    const { subnav, container, data } = this.props
    return (
      <div className={subnav}>
        <div className={container} ref={this.props.forwardRef}>
          {data.map((product, i) => <Product key={i} product={product} />)}
        </div>
      </div>
    )
  }
}

export default withAnimate(SubNav)
