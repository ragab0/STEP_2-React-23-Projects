import React, { useState, useEffect, useContext } from 'react'
import { MyContext } from './App'


export default function Submenu() {
  
  const [showSub, setShowSub] = useState(false);
  const {currentState, setCurrentState} = useContext(MyContext);

  useEffect(() => {
    setShowSub(currentState.isNavOpend || currentState.isSubOpened);
  }, [currentState])
  
  function enterHandler() {
    setCurrentState(old => ({...old, isSubOpened: true}))
  }

  function leaveHandler() {
    setCurrentState(old => ({...old, isSubOpened: false}))
  }

  if (!currentState.nav) {
    return;
  }

  const {page, links} = currentState.nav

  return (
    <aside className={'submenu' + (showSub ? ' show' : '12')} onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center col-${links.length}`}>
        {
          currentState.nav.links.map((link, i) => {
            return (
              <a key={i} href={page}>{link.icon}{link.label}</a>
            )
          })
        }
        </div>
      </section>
    </aside>
  )
}