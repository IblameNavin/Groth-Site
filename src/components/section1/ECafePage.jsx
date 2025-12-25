import React from 'react'
import ErnestoSmthImg from "../../assets/ErnestoSmthImg.png"
import ECafeImg from "../../assets/ECafeImg.png"
import { ArrowRight } from 'lucide-react';

const ECafePage = () => {
  return (
    <>
      <div>
    <div className="flex gap-6 items-center pt-6 ">
      <div className="flex-1 font-semibold pt-30 ">
       <img src= {ErnestoSmthImg} className='h-[250px]' alt="" />
        <h1 className="text-5xl font-bold pt-5">Ernesto's Cafe</h1>
        <p className="mt-4">A more casual, modern take on Basque architectural influences for the daytime space accompanying Ernesto’s.</p>
      </div>
      <div className="flex-1">
        <img src={ECafeImg} alt="Catskills Residence" className="w-full h-auto rounded-lg" />
      </div>
    </div>
    
  <a href="#" className='flex items-center font-bold text-xl mt-4'>View Project <ArrowRight className='ml-1 h-5' /></a>
    <div className='border-gray-500 border-b-2 border-dotted w-full my-14'></div>
    </div>
    </>
  )
}

export default ECafePage
