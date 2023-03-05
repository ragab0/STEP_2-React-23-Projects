import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'
import './index.css';


function App() {

  const [isDark, setDark] = useState(+window.localStorage.getItem('isDark'));

  useEffect(() => {
    window.document.documentElement.classList = isDark ? 'dark-theme' : 'light-theme';
    window.localStorage.setItem('isDark', +isDark);
  }, [isDark])

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
          <button className='btn' onClick={() => setDark(!isDark)}>Toggle</button>
        </div>
      </nav>
      <section className='articles'>
        {
          data.map(post => {
            return (
              <Article post={post} key={post.id} />
            )
          })
        }
      </section>
    </main>
  )
}

export default App
