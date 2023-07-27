// CounterOne, Complex(reducer): Complex State & Complex Action LIKE IN REDUX;
import React, { useReducer } from "react";

// NOT a good way when you merge the two states(Duplicate code)
// THE best is to use multiple useReducer that returns another counter\despatch dependenies of the first;
const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return {...state, firstCounter: 0};
    case 'increament':
      return {...state, firstCounter: state.firstCounter+1};
    case 'decrease':
      return {...state, firstCounter: state.firstCounter-1};
    case 'increament2':
      return {...state, secondCounter: state.secondCounter+(action.by)};
    case 'decrease2':
      return {...state, secondCounter: state.secondCounter-(action.by)};
    case 'reset2':
      return {...state, secondCounter: 0};
    default:
      return initialState;
    // What if you have 3,4,... !!! use multiple reducer to avoid duplicate code;
  }
}
    
    
export default function SecondReducer() {
      
  const [counter, dispatch] = useReducer(reducer, initialState)
    
  return (
    <main>
      <div>
        <h3>Legend: {counter.firstCounter}</h3>
        <button onClick={() => dispatch({type: 'decrease'})}>decrease</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset</button>
        <button onClick={() => dispatch({type: 'increament'})}>increament</button>
      </div>
      <div>
        <h3>Legend: {counter.secondCounter} BY(5)</h3>
        <button onClick={() => dispatch({type: 'decrease2', by: 5})}>decrease BY 5</button>
        <button onClick={() => dispatch({type: 'reset2'})}>reset</button>
        <button onClick={() => dispatch({type: 'increament2', by: 5})}>increament BY 5</button>
      </div>
    </main>
  )
}