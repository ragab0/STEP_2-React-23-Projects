import React, { useState } from 'react';
import data from './data';
// import List from './List';
import Person from './person';
import './index.css';


function App() {

  const [myData, setData] = useState(data);
  const persons = myData.map((obj, i) => <Person obj={obj} handleData={setData} key={i}/>);
  
  return (
      <main>
        <section className='container'>
          <h3>{persons.length} birthdays today</h3>
          <div>{persons}</div>
          <button onClick={() => setData(persons.length ? [] : data )}>{persons.length ? "Remove All" : "Fetch again"}</button>
        </section>
      </main>
  )
}

export default App;
