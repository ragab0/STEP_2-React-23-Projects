import React from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
import './index.css';

function App() {

  const {loading, data} = useFetch();
  const [title] = [loading ? 'Loading...' : 'pagination'];

  return (
    <main>
      <div className='section-title'>
        <h1>{title}</h1>
        <div className='underline'></div>
      </div>
      <div className='followers'>
        {!loading && <Follower data={data} />}
      </div>
    </main>
  )
}

export default App
