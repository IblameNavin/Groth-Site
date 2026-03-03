import React from 'react'
import CornerImg from "../../assets/CornerImg.png";
import CornerBench from "../../assets/CornerBench.png"
import { ArrowRight } from 'lucide-react';

const ConersPage = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6 items-center pt-6 ">
        <div className="flex-1 font-semibold pt-10 lg:pt-30 ">
          <img src={CornerBench} className='h-[150px] lg:h-[250px]' alt="" />
          <h1 className="text-3xl lg:text-5xl font-bold pt-5">Corners</h1>
          <p className="mt-4">A thoughtful blend of natural materials, modular design, and unexpected repurposed objects come together in a harmonious whole for this unique art and design shop in the Catskills.</p>
        </div>
        <div className="flex-1 w-full">
          <img src={CornerImg} alt="Corners" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      <a href="#" className='flex items-center font-bold text-xl mt-4'>View Project <ArrowRight className='ml-1 h-5' /></a>
      <div className='border-gray-500 border-b-2 border-dotted w-full my-14'></div>
    </div>
  )
}

export default ConersPage
