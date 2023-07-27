import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

function useGlobalContext() {
  return useContext(AppContext)
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'
const AppContext = React.createContext()
const table = {
  sports: 21,
  history: 23,
  politics: 24,
}


function AppProvider({ children }) {
  
  const [data, setData] = useState();
  const [error ,setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formAPI, setFormAPI] = useState({amount: '10', category: table['sports'], difficulty: 'easy'});
  const [currentPoint, setCurrentPoint] = useState(0);

  function fetchingData() {
    setLoading(true);
    setError(false);
    const url = API_ENDPOINT + Object.entries(formAPI).map(([key, val], i) => `${key}=${ table[val] ?? val}`).join('&')
     axios.get(url)
    .then(res => console.log(res.data) ?? res.data.results.length ? setData(res.data.results) : setError(true))
    .finally(() => setLoading(false));
    console.log(url);
  }


  return (
    <AppContext.Provider value={{data, error, formAPI, setFormAPI, loading, setLoading, fetchingData, currentPoint, setCurrentPoint}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider, useGlobalContext}
