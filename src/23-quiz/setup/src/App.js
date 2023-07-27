import React, { useContext, useState } from 'react'
import { useGlobalContext } from './context'
import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
import Error from './error'


function App() {

  const {loading, error, fetchingData, data } = useGlobalContext();


  if (loading) {return <Loading />};
  // if (error) {return <Error fetchAgain={fetchingData} />};

  return (
    <>
      {data ? <Modal /> : <SetupForm />}
    </>
  )
  
}

export default App
