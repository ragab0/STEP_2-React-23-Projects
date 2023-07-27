import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { MyContext } from './App';


export default function Sidebar() {

  const {data, isSide, setSide} = useContext(MyContext);
  function closeHandler() {
    setSide(false);
  }

  return (
    <div className={'sidebar-wrapper' + (isSide ? ' show' : '')}>
      <aside className='sidebar'>
        <button className='close-btn'>{<FaTimes onClick={closeHandler} />}</button>
        <div className='sidebar-links'>
          {
            data.map((art, i) => {
              return (
                <article key={i}>
                  <h4>{art.page}</h4>
                  <div className='sidebar-sublinks'>
                    {art.links.map((link, j) => {
                      return (
                        <a key={j} href={link.url}>{link.icon}{link.label}</a>
                      )
                    })}
                  </div>
                </article>
              )
            })
          }
        </div>
    </aside>
    </div>
  )
  
}


