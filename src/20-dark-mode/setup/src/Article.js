import React from 'react'

export default function Article({post}) {

  const {title, date, length, snippet} = post

  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{date.toDateString()}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}


