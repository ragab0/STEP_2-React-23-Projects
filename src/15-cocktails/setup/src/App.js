import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

// import components
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/*Error if it is outside of our BroweserRouter :DD; */}
        <Routes>
            <Route path="15-cocktails" element={<Home />} />
            <Route path="15-cocktails/about" element={<About />} />
            <Route path="15-cocktails/cooktail/:id" element={<SingleCocktail />} />
            <Route path="15-cocktails/*" element={<Error />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}