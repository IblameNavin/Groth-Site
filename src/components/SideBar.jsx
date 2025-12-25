import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react';
import Try from '../assets/Try.png';
import boyImg from '../assets/boyImg.png'
import CastleImg from '../assets/CastleImg.png'

const SideBar = () => {
  const sidebarRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('100vh');

  useEffect(() => {
    const updateMaxHeight = () => {
      if (!sidebarRef.current) return;
      
      const footer = document.querySelector('[data-footer]');
      if (!footer) {
        setMaxHeight('100vh');
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // If footer is visible in viewport (top edge is above bottom of viewport),
      // limit sidebar height to stop before footer
      if (footerRect.top < viewportHeight && footerRect.top > 0) {
        // Limit sidebar to stop at footer's top position
        setMaxHeight(`${footerRect.top}px`);
      } else {
        // Footer is not in viewport, sidebar can be full height
        setMaxHeight('100vh');
      }
    };

    // Initial calculation with small delay to ensure footer is rendered
    const initialTimeout = setTimeout(() => {
      updateMaxHeight();
    }, 100);
    
    // Update on scroll and resize
    window.addEventListener('scroll', updateMaxHeight, { passive: true });
    window.addEventListener('resize', updateMaxHeight);

    // Use MutationObserver to detect when footer is added/removed
    const observer = new MutationObserver(updateMaxHeight);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(initialTimeout);
      window.removeEventListener('scroll', updateMaxHeight);
      window.removeEventListener('resize', updateMaxHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        ref={sidebarRef}
        className='bg-[#BF551A] w-[360px] top-0 right-0  overflow-y-auto fixed z-40 '
        style={{ height: maxHeight }}
      >
        <div className='flex flex-col items-center p-8 text-[25px] w-full'>
          <div className='flex items-center gap-4'>
            <div className='h-6 w-6 rounded-sm bg-gray-950 '></div>
            <h1>Research And Design</h1>
          </div>

          {/* <div className='h-[260px] w-[260px] mt-6 overflow-hidden'> */}
            <img className='mt-5 h-[260px] w-[260px] bg-[#C3A392] object-cover filter sepia brightness-70 rounded-lg' src={Try} alt="" />
          {/* </div> */}
          <div className='mt-5 w-[260px]'>
            <p className='text-sm font-bold'>Mycelium and Cork Composite Material Development in Catalonia</p>
            <p className='text-[12px] mt-2 text-left font-semibold'>Exploring the acoustic properties and construction possibilities of upcycled cork waste, hemp hurd, and mycelium.</p>
            <a className='flex mt-3 text-sm font-semibold relative pb-1 transition-all duration-300 
                  border-b border-transparent hover:border-black w-fit ' href="#">View Project <ArrowRight className='ml-1 h-5' /></a>
          </div>

          {/* <div className='mt-6 h-[260px] w-[260px] overflow-hidden'> */}
            <img className='mt-5 h-[260px] w-[260px] bg-[#C3A392] object-cover filter sepia brightness-70 rounded-lg' src={boyImg} alt="" />
          {/* </div> */}
          <div className='mt-5 w-[260px]'>
            <p className='text-sm font-bold'>Designing a Skatepark from Recovered Ocean Plastic in Havana</p>
            <p className='text-[12px] mt-2 text-left font-semibold'>A concept proposal for utilizing plastic pollution recovered from beaches in Cuba to build a community skate park.</p>
            <a className='flex mt-3 text-sm font-semibold relative pb-1 transition-all duration-300 
                  border-b border-transparent hover:border-black w-fit ' href="#">View Project <ArrowRight className='ml-1 h-5' /></a>
          </div>

           {/* <div className='mt-6 h-[260px] w-[260px] overflow-hidden'> */}
            <img className='mt-5 h-[260px] w-[260px] bg-[#C3A392] object-cover filter sepia brightness-70 rounded-lg' src={CastleImg} alt="" />
          {/* </div> */}
          <div className='mt-5 w-[260px]'>
            <p className='text-sm font-bold'>Structural Bentwood Observation Tower in Barcelona</p>
            <p className='text-[12px] mt-2 text-left font-semibold'>Research project exploring the possibilities of glue-less dowel lamination to achieve complex curved geometries while maintaining material integrity.</p>
            <a className='flex mt-3 text-sm font-semibold relative pb-1 transition-all duration-300 
                  border-b border-transparent hover:border-black w-fit ' href="#">View Project <ArrowRight className='ml-1 h-5' /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
