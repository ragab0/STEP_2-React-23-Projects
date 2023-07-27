import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'
// import { the_data } from './data';

// import {
//   SET_LOADING,
//   SET_STORIES,
//   REMOVE_STORY,
//   HANDLE_PAGE,
//   HANDLE_SEARCH,
// } from './actions'


function useGlobalContext() {
  return useContext(AppContext);
}

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';
const initialState = {loading: true, error: false, inpVal: 'React', hits:[], page:1, nbPage:0};
const AppContext = React.createContext();


function AppProvider({ children }) {

  const [MyState, setMyState] = useReducer(reducer, initialState);
  function fetchingData() {
    setMyState({type: 'SET_LOADING', value: true});
    setMyState({type: 'SET_ERROR', value: false});
     axios.get(`${API_ENDPOINT}query=${MyState.inpVal}&page=${MyState.page}`)
    .then(res => setMyState({hits:res.data.hits, page:res.data.page, nbPage:res.data.nbPages}))
    .catch(() => setMyState({type: 'SET_ERROR', value: true}))
    .finally(() => setMyState({type: 'SET_LOADING', value: false}));
  }

  useEffect(() => {
    fetchingData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MyState.page]);


  return (
    <AppContext.Provider value={{MyState, setMyState, fetchingData}}>
      {children}
    </AppContext.Provider>
  )

}

export { AppContext, AppProvider, useGlobalContext };
