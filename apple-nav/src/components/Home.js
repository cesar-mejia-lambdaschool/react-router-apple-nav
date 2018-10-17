import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const Home = props => {
  return (
    <Fragment>
      <section className='cta'>
        <div className='cta-heading-container'>
          <h1 className='cta-heading-main'>
            iPhone X<div id='styleS'>s</div>
          </h1>
          <h2 className='cta-heading-sub'>Welcome to the big screens.</h2>
          <div className='cta-links-container'>
            <NavLink className='cta-link' to='learn-more'>
              Learn more &gt;
            </NavLink>
            <NavLink className='cta-link' to='store/iphone'>Buy &gt;</NavLink>
          </div>
        </div>
        <div className='cta-image' alt='iPhoneXS' />
      </section>
      <section className='middle-content'>
        <div className='cta-heading-container'>
          <h1 className='cta-heading-main'>
            iPhone X<div id='styleS'><small>R</small></div>
          </h1>
          <h2 className='cta-heading-sub'>Brilliant. In every way.</h2>
          <h3 className='cta-heading-sub'>
            <small className='pre-order'>Pre-order 10.19</small>
          </h3>
        </div>
        <div className='middle-image' alt='iPhoneXR' />
      </section>
    </Fragment>
  )
}

export default Home
