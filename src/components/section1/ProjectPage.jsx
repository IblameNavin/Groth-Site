import React from "react";
import CatSkill from "./CatSkill"
import IslandPage from "./IslandPage";
import ApartmentoPage from "./ApartmentoPage";
import CornersPage from "./CornersPage"
import ErnestosPage from "./ErnestosPage"
import DonnaPage from "./DonnaPage"
import RonanPage from "./RonanPage"
import ECafePage from "./ECafePage";
import BalkanStreetPage from "./BalkanSreetPage";
import Footer from "./Footer"






const ProjectPage = () => {
  return (
    <>
      <div className="-z-10 relative w-[72%] pt-8 px-6  bg-[#DFDDC7]  ">
        <div className="grid grid-cols-2 gap-8">
          {/* Left column - Project header */}
          <div>
            <h1 className="text-6xl font-semibold">
              Projects
              <sup className="inline-flex relative -top-4 p-2 items-center justify-center ml-1 text-xs align-super h-4 w-4 border rounded-full">
                9
              </sup>
            </h1>
          </div>
          
          {/* Right column - Description */}
          <div>
            <p className="font-semibold">
              A selection of interior design projects across hospitality,
              residential, and retail, weaving together brand narrative, artisan
              craft, and natural, regenerative material selections.
            </p>
          </div>
        </div>

        <div className="border-b-2 border-dotted border-gray-500 w-full mt-14"></div>

        <div className=" mt-10">
  <CatSkill/>
  <IslandPage/>
  <ApartmentoPage/>
  <CornersPage/>
  <ErnestosPage/>
  <DonnaPage/>
  <RonanPage/>
  <ECafePage/>
  <BalkanStreetPage/>
        

        
</div>

      <div className="mt-10 -mx-6">
    <Footer/>
  </div>
        </div> 
    </>
  );
};

export default ProjectPage