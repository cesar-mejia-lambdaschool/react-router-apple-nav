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
        <div className='iphone-xs' alt='iphonexs photo' />
      </section>
    </Fragment>
  )
}

export default Home
