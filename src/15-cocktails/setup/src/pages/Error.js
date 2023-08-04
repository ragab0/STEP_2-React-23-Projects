import React from 'react'
import { Link } from 'react-router-dom'

const Error = ({error, fetchAgain}) => {

  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>oops! it's a dead end</h1>
        {
          error ? <button className='btn btn-primary' onClick={() => fetchAgain()}>fetch again</button>
                : <Link to='/15-cocktails' className='btn btn-primary'>back home</Link>
        }
        
      </div>
    </section>
  )
}

export default Error
