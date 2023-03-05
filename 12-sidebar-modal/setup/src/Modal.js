import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { MyContext } from './App'

const Modal = () => {

  const {isModel, setModel} = useContext(MyContext);

  function closeHandler() {
    setModel(old => !old);
  }

  return (
    <div className={'modal-overlay' + (isModel ? " show-modal" : "")}>
      <div className='modal-container'>
        <h3>Modal content</h3>
        <button className='close-modal-btn' onClick={closeHandler}>{<FaTimes />}</button>
      </div>
    </div>
  )
}

export default Modal
