import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = props => {
  return (
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

      <div className='cta-image' alt='cta-image' />
    </section>
  )
}

export default Home
