import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

class TopNav extends React.Component {
  state = {
    isMenuActive: false,
    isDesktop: false
  }

  handleClick = () => {
    this.setState(prevState => {
      return { isMenuActive: !prevState.isMenuActive }
    })
  }

  checkDesktop = () => {
    console.log(window.innerWidth, this.state.isDesktop)
    if (window.innerWidth > 767) {
      return this.setState({ isDesktop: true, isMenuActive: false })
    }
    this.setState({ isDesktop: false })
  }

  componentDidMount () {
    window.addEventListener('resize', this.checkDesktop)
    if (window.innerWidth > 767) {
      return this.setState({ isDesktop: true, isMenuActive: false })
    }
    this.setState({ isDesktop: false })
  }
  renderCollapsedNav = () => {
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
          <i
            onClick={this.handleClick}
            id='hamburger'
            className='fas fa-bars fa-2x'
          />
          <NavLink id='apple-link' to='/'>
            <i id='apple' className='fab fa-apple fa-2x' />
          </NavLink>
          <NavLink to='/mac'>Mac</NavLink>
          <NavLink to='/ipad'>iPad</NavLink>
          <NavLink to='/iphone'>iPhone</NavLink>
          <NavLink to='/watch'>Watch</NavLink>
          <NavLink to='/tv'>TV</NavLink>
          <NavLink to='/music'>Music</NavLink>
          <NavLink to='/support'>Support</NavLink>
          <svg
            id='search'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='44'
            viewBox='0 0 16 44'
          >
            <path
              d='M15.27 28.29l-4.06-4.06a6.113 6.113 0 0 0 1.35-3.83c0-3.39-2.76-6.15-6.15-6.15-3.39 0-6.15 2.76-6.15 6.15s2.76 6.15 6.15 6.15c1.43 0 2.75-.5 3.8-1.33l4.06 4.06 1-.99zM6.4 25.33a4.93 4.93 0 0 1-4.92-4.92c0-2.71 2.2-4.92 4.92-4.92s4.92 2.21 4.92 4.92c.01 2.71-2.2 4.92-4.92 4.92z'
              fill='#fff'
            />
          </svg>
          <svg
            id='bag'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='44'
            viewBox='0 0 14 44'
          >
            <path
              d='M12.5 15h-1.81c-.28-1.86-2.04-3-3.69-3s-3.42 1.14-3.69 3H1.5c-.83 0-1.5.67-1.5 1.5v11c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5zM7 13c1.18 0 2.43.75 2.7 2H4.3c.27-1.25 1.52-2 2.7-2zm6 14.5c0 .28-.22.5-.5.5h-11c-.28 0-.5-.22-.5-.5v-11c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11z'
              fill='#fff'
            />
          </svg>
        </nav>
      </header>
    )
  }
  renderExpandedNav = () => {
    return (
      <header
        id='header-expanded'
        onClick={() => this.setState({ isMenuActive: false })}
      >
        <i
          id='hamburger-expanded'
          onClick={this.handleClick}
          class='fas fa-times fa-2x'
        />
        <nav className='nav-expanded'>
          <NavLink id='apple-NavLink-expanded' to='/'>
            <i id='expanded-apple' className='fab fa-apple fa-2x' />
          </NavLink>
        </nav>
        <div className='expanded-menu'>
          <input
            className='search-input'
            type='text'
            placeholder='Search apple.com'
          />
          <ul>
            <NavLink to='/mac'>Mac</NavLink>
            <NavLink to='/ipad'>iPad</NavLink>
            <NavLink to='/iphone'>iPhone</NavLink>
            <NavLink to='/watch'>Watch</NavLink>
            <NavLink to='/tv'>TV</NavLink>
            <NavLink to='/music'>Music</NavLink>
            <NavLink to='/support'>Support</NavLink>
          </ul>
        </div>
      </header>
    )
  }

  render () {
    const { isMenuActive, isDesktop } = this.state
    return (
      <Fragment>
        {isMenuActive && !isDesktop
          ? this.renderExpandedNav()
          : this.renderCollapsedNav()}
      </Fragment>
    )
  }
}

export default TopNav
