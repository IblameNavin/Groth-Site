import React from 'react'
import HeroImg from "../assets/HeroImg.png"
import ProjectPage from './section1/ProjectPage'
// import CatSkill from "./section1/CatSkill"




const HeroSection = () => {
  return (
    <>
      <div className='relative -mb-12 w-[72%] '>
        <h1 className='text-black -mt-13 pl-13 text-[17rem] font-bold'>Groth</h1>
         <sup className='absolute top-30 right-34 text-3xl font-bold'>TM</sup>
      </div>

       <div className='mb-3 flex justify-between items-center gap-4 w-[70%] ml-3 pl-10 '>
            <p className='text-2xl font-semibold'><span className='font-extrabold'>Groth</span> is an architectural and product design studio specializing in consciously designed environments for businesses, nonprofits, and people.</p>
           <img className='h-[200px] w-[230px] object-cover' src={HeroImg} alt="" />
          </div>
          <ProjectPage/>
          
    </>
  )
}

export default HeroSection
