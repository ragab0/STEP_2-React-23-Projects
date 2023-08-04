import React, { useState, useContext, useEffect } from 'react'
import ERROR_URL from './no_conection.png';

const API_ENDPOINT = `http://www.omdbapi.com/?&apikey=a6643741`;
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [data, setData] = useState([{Poster:ERROR_URL, Title:'Error', Year:null, imdbID:null}]);  
  const [error, setError] = useState(false);
  const [inpVal, setInpVal] = useState('Godfather');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    setError(false);
     fetch(API_ENDPOINT + '&s=' + inpVal)
    .then(res => res.json())
    .then(data => {
      console.log(data); // Rendered on Single-page !! use switch from react-router-dom instead of routes;
      if (data.Error) {
        return setError(data.Error);
      } 
      if (data.totalResults > 10) {
        setError('To many results!');
      }
      setData(data.Search)
    })
    .catch((_) => setError('No conection!'))
    .finally(() => setLoading(false));

  }, [inpVal])

  return (
    <AppContext.Provider 
      value={{data, setData, inpVal, API_ENDPOINT, setInpVal, loading, setLoading, error, setError}}
      >{children}
    </AppContext.Provider>

  )
}

function useGlobalContext() {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext  }
