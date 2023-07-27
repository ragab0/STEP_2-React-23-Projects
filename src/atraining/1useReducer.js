// CounterOne, Simple reducer;
import React, { useReducer } from "react";

const initialValue = 0;
function reducer(state, action) {
  switch (action) {
    case 'reset':
      return 0;
    case 'increament':
      return state+1;
    case 'decrease':
      return state-1;
      default:
        return 'Unknown';
      }
    }
    
export default function FirstReduce() {
      
  const [counter, dispatch] = useReducer(reducer, initialValue)
    
  return (
    <main>
      <h3>Legend: {counter}</h3>
      <button onClick={() => dispatch('decrease')}>decrease</button>
      <button onClick={() => dispatch('reset')}>reset</button>
      <button onClick={() => dispatch('increament')}>increament</button>
    </main>
  )
}