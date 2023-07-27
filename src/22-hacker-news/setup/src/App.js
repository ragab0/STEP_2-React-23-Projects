import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
import './index.css';
import { AppProvider } from './context';


export default function App() {
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