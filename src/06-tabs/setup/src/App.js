import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import './index.css';
import Loading from './loading';


export default function App() {
  
  const url = 'https://course-api.com/react-tabs-project';
  const [reLoad, setReLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [items, setItems] = useState([{}]);
  const [current, setCurrent] = useState(0);
  const {title='title', company='company', dates='25 Des', duties=[1,2]} = items[current];

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setItems(res.data)
      setLoading(false)
    })
    .catch(why => {
      setReLoad(true)
      console.log('Error');
    })

  }, [])
  
  if (loading) {
    return <Loading again={reLoad}/>
  }

  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h2>Experince</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {items.map((item, i) => {
              return (
                <button key={i}
                        className={'job-btn' + (i === current ? ' active-btn' : '')}
                        onClick={() => setCurrent(i)}>
                        {item.company}
                </button>
              )
            })}
          </div>
          <div className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            <div className='jobs-desc'>
              {duties.map((e, i) => {
                return (
                  <div key={i} className='job-desc'>
                    <FaAngleDoubleRight className='job-icon' />
                    <p>{e}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <button className='btn'>more info</button>
      </section>
    </main>
  )

}
