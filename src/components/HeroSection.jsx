import React from 'react'
import HeroImg from "../assets/HeroImg.png"
import ProjectPage from './section1/ProjectPage'

const HeroSection = () => {
  return (
    <>
      <div className='relative -mb-4 lg:mb-12 w-full lg:w-[80%] mt-10' id='home'>
        <h1 className='text-black -mt-6 pl-4 xl:pl-10 text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-bold'>Groth</h1>
        <sup className='absolute top-4 right-50 sm:top-2 sm:right-10 md:right-5 lg:top-10 lg:right-10 xl:right-50 2xl:right-[400px] text-xl sm:text-3xl font-bold'>TM</sup>

        <div className='mb-3 flex flex-col lg:flex-row items-center gap-8 lg:gap-5 w-[90%] lg:w-full ml-3 sm:ml-1 lg:-ml-5 sm:pl-10'>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-2xl xl:ml-10 font-semibold w-full max-w-[700px] lg:min-w-[400px] text-justify'>
            <span className='font-extrabold'>Groth</span> is an architectural and product design studio specializing in consciously designed environments for businesses, nonprofits, and people.
          </p>
          <img className='w-[230px] sm:w-[250px] md:w-[280px] object-cover rounded-lg mt-6 lg:mt-0' src={HeroImg} alt="" />
        </div>
      </div>

      <ProjectPage />
    </>
  )
}

export default HeroSection