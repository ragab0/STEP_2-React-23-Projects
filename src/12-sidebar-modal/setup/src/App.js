import React, { createContext, useState } from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import './index.css';

export const MyContext = createContext();

export default function App() {

  const [isShown, setShown] = useState(false);
  const [isModel, setModel] = useState(false);

  return (
    <>
      <MyContext.Provider value={{isShown, setShown, isModel, setModel}}>
        <Home />
        <Modal />
        <Sidebar />
      </MyContext.Provider>
    </>
  )
}