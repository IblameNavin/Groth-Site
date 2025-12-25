import React from 'react'
import FooterImg from "../../assets/FooterImg.png"

const Footer = () => {
  return (
    <>
      <div data-footer className='min-h-[200px] bg-[#595546] z-50 relative w-screen'>
        
          <div className='border-b text-amber-50 flex justify-between items-center h-full '>
            <div className='border-r py-5 px-12 gap-4 w-[33.33%] flex  text-amber-50 text-sm '>
              <div className='flex'>
                
              <span className='my-1 inline-block h-[13px] w-[13px] rounded-2xl bg-amber-50'></span>
            <p className='ml-4 font-semibold'> 7:49AM ET <br /> CatSkills <br /> New York</p>
              </div>

              <div className='flex'>

            <span className='ml-4  my-1 inline-block h-[13px] w-[13px] rounded-2xl bg-amber-50'></span>
            <p className='font-semibol ml-4'>1:50PM CET <br /> Barcelona <br /> Spain</p>
              </div>
          </div>
          <ul className=' mr-12 flex gap-6 text-white '>
            <li><a href="">Projects</a></li>
            <li><a href="">Research</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
       </div>

     <div className='flex justify-between w-screen'>
        <div className='flex items-center border-r px-10 border w-[60.66%] text-amber-50'>
       <h1 className='text-5xl '>Groth</h1>
       <p className='text-3xl mx-4'>An ARCHITECTURAL <br /> &  PRODUCT DESIGN STUDIO</p>
        </div>
       <div className=' w-[33.33%]  text-amber-50 py-9 flex items-center flex-col'>
        <img src={FooterImg} className='h-40' alt="" />
        & 2025 Groth Design And Research LLC
       </div>
       </div>
      </div>
    </>
  )
}

export default Footer