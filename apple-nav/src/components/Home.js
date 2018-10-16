a<<<<<<< HEAD
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import iPhoneXs from './../images/hero-iphone-xs_large.jpg'
const Home = () => {
  return (
    <Fragment>
      <section className='cta'>
        <div className='cta-container'>
          <h1 className='cta-heading'>
            iPhone X<span>s</span>
          </h1>
          <h2 className='cta-sub-heading'>Welcome to the big screens.</h2>
        </div>
        <div>
          <Link to='learn-more'>Learn more &gt;</Link>
          <Link to='store/iphone'>Buy &gt;</Link>
        </div>
        <div className='cta-image' alt='iphonexs photo' />
      </section>
    </Fragment>
import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <section className='cta'>
      <div className='cta-container'>
        <h1 className='cta-heading'>
          iPhone X<span>s</span>
        </h1>
        <h2 className='cta-sub-heading'>Welcome to the big screens.</h2>
      </div>
      <div>
        <NavLink to='learn-more'>Learn more &gt;</NavLink>
        <NavLink to='store/iphone'>Buy &gt;</NavLink>
      </div>
      <div className='cta-img' alt='cta-image' />
    </section>
>>>>>>> b8d6eaddd376c5610238d3426a67fb9fca9842e3
  )
}

export default Home
