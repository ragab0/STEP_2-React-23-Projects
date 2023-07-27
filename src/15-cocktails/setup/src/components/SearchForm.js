import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const {val, setVal, fetchAgain} = useGlobalContext();

  function formHandler(e) {
    e.preventDefault();
    fetchAgain();
  }

  return (
      <form className='search-form' onSubmit={formHandler}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input name='name' id='name' value={val} onChange={(e) => setVal(e.target.value)} />
        </div>
      </form>
  )
}

export default SearchForm
