import React, { useState } from 'react'
import { produse } from './produse'
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const Catalog = () => {
  const [hoverProdus,setHoverProdus] = useState(null)
  return (
    <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 py-3'>
     
      <div className='flex items-center space-x-3 justify-between max-modf1:flex-col max-modf1:space-y-3'>
        <div className='shrink-0 max-modf1:text-center'>
          <p className='text-[32px] font-bold'>Catalog Echipamente Tech</p>
          <p className='text-text_secundar text-[14px]'>Gaseste produsele potrivite pentru workflow-ul tau.</p>
        </div>
        
        <ul className='flex space-x-3 text-[14px] bg-fundal_card px-3 py-1.5 rounded-xl border border-bordura items-center overflow-x-scroll scrollbar-none select-none '>
          <li className='bg-grad px-3 py-1 rounded-xl cursor-pointer shrink-0'>Toate</li>
          <li className='hover:bg-grad px-3 py-1 rounded-xl cursor-pointer transition-all duration-300 ease-in-out shrink-0'>Cele Mai Vandute</li>
          <li className='hover:bg-grad px-3 py-1 rounded-xl cursor-pointer transition-all duration-300 ease-in-out shrink-0'>Noutati</li>
          <li className='hover:bg-grad px-3 py-1 rounded-xl cursor-pointer transition-all duration-300 ease-in-out shrink-0'>Top Reduceri</li>
        </ul>
        
      </div>

      <ul className='mt-4 grid grid-cols-4  max-modf:grid-cols-2 max-modf4:grid-cols-1 max-modf5:grid-cols-3 gap-3'>
        {
          produse.slice(0,8).map((p)=>{

            return (
              <li key={p.id} className={`bg-fundal_card px-4 py-3 transition-all duration-300 ease-in-out rounded-xl border hover:border-hovr3 hover:scale-102 border-bordura`}
              onMouseEnter={()=>setHoverProdus(p.id)}
              onMouseLeave={()=>setHoverProdus(null)}
              >
                <div className='relative overflow-hidden '>
                  <img className={`w-full h-39 rounded-lg ${hoverProdus===p.id?"scale-110":"scale-100"} transition-all duration-300 select-none ease-in-out`} src={p.img} alt="" />
                  <button className='absolute top-3 right-3 bg-fundal_card px-2 py-2 rounded-full border border-bordura1 cursor-pointer text-text_secundar hover:text-text_principal transition-all duration-300 ease-in-out'>
                    <FaRegHeart/>
                  </button>
                  <div className='absolute top-3 left-3 select-none text-[12px] bg-red-500 font-medium px-2 rounded-xl py-0.5'>
                    <p>{p.reducere}</p>
                  </div>
                  <div className={`absolute flex items-center space-x-1 bottom-3 right-3 bg-fundal_card px-2 py-0.5 rounded-xl border cursor-pointer border-bordura1 hover:text-grad transition-all duration-300 ease-in-out ${hoverProdus===p.id?"max-h-100 opacity-100":"max-h-0 opacity-0"} overflow-hidden`}>
                    <IoEyeOutline/>
                    <p className='text-[12px] select-none'>Vizualizare</p>
                  </div>
                </div>

                <div className='mt-3 flex space-x-1.5 items-center text-[14px]'>
                  <FaStar className='text-yellow-400'/>
                  <p className='font-bold'>{p.rating}</p>
                  <p className='text-text_secundar'>({p.nr_recenzii})</p>
                </div>
                <p className={`${hoverProdus===p.id?"text-grad":"text-text_principal"} select-none cursor-pointer text-[14px] font-bold`}>{p.nume}</p>
                <p className='text-[14px] text-text_secundar line-clamp-2  mt-1'>{p.info}</p>

                <div className='mt-5 flex justify-between items-center'>
                  <div>
                    <p className='text-[14px] text-text_secundar line-through'>{p.pret} LEI</p>
                    <p className='font-bold'>{p.pret_redus} <span className='text-grad text-[13px]'>LEI</span></p>
                  </div>
                  <button className='border border-bordura1 cursor-pointer text-grad bg-butoane/15 hover:bg-grad hover:text-text_principal transition-all duration-300 ease-in-out px-2 py-2 rounded-xl'>
                    <IoBagHandleOutline/>
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
      
    </div>
  )
}

export default Catalog
