import React, { useContext } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { MyContext } from './App'

const Sidebar = () => {

  const {setShown, isShown} = useContext(MyContext);
  function closeHandler() {
    setShown(old => !old) // toggle is better than to set it to FALSE :DD;
  }

  function itemGenerator(list) {
    return (
      list.map((item, i) => {
        return (
          <li key={i}>
            <a href={item.url}>{item.icon}{item.text}</a>
          </li>
        )
      })
    )
  }

  return (
    <aside className={'sidebar' + (isShown ? ' show-sidebar' : '')}>
      <div className='sidebar-header'>
        <img src={logo} alt="logo" />
        <button className='close-btn' onClick={closeHandler}>{<FaTimes />}</button>
      </div>
      <ul className='links'>
        {itemGenerator(links)}
      </ul>
      <ul className='social-icons'>
        {itemGenerator(social)}
      </ul>
    </aside>
  )
}

export default Sidebar;