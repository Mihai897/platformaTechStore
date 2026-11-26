import React, { useState } from 'react'
import { CiLaptop } from "react-icons/ci";
import { LuSmartphone } from "react-icons/lu";
import { LuHeadphones } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { explorareCat } from './exploreCat';

import { Link } from "react-router-dom";

const ExploraCategorii = () => {
  const [moveIcon,setMoveIcon]= useState(null);
  const iconMap = {
    laptop: CiLaptop,
    smartphone: LuSmartphone,
    audio: LuHeadphones,
    gaming: IoGameControllerOutline
  }
  return (
    <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6'>
      <div className='flex space-x-3 items-center justify-between'>
        <div >
          <p className='text-[12.5px] text-grad'>EXPLOREAZA HARDWARE</p>
          <p className='text-[27px] font-bold'>Categorii Principale</p>
        </div>
        <div >
          <p className='text-[12.5px] text-text_secundar'>Tehnologie de ultima generatie organizata intuitiv pentru nevoile tale.</p>
        </div>
      </div>

      <ul className='grid grid-cols-4 gap-3 mt-4 select-none max-modf1:grid-cols-2 max-modf2:grid-cols-1'>
        

        {
          explorareCat.map((cat)=>{
            const Icon = iconMap[cat.icon];
            return (
              <Link to={"categorii-produse"} key={cat.id} className='bg-fundal_card rounded-lg border border-bordura py-6 px-3 text-[14px] text-center hover:scale-102 hover:border-hovr3 overflow-hidden transition-all duration-300 ease-in-out' 
              onMouseEnter={()=>{
                 setMoveIcon(cat.id);
              }}
              onMouseLeave={()=>{
                setMoveIcon(null);
              }}
              >
                <div className='flex '>
                  <div className={`bg-${cat.culoare}/10 mx-auto text-[26px] px-2 py-2 rounded-lg border border-bordura`}>
                    {Icon && <Icon className={`text-${cat.culoare}`}/>}
                  </div>
                </div>

                <p className='font-bold text-[16px] mt-2'>{cat.nume}</p>
                <p className='text-[12.5px] text-text_secundar mt-1'>{cat.nrProduse} Produse active</p>

                <button className={`mt-3 text-${cat.culoare} flex items-center mx-auto cursor-pointer hover:text-${cat.culoare}/70 space-x-1.5 transition-all duration-300 ease-in-out`}>
                  <p>Vezi stoc</p>
                  <FaArrowRightLong className={`${moveIcon===cat.id?"translate-x-2":"translate-x-0"} transition-all duration-300 ease-in-out`}/>
                </button>
              </Link>
            )
          })
        } 


      </ul>
    </div>
  )
}

export default ExploraCategorii
