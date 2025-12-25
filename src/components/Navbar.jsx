import React from 'react'


import SideBar from './SideBar';

const Navbar = () => {

  return (
    <>
      <div className='flex justify-between items-center pr-[450px] h-[70px] border w-screen'>
        <div className='ml-4 border-r p-3 h-full flex items-center '>
          <h2 className='text-[17px] pr-12'>AN ARCHITECTURAL <br />& PRODUCT DESIGN STUDIO</h2>
        </div>  
        <div className='text-[9px] flex items-center gap-8 font-semibold p-3 border-r h-full'>
          <p>5:21 ET <br />CATSKILLS <br />NEW YORK</p>
          <p className='pr-6'>11:22AM CET <br />CATSKILLS <br />BARCELONA SPAIN</p>   
        </div>
        <div className=''>
          <ul className='flex items-center justify-center gap-4 text-[14px] font-semibold p-3 '>
            <li><a href="">Projects</a></li>
            <li><a href="">Research</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>

     

      <SideBar/>
      
    </>
  )
}

export default Navbar