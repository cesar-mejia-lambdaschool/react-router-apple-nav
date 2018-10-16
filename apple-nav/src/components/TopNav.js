import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
  console.log(
    'test',
    window.location.pathname.includes('/mac') ||
      window.location.pathname.includes('/iphone') ||
      window.location.pathname.includes('/tv')
  )
  return (
    <header
      className={
        window.location.pathname.includes('/mac') ||
          window.location.pathname.includes('/iphone') ||
          window.location.pathname.includes('/tv')
          ? 'header-dark'
          : 'header-light'
      }
    >
      <nav>
        <Link to='/'><i id='apple' className='fab fa-apple' /></Link>
        <Link to='/mac'>Mac</Link>
        <Link to='/ipad'>iPad</Link>
        <Link to='/iphone'>iPhone</Link>
        <Link to='/watch'>Watch</Link>
        <Link to='/tv'>TV</Link>
        <Link to='/music'>Music</Link>
        <Link to='/support'>Support</Link>
        <i className='fas fa-search fa-2x' />
        <i className='fas fa-shopping-bag fa-2x' />
      </nav>
    </header>
  )
}

export default TopNav
