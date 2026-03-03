import React from 'react'
import { ArrowRight } from 'lucide-react';
import BalkanImg from "../../assets/BalkanImg.png"
import BalkanSmthImg from "../../assets/BalkanSmthImg.png"


const BalkanSreetPage = () => {
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row gap-6 items-center pt-6 ">
          <div className="flex-1 font-semibold pt-10 lg:pt-30 ">
            <img src={BalkanSmthImg} className='h-[150px] lg:h-[250px]' alt="" />
            <h1 className="text-3xl lg:text-5xl font-bold pt-5">Balkan Street</h1>
            <p className="mt-4">Belgrade nightlife and Yugoslavian-era Brutalist architecture inspire this trend setting West Village fast casual restaurant.</p>
          </div>
          <div className="flex-1 w-full">
            <img src={BalkanImg} alt="Balkan Street" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        <a href="#" className='flex items-center font-bold text-xl mt-4'>View Project <ArrowRight className='ml-1 h-5' /></a>
        <div className='border-gray-500 border-b-2 border-dotted w-full my-14'></div>
      </div>
    </>
  )
}

export default BalkanSreetPage
