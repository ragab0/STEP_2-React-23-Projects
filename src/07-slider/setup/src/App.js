import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Article from './article';
import data from './data';
import './index.css';


export default function App() {
  
  const [items] = useState(data);
  const [currentNum, setCurrent] = useState(0);
  const [nextNum, prevNum] = [(currentNum+1) % items.length, currentNum > 0 ? (currentNum-1) : items.length-1];
  const [rules] = [{
        [currentNum]: 'activeSlide',
        [nextNum]: 'nextSlide',
        [prevNum]: 'lastSlide',
  }];   // :DD they all starts with [];

  useEffect(() => {
    const s = setInterval(() => {
      setCurrent(nextNum)
      console.log('good');
    }, 5000)

    return function() {
      clearInterval(s) // IT IS A MUST to avoid re-add a new one.. O(n^2);
    }

  }, [nextNum])


  return (
    <section className='section'>
      <div className='title'>
        <h2><span>/</span> Reviews</h2>
      </div>
      <div className='section-center'>
        {items.map((item, i) => <Article item={item} key={i} index={i} rules={rules}/>)}
        <button className='prev' onClick={() => setCurrent(prevNum)}>{<FiChevronLeft />}</button>
        <button className='next' onClick={() => setCurrent(nextNum)}>{<FiChevronRight />}</button>
      </div>
    </section>
  )

}