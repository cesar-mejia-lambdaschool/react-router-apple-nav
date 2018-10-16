import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = props => {
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
  )
}

export default Home
