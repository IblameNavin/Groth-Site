import React from 'react'
import ErnestoImg from "../../assets/ErnestoImg.png"
import ErnestoLaptopImg from "../../assets/ErnestoLaptopImg.png"
import { ArrowRight } from 'lucide-react';

const ErnestosPage = () => {
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row gap-6 items-center pt-6 ">
          <div className="flex-1 font-semibold pt-10 lg:pt-30 ">
            <img src={ErnestoLaptopImg} className='h-[150px] lg:h-[250px]' alt="" />
            <h1 className="text-3xl lg:text-5xl font-bold pt-5">Ernesto's</h1>
            <p className="mt-4">An elevated space channeling art nouveau architecture through a Basque lens, featuring custom lighting throughout.</p>
          </div>
          <div className="flex-1 w-full">
            <img src={ErnestoImg} alt="Ernesto's" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        <a href="#" className='flex items-center font-bold text-xl mt-4'>View Project <ArrowRight className='ml-1 h-5' /></a>
        <div className='border-gray-500 border-b-2 border-dotted w-full my-14'></div>
      </div>
    </>
  )
}

export default ErnestosPage
