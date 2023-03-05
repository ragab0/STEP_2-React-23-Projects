import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

export default function App() {

  const [inpVal, setInpVal] = useState('');

  function inpHandler(e) {
    setInpVal(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()

  }

  return (
    <>  
      <section className='container'>
        <h3>color generator</h3>
        <form>
          <input placeholder='#f15025' value={inpVal} onChange={inpHandler} />
          <button className='btn' onClick={submitHandler}>Submit</button>
        </form>
      </section>
      <section className='colors'>
        <SingleColor />
      </section>
    </>
  )
  
}