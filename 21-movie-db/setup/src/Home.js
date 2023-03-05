import React from 'react'
import Movies from './Movies'
import { useGlobalContext } from './context'

export default function Home() {

  const {inpVal, setInpVal, error} = useGlobalContext()
  function inpHandler(e) {
    setInpVal(e.target.value);
  }

  return (
    <>
      <form className='search-form'>
        <h2>search movies</h2>
        <input className='form-input' value={inpVal} onChange={inpHandler} placeholder='Batman' />
        {error && <p className='error'>{error}</p>}
      </form>
      <Movies />
    </>

)
}
