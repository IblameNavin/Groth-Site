import React from 'react'
import IslandRetreat from "../../assets/IslandRetreat.png"

const IslandPage = () => {
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row gap-6 items-center pt-6 ">
          <div className="flex-1 font-semibold pt-10 lg:pt-30">
            <span className="text-sm font-medium border p-1 rounded bg-white">IN PROGRESS</span>
            <h1 className="text-3xl lg:text-5xl font-bold pt-5">Chebeague <br />  Island Retreat</h1>
            <p className="mt-4">A reimagining of a 1950s cabin set on a secluded island bay in coastal Maine. Coming spring 2026.</p>
          </div>
          <div className="flex-1 w-full">
            <img src={IslandRetreat} alt="Catskills Residence" className="w-full h-auto rounded-lg" />
          </div>


        </div>

        <div className='border-gray-500 border-b-2 border-dotted w-full my-14'></div>
      </div>
    </>
  )
}

export default IslandPage
