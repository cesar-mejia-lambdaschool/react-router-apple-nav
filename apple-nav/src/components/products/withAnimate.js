import React, { Component } from 'react'

const withAnimate = WrappedComponent => {
  return class extends Component {
    constructor (props) {
      super(props)
      this.container = React.createRef()
    }

    componentDidMount () {
      const node = this.container.current
      TweenMax.from(node, 1, { x: 300, autoAlpha: 0 })
    }
    render () {
      return <WrappedComponent {...this.props} ref={this.container} />
    }
  }
}

export default withAnimate
