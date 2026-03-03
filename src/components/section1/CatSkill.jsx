import React from 'react'
import INPROGRESS from "../../assets/INPROGRESS.png";

const CatSkill = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6 items-center pt-6 ">
        <div className="flex-1 font-semibold pt-10 lg:pt-28">
          <span className="text-sm font-medium border p-1 rounded bg-white">IN PROGRESS</span>
          <h1 className="text-3xl lg:text-5xl font-bold pt-5">Catskills <br /> Residence</h1>
          <p className="mt-4">An 1880s farmhouse thoughtfully transformed into a design-forward, energy-efficient, and restorative creative retreat in the heart of the Catskills, featuring custom built-ins and healthy materials. Launching spring 2026.</p>
        </div>
        <div className="flex-1 w-full">
          <img src={INPROGRESS} alt="Catskills Residence" className="w-full h-auto rounded-lg" />
        </div>
      </div>




      <div className='border-gray-500 border-b-2 border-dotted w-full my-14'></div>

    </div>
  )
}

export default CatSkill
