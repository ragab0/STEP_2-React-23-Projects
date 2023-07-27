import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {

  const {formAPI, setFormAPI, fetchingData} = useGlobalContext();

  function selectGenerator(id, opts) {
    return (
      <select className='form-input' id={id} name={id} onChange={handler} value={formAPI[id]}>
        {opts.map((opt,i) => <option key={i} value={opt}>{opt}</option>)}
      </select>
    )
  }

  function handler(e) {
    setFormAPI(old => ({...old, [e.target.name]: e.target.value}));
  }

  function submitHandler(e) {
    e.preventDefault();
    fetchingData();

  }

  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form' onSubmit={submitHandler}>
          <h2>setup quiz</h2>
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input  className='form-input' type='number' name='amount' onChange={handler} value={formAPI['amount']}/>
          </div>
          <div className='form-control'>
            <label htmlFor='category'>category</label>
            {
              selectGenerator('category', ['sports', 'history', 'politics'])
            }
          </div>
          <div className='form-control'>
            <label htmlFor='difficulty'>select difficulty</label>
            {
              selectGenerator('difficulty', ['easy', 'medium', 'hard'])
            }
          </div>
          <button className='submit-btn'>start</button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
