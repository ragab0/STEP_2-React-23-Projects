import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './index.css';


function App() {

  const [val, setVal] = useState('');

  useEffect(() => {
    setVal(JSON.parse(localStorage.getItem('storedVal')) ?? '# Legend');
  }, [])

  useEffect(() => {
    localStorage.setItem('storedVal', JSON.stringify(val));
  }, [val]);

  function textHandler(e) {
    setVal(e.target.value);
  }

  return (
    <main>
      <section className='markdown'>
        <textarea className='input' onChange={textHandler} value={val} />
        <article className='result'>
          {
            val
            .split('\n')
            .map((line, i) => {
              return (
                <ReactMarkdown key={i}>{line}</ReactMarkdown>
              )
            })
          }
        </article>
      </section>
    </main>
  )
}

export default App
