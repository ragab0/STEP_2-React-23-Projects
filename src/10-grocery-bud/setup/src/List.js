import React from 'react'
import Article from './article'

export default function List({data, setCurrentToBeEdit, setData, setInpVal, setAlert}) {

  function clearHandler() {
    setData(old => [])
    setAlert('clear')
  }

  return (
    <div className='grocery-container'>
      <div className='grocery-list'>
        {
          data.map((obj, i) => {
            return (
              <Article  obj={obj} 
                        key={i}
                        setCurrentToBeEdit={setCurrentToBeEdit}
                        setData={setData}
                        setInpVal={setInpVal}
                        setAlert={setAlert}
                        />
            )
          })
        }
      </div>
      {data.length > 0 && <button className='clear-btn' onClick={clearHandler}>Clear items</button>}
    </div>
  )
}

