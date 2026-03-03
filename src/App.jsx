import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SideBar from './components/SideBar'
import Footer from './components/section1/Footer'

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <div className='flex flex-col sm:block w-full'>
                <main className='w-full sm:w-[calc(100%-360px)]'>
                  <HeroSection />
                </main>
                <aside className='w-full sm:w-[360px] sm:fixed sm:top-0 sm:right-0'>
                  <SideBar />
                </aside>
              </div>
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
