import React, { Component } from 'react'
import { TweenMax } from 'gsap/TweenMax'

const withAnimate = WrappedComponent => {
  return class HOC extends Component {
    constructor (props) {
      super(props)
      this.node = React.createRef()
    }

    componentDidMount () {
      const node = this.node.current
      TweenMax.from(node, 1, { x: 300, autoAlpha: 0 })
    }
    render () {
      return <WrappedComponent {...this.props} forwardRef={this.node} />
    }
  }
}

export default withAnimate
