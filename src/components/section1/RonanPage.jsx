import React from 'react'
import RonanImg from "../../assets/RonanImg.png"
import RonanSmthImg from "../../assets/RonanSmthImg.png"
import { ArrowRight } from 'lucide-react';

const RonanPage = () => {
  return (
    <>
      <div>
    <div className="flex gap-6 items-center pt-6 ">
      <div className="flex-1 font-semibold pt-30 ">
       <img src= {RonanSmthImg} className='h-[250px]' alt="" />
        <h1 className="text-5xl font-bold pt-5">Ronan</h1>
        <p className="mt-4">Hollywood elegance and raw forms collide in this pioneering wood-fired pizza destination in the heart of Los Angeles.</p>
      </div>
      <div className="flex-1">
        <img src={RonanImg} alt="Catskills Residence" className="w-full h-auto rounded-lg" />
      </div>
    </div>
    
  <a href="#" className='flex items-center font-bold text-xl mt-4'>View Project <ArrowRight className='ml-1 h-5' /></a>
    <div className='border-gray-500 border-b-2 border-dotted w-full my-14'></div>
    </div>
    </>
  )
}

export default RonanPage
