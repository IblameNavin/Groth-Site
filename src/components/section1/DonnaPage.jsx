import React from 'react'
import { ArrowRight } from 'lucide-react';
import DonnaSmthImg from "../../assets/DonnaSmthImg.png"
import DonnaImg from "../../assets/DonnaImg.png"



const DonnaPage = () => {
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row gap-6 items-center pt-6 " id='about'>
          <div className="flex-1 font-semibold pt-10 lg:pt-30 ">
            <img src={DonnaSmthImg} className='h-[150px] lg:h-[250px]' alt="" />
            <h1 className="text-3xl lg:text-5xl font-bold pt-5">Donna</h1>
            <p className="mt-4">A new West Village home for a beloved cocktail bar, inspired by forward-thinking art movements of the 20th century that reflect Donna’s groundbreaking co-operative ownership structure.</p>
          </div>
          <div className="flex-1 w-full">
            <img src={DonnaImg} alt="Donna" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        <a href="#" className='flex items-center font-bold text-xl mt-4'>View Project <ArrowRight className='ml-1 h-5' /></a>
        <div className='border-gray-500 border-b-2 border-dotted w-full my-14'></div>
      </div>
    </>
  )
}

export default DonnaPage
