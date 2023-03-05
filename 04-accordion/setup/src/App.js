// import React, { useState } from 'react';
import React from 'react';
import data from './data';
import SingleQuestion from './Question';
import './index.css';


export default function App() {

  const articles = data.map(obj => <SingleQuestion question={obj} key={obj.id} />);

  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section className='info'>
          {articles}
        </section>
      </div>
    </main>
  )
}