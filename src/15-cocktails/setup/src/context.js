import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [val, setVal] = useState('');
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [currentSingle, setCurrentSingle] = useState(null)
  // currentSingleCooktail saves the current cook for the best performence O(1) not O(n);


  // from the app number 22 I CAME AGAIN :DD;
  // I'm using the it in a seperated function, to use(fetch) again on any error happens;
  function fetchingData() {
    setLoading(true);
    setError(false);
     axios.get(url + val)
    .then(res => console.log(res.data) || !res.data.drinks.length ? setError(true) : setData(res.data.drinks))
    .catch(err => setError(true) || console.log('Error.. did you know!'))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchingData();
  }, [])

  return (
    <AppContext.Provider value={{val, setVal, data, loading, error, fetchAgain:fetchingData}}>
      {children}
    </AppContext.Provider>
  )

}

function useGlobalContext () {
  return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };
