import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
const SearchFilterButton = () => {
  return (
   <>
    <div className="searchSection flex gap-5">
              <div className="searchBar1 w-[200px] h-[40px] bg-white rounded-full flex justify-between items-center px-4 ">
            
                  <div>
                    <p className="font-bold">Select Generas</p>
                  </div>
                  <div className="flex items-center justify-between">
                   <span className="text-xl font-bold">|</span>
                   <span>
                    <TiArrowSortedDown className="text-2xl"/>
                   </span>
                  </div>
                
              </div>

              <div className="searchBar2 w-[200px] h-[40px] bg-white rounded-full flex justify-between items-center px-4 ">
            
                  <div>
                    <p className="font-bold">Sort By</p>
                  </div>
                  <div className="flex items-center justify-between">
                   <span className="text-xl font-bold">|</span>
                   <span>
                    <TiArrowSortedDown className="text-2xl"/>
                   </span>
                  </div>
                
              </div>
            </div>
   </>
  )
}

export default SearchFilterButton
