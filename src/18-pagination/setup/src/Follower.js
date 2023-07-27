import React, { useState } from 'react'

export default function Follower({data}){
  
  const [val, setVal] = useState(10);
  const [previewLength] = [Number(val)];
  const [buttonsLength] = [Math.ceil(data.length / previewLength)];
  const [collectionNum, setCollectionNum] = useState(1);

  const articles = data.map(art => {
    let { avatar_url:src, login:head, html_url:href, id } = art;
    return (
      <article className='card' key={id}>
        <img src={src} alt={head} />
        <h4>${head}</h4>
        <a href={href} className='btn'>View profile</a>
      </article>
    )
  })
  
  const buttons = [...Array(buttonsLength)].map((_, i) => {
    return (
      <button className={'page-btn' + (i+1 === Number(collectionNum) ? " active-btn" : "")} // Why the constructor Number!! Shiit :DD;
              key={i}
              data-collection={i+1}
              onClick={btnsHandler}
              >{i+1}</button>
    )
  })

  function btnsHandler(e) {
    setCollectionNum(e.target.dataset.collection)
  }

  
  return (
    <>
      <textarea value={val} onChange={e => setVal(e.target.value > 0 ? e.target.value : 1)} />
      <div className='container' >
        {articles.slice((collectionNum-1)*previewLength, collectionNum*previewLength)}
      </div>
      <div className='btn-container'>
        <button className='prev-btn' onClick={() => setCollectionNum(old => old > 1 ? old-1 : buttons.length)}>prev</button>
        {buttons}
        <button className='next-btn' onClick={() => setCollectionNum(old => old % buttons.length + 1 )}>next</button>
      </div>
    </>
  )
  
}
