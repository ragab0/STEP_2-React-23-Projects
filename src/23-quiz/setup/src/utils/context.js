import React, { useContext, useReducer } from 'react'
import Reducer, { initState } from './reducer';

const AppContext = React.createContext();


function AppProvider({ children }) {
  const [appState, appDispatch] = useReducer(Reducer, initState);
  return (
    <AppContext.Provider value={{appState, appDispatch}}>
      {children}
    </AppContext.Provider>
  )
}

function useGlobalContext() {
  return useContext(AppContext);
}


export { useGlobalContext, AppProvider };
