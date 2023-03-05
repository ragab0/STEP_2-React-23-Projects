import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'


export default function Navbar() {

  const [isActive, setActive] = useState(false);
  function handler() {
    setActive(!isActive);
  }

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="" className='logo'/>
          <button className='nav-toggle' onClick={handler}>{<FaBars />}</button>
        </div>
        <div className={'links-container' + (isActive ? ' show-container' : '')} >
          <ul className='links'>
            {
              links.map(obj => <li key={obj.id}><a href={obj.url}>{obj.text}</a></li>)
            }
          </ul>
        </div>
        <div className='social-icons'>
          <ul className='social-icons'>
              {
                social.map(obj => <li key={obj.id}><a href={obj.url}>{obj.icon}</a></li>)
              }
            </ul>
        </div>
      </div>
    </nav>
  )
}