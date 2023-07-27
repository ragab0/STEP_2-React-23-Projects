import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {

  const {MyState, setMyState} = useGlobalContext() // MyState, setMyState

  return (
    <div className='btn-container'>
      <button disabled={MyState.page === 1 || MyState.loading || MyState.error} 
              onClick={()=> setMyState({type: 'HANDLE_PAGE', value: '-1'})}>prev</button>
      <p>{MyState.page} Of {MyState.nbPage}</p>
      <button disabled={MyState.page >= MyState.nbPage || MyState.loading || MyState.error} 
              onClick={()=> setMyState({type: 'HANDLE_PAGE', value: '+1'})}>next</button>
    </div>
  )
}

export default Buttons
