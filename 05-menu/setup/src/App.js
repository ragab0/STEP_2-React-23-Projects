import React, { useState } from 'react';
import Categories from './Categories';
import data from './data';
import Plate from './plate';
import './index.css';


export default function App() {

  const [items, setItems] = useState(data);
  const plates = items.map(item => <Plate ingredients={item} key={item.id}/>);

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories setter={setItems} data={data}/>
        <div className='section-center'>
          {plates}
        </div>
      </section>
    </main>
  );
}