import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { MyContext } from './App'

const Home = () => {
  const {setShown, setModel} = useContext(MyContext); 
  function sideHandler() {
    setShown(old => !old);
  }
  function modelHandler() {
    setModel(old => !old);
  }

  return (
    <main>
      <button className='sidebar-toggle' onClick={sideHandler}>{<FaBars />}</button>
      <button className='btn' onClick={modelHandler}>Modal</button>
    </main>
  )
}

export default Home
