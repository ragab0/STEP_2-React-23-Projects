import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loading from './Loading'
import Tour from './Tour';
import Title from './title';
import './index.css';

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);

  function fetchData() {
    setLoad(true)
    try {
      axios.get(url)
      .then(res => {
        console.log(res);
        setData(res.data)
      })
      .catch(why => {
        console.log('why');
      })
      .finally(() => {
        setLoad(false)
      })
    } catch (error) {
      console.log('error');      
    }
  }

  useEffect(() => {
    fetchData()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  const tours = data.map((obj, i) => {
    return <Tour tour={obj} key={obj.id} theKey={obj.id} setData={setData}/>
  })
  
  if (load) {
    return <Loading />
  }

  return (
    <main>
      <div className='title'>
        {<Title state={tours.length} fetchAgain={fetchData} />}
      </div>
      <div className='tours'>{tours}</div>
    </main>
  )
}

export default App
