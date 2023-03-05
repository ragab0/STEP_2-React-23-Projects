import React from 'react';

const Categories = ({setter, data}) => {

  const buttons = ['all', ...new Set(data.map((d) => d.category))];

  function handler(e) {
    setter(data.filter(item =>
      item.category === e.target.textContent.toLocaleLowerCase()
      || 
      e.target.textContent === 'all'
    ))
  }

  return (
    <div className='btn-container'>
      {
        buttons.map((btn, i) => {
          return (
            <button className='filter-btn' onClick={handler} key={i}>{btn}</button>
          )
        })
      }
    </div>
  )
};

export default Categories;
