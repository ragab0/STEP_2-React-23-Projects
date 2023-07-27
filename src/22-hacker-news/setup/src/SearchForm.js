import React from 'react'
import { useGlobalContext } from './context'

export default function SearchForm() {

  const {MyState, setMyState, fetchingData} = useGlobalContext();

  function inpHandler(e) {
    setMyState({type: 'HANDLE_SEARCH', value:e.target.value});
  }

  function formHandler(e) {
    e.preventDefault();
    fetchingData();
  }

  return (
    <form className='search-form' onSubmit={formHandler}>
      <h2>search hacker news</h2>
      <input className='form-input' value={MyState.inpVal} onChange={inpHandler} />
      <button style={{padding:'1rem',cursor:'pointer',border:'none',borderBottom:'3px solid'}}>Submit</button>
    </form>
  )
}