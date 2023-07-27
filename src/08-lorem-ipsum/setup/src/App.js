import React, { useState } from 'react';
import data from './data';
import './index.css';
// import Alert from './alert';


function App() {
  
  const [value, setValue] = useState(0);
  const [myData, setData] = useState([]);
  
  function formHandler(e) {
    setData(data.slice(0, value > 0 ? value : 0));
    e.preventDefault();
  }
  
  return (
    <section className='section-center'>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <div className='lorem-form'>
        <label htmlFor="amount">Paragraphs:</label>
        <input type='number' name="amount" id="amount" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className='btn' onClick={formHandler}>generate</button>
      </div>
      <article className='lorem-text'>
        {myData.map((e, i) => <p key={i}>{e}</p>)}
      </article>
    </section>
  )
}

export default App;
