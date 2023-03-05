import React, { useState } from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import Loading from './loading'


export default function App() {

  // const {loading} = useGlobalContext();
  // if (loading) return <Loading />;
  // I use local data not online API SO i can not use loading(fetch, axios).
  // IT IS useReducer NOT useEffect, + I don't have internet for now :DD;

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}