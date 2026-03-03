import React from 'react'
import FooterImg from "../../assets/FooterImg.png"

const Footer = () => {
  return (
    <>
      <div data-footer className='min-h-[200px] bg-[#595546] z-50 relative w-full overflow-hidden' id='contact'>

        <div className='border-b text-amber-50 flex flex-col md:flex-row justify-between items-center h-full'>
          <div className='border-r-0 md:border-r py-5 px-6 lg:px-12 gap-4 w-full md:w-[40%] lg:w-[33.33%] flex text-amber-50 text-sm'>
            <div className='flex'>
              <span className='my-1 inline-block h-[13px] w-[13px] rounded-2xl bg-amber-50'></span>
              <p className='ml-4 font-semibold'> 7:49AM ET <br /> CatSkills <br /> New York</p>
            </div>

            <div className='flex'>
              <span className='ml-4 my-1 inline-block h-[13px] w-[13px] rounded-2xl bg-amber-50'></span>
              <p className='font-semibold ml-4'>1:50PM CET <br /> Barcelona <br /> Spain</p>
            </div>
          </div>
          <ul className='py-4 md:py-0 md:mr-12 flex gap-6 text-white text-sm font-semibold'>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className='flex flex-col md:flex-row justify-between w-full'>
          <div className='flex items-center border-b md:border-b-0 md:border-r px-6 lg:px-10 border-[#4a4639] w-full md:w-[66.66%] text-amber-50 py-6 lg:py-0'>
            <h1 className='text-4xl lg:text-5xl'>Groth</h1>
            <p className='text-xl lg:text-3xl mx-4'>An ARCHITECTURAL <br /> & PRODUCT DESIGN STUDIO</p>
          </div>
          <div className='w-full md:w-[33.33%] text-amber-50 py-6 lg:py-9 flex items-center flex-col'>
            <img src={FooterImg} className='h-24 lg:h-40' alt="" />
            <p className='text-[10px] lg:text-xs mt-2'>&copy; 2025 Groth Design And Research LLC</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer