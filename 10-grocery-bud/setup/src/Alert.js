// import React, { useEffect } from 'react'
import React, { useEffect } from "react"

const Alert = ({alert, setAlert}) => {
// 
  const actions = {
    adding: {
      text: 'Item Added To The List',
      class: 'alert-success',
    },
    removing: {
      text: 'Value is removed',
      class: 'alert-danger',
    },
    editing: {
      text: 'Value Changed',
      class: 'alert-success',
    },
    failled: {
      text: 'Please Enter a Value',
      class: 'alert-danger',
    },
    clear: {
      text: 'List is empty!',
      class: 'alert-danger',
    }
  };

  useEffect(() => {
    const t = setTimeout(() => {
      console.log('got it!');
      setAlert(null);
    }, 3000)
    return () => {
      clearTimeout(t);
    }
  })


  const action = actions[alert];
  return <p  className={`alert ${action.class}`}>{action.text}</p>
}

export default Alert
