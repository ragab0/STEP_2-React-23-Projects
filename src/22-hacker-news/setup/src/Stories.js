import React from 'react'


import { useGlobalContext } from './context'
import Error from './error';

const Stories = () => {
  
  const {MyState, setMyState, fetchingData} = useGlobalContext();
  
  function removeHandler(e, id) {
    setMyState({type: 'SET_STORIES', value: MyState.hits.filter(hit => hit.objectID !== id )})
  }
  
  if (MyState.loading) {return <div className="loading" />};
  if (MyState.error) {return <Error fetchAgain={fetchingData} />};
  
  return (
    <section className='stories'>
      {
        MyState.hits.map((hit, i) => {
          const {title, points, author, num_comments, url, objectID} = hit;
          return (
            <article className='story' key={i}>
              <h4 className='title'>{title}</h4>
              <p className='info'>
                {points} by <span>{author} | </span>{num_comments} comments
              </p>
              <div>
                <a className='read-link' href={url} target='_blank' rel='noopener noreferrer'>read more</a>
                <button className='remove-btn' onClick={(e) => removeHandler(e, objectID)}>remove</button>
              </div>
            </article>
          )
        })
      }
    </section>
  )
}

export default Stories
