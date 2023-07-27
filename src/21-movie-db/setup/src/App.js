import React from 'react'
import { Switch, BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'
import Error from './error'

function App() {
  return (
    <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:id' element={<Movie />} />
          <Route path='*' element={<Error />} />
        </Routes>
    </main>
  )
}

export default App
