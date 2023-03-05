import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Review() {
  
  const arandNum = () => Math.floor(Math.random() * people.length);
  const [person, setPerson] = useState(people[0]);

  function handleRandom() {
    setPerson(people[arandNum()])
  }

  function handleNext() {
    setPerson(o => people[(o.id) % (people.length)])
  }

  function handlePrev() {
    setPerson(o => people[(o.id > 1 ? o.id-2 : people.length-1)])
  }

  
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={person.image} alt='' className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{person.name}</h4>
      <p className='job'>{person.job}</p>
      <p className='info'>{person.text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={handleRandom}>Surprise Me</button>
    </article>
  )

};