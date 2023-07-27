import React, { useState, createContext, useRef } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import './index.css';
import data from './data'
import Submenu from './Submenu';
export const MyContext = createContext();


export default function App() {
  
  const [isSub, setSub] = useState(false);
  const [isSide, setSide] = useState(false);
  const [currentState, setCurrentState] = useState({});
  
  return (
    <>
      <MyContext.Provider value={{isSide, setSide, isSub, setSub, data, currentState, setCurrentState}}>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </MyContext.Provider>
    </>
  )
}
