import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/15-cocktails'>
          <img src={logo} alt='' className='logo'/>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/15-cocktails'>home</Link>
          </li>
          <li>
            <Link to='/15-cocktails/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
