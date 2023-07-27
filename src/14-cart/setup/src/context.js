import React, { useContext, useReducer, useState } from 'react'
import cartItems from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems)
  const [loading, setLoading] = useState(true);


  return (
    <AppContext.Provider value={{cart, setCart, loading}}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
