import React from 'react'
import Apartment from "../../assets/Apartment.png";

const ApartmentoPage = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6 items-center pt-6 ">
        <div className="flex-1 font-semibold pt-10 lg:pt-30">
          <span className="text-sm font-medium border p-1 rounded bg-white">IN PROGRESS</span>
          <h1 className="text-3xl lg:text-5xl font-bold pt-5">Apartamento <br /> Enric Granados </h1>
          <p className="mt-4">Elevated design meets a young family's dynamic lifestyle in this historic Eixample flat renovation, updated with respect to historic details through a modern lens. Completed fall 2025.</p>
        </div>
        <div className="flex-1 w-full">
          <img src={Apartment} alt="Apartment" className="w-full h-auto rounded-lg" />
        </div>


      </div>

      <div className='border-gray-500 border-b-2 border-dotted w-full my-14'></div>
    </div>
  )
}

export default ApartmentoPage
