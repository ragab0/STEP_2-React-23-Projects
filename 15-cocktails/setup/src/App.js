import React from 'react'
import { BrowserRouter, Routes, BrowserRouter as Router, Route, Switch  } from 'react-router-dom'

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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cooktail/:id" element={<SingleCocktail />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}