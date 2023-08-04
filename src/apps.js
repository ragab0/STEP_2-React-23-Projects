import React from 'react'
import "./Apps.css";


export default function Apps({apps}) {
  return (
    <div className="apps">
      {
        apps.map(({name, srcImg, link}, i) => (
          <a key={i} href={link} className="card">
            <figure key={i} className=" bg-gray-100/50 dark:bg-black rounded-md overflow-hidden w-full max-w-[550px] mx-auto  grid grid-rows-[auto,1fr]"> 
              <img alt={name.toLocaleLowerCase()} src={srcImg} className="min-w-full min-h-full object-cover pointer-events-none" />
              <figcaption className="p-4 pb-0">
                <h4>{name}</h4>
              </figcaption>
            </figure>
          </a>
        ))
      }
    </div>
  )
}
