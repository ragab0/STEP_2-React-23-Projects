import React from 'react'
import { useGlobalContext } from './context';



export default function Modal() {

  const {data, currentPointer, setCurrentPoint} = useGlobalContext();
  const {question, } = data[currentPointer];

  return (
    <article>
      <div className='modal-container'>
        <div className='modal-content'>
          <h2>congrats!</h2>
          <p>You answered {}% of questions correctly</p>
        </div>
      </div> 
    <section className='quiz'>
      <p className='correct-answers'>correct answers : {}/{}</p>
      <article className='container'>
        <h2></h2>
        <div className='btn-container'>
          {}
        </div>
      </article>
      <button className='next-question'>next question</button>
    </section>
  </article>
  )
}