import React, { useState } from 'react'
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const [limba,setLimba] = useState(false);
  return (
    <div className='text-[12.5px] max-modf2:text-[8px]  bg-linear-to-r from-fundal_principal via-grad to-fundal_principal '>
      <div className='max-w-screen-2xl mx-auto px-10 py-2 flex space-x-3 max-modf1:flex-col justify-between items-center max-modf1:px-6 max-modf2:px-4'>
        <p>Transport GRATUIT la comenzi peste 300 LEI | Cod reducere: <span className='text-butoane font-medium'>TECH10</span></p>
        <div className='flex space-x-3'>
          <div className={`relative `}>
            <button onClick={()=>setLimba(!limba)} className={`flex ${limba?"bg-fundal_card border-grad/30  text-butoane rounded-t-sm":"bg-transparent border-none"}  cursor-pointer items-center space-x-1.5 transition-all duration-300 ease-in-out hover:text-butoane px-0.5`}>
              <CiGlobe/>
              <p className='font-medium'>RO (LEI)</p>
              {limba ? <IoIosArrowUp/>:<IoIosArrowDown/>}
            </button>
            <ul className={`absolute bg-fundal_card border border-grad/30 z-100  w-full ${limba ? "max-h-30 opacity-100 rounded-b-sm":"max-h-0 opacity-0"} transition-all duration-300 ease-in-out overflow-hidden select-none`}>
              {
                ["RO (LEI)", "EN (EUR)"].map((limb,i)=>(
                  <li className='py-1 w-full px-1.5 hover:text-butoane cursor-pointer text-center transition-all duration-300 ease-in-out' key={i}>{limb}</li>
                  )  
                )
              }
            </ul>
          </div>
          <button onClick={()=>{navigate("centru-ajutor")}} className='cursor-pointer hover:text-butoane transition-all duration-300 ease-in-out select-none'>Suport 24/7</button>
          <button className='cursor-pointer hover:text-butoane transition-all duration-300 ease-in-out select-none'>Urmareste Comanda</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
