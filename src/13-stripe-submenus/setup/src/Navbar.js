import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { MyContext } from './App'


export default function Navbar() {

  const {data, setSide, setCurrentState} = useContext(MyContext);

  function toggleHandler(e) {
    setSide(old => !old);
  }

  function enterHandler(e, nav) {
    setCurrentState(old => ({...old, nav, isNavOpend: true}));
    console.log((document.documentElement.offsetWidth) / 2);
  }

  function leaveHandler(e) {
    setCurrentState(old => ({...old, isNavOpend: false}));
  }

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img className='nav-logo' src={logo} alt='logo' />
          <button className='btn toggle-btn' onClick={toggleHandler}>{<FaBars />}</button>
        </div>
        <ul className='nav-links'>
          {
            data.map((art, i) => {
              return (
                <li key={i}>
                  <button className='link-btn' onMouseLeave={leaveHandler} onMouseEnter={(e) => enterHandler(e, art)}>{art.page}</button>
                </li>
              )
            })
          }
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )

}


