import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <>
      <Routes>
        <Route 
          path='/' 
          element={
            <>

              <Navbar />
              <HeroSection />
            </>
          } 
        />
      </Routes>
    </>
  )
}

export default App
