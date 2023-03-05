import React, { useState, useEffect } from 'react'
import './index.css';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'


export default function App() {
  
  const [url] = ['https://randomuser.me/api/'];
  const [load, setLoad] = useState(true);
  const [active, setActive] = useState('name');
  const [current, setCurrent] = useState(url);
  const [counter, setCounter] = useState(0);

  const [data] = [{
    name: {
      buttonImg: <FaUser />,
      name: Object.values(current.name ?? '.').join(' ')
    }, 
    email: {
      buttonImg: <FaEnvelopeOpen />,
      email: current.email ?? '@',
    }, 
    age: {
      buttonImg: <FaCalendarTimes />,
      age: current.dob?.age ?? '00',
    }, 
    street: {
      buttonImg: <FaMap />,
      street: current.location?.street.name ?? '...',
    }, 
    phone: {
      buttonImg: <FaPhone />,
      phone: current.phone ?? '+20',
    }, 
    password: {
      buttonImg: <FaLock />,
      password: current.login?.password ?? '000',
    },
  }];

  function generatorList(obj) {
    return (
      Object
      .entries(obj)
      .map( ([key, { buttonImg }], i) => {
        return (
          <button key={i} 
                  className='icon' 
                  data-label={key}
                  onMouseEnter={hoverHandler}
                  >{buttonImg}
          </button>
        )
      })
    )
  }

  function hoverHandler(e) {
    setActive(e.target.closest('button').dataset.label);
  }

  function randomHandler() {
    setCounter(c => c+1);
    setLoad(true)
  }

  useEffect(() => {
    fetch(url)
    .then(res => {
          res
          .json()
          .then(data => setCurrent(data.results[0]))
    })
    .finally(() => setLoad(false))
    console.log(0);
  }, [url, counter])

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img src={current.picture?.thumbnail} className='user-img' alt='' />
          <p className='user-title'>my {active} is</p>
          <p className='user-value'>{String(data[active][active])}</p>
          <div className='values-list'>
            {
              generatorList(data)
            }
          </div>
          <button className='btn' onClick={randomHandler}>{load ? 'loading...' : 'random user' }</button>
        </div>
      </div>
    </main>
  )
}