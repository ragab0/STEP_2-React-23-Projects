import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



const Question = ({question}) => {

  const [reader, setReader] = useState(false);

  function toggle() {
    setReader(o => !o);
  }

  return (
    <article className='question'>
      <header>
        <h4>{question.title}</h4>
        <button className='btn' onClick={toggle}>
          {reader ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {reader && <p>{question.info}</p>}
    </article>
  )
};

export default Question;
