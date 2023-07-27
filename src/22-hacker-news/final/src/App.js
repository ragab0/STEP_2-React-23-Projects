import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
import { AppProvider } from './context';
import './index.css';

function App() {
  return (
    <>
      <AppProvider>
        <SearchForm />
        <Buttons />
        <Stories />
      </AppProvider>
    </>
  )
}

export default App
