import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { produse } from '../home/produse';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { categorii_produse } from '../home/categorii_produse';
const OferteFlash = () => {
  const [hoverProdus,setHoverProdus] = useState(null);
  const [showCategorie,setShowCategorie] = useState(null);
  const [showSort,setShowSort] = useState(false);
  return (
    <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6'>
      <div className='py-4 border-b border-b-bordura flex modf:space-x-15 max-modf:space-y-1.5 modf:justify-between max-modf:flex-col modf:items-center text-[14px]'>
        
        <ul className='flex space-x-3 items-center overflow-x-auto max-modf4:scrollbar-none  scrollbar-thin py-3'>
          <li onClick={()=>{setShowCategorie(null)}} className={`border px-3 py-1.5 rounded-xl border-bordura1  transition-all duration-200 ease-in-out select-none cursor-pointer shrink-0 ${showCategorie===null? "bg-grad":"bg-fundal_card hover:bg-text_secundar/25"}`}>
            <p>Toate Categoriile (12)</p>
          </li>
          {
            categorii_produse.map((c)=>(
              <li onClick={()=>{setShowCategorie(c.id_categorie)}} key={c.id_categorie} className={`border select-none px-3 py-1.5 rounded-xl  border-bordura1 ${showCategorie===c.id_categorie? "bg-grad":"bg-fundal_card hover:bg-text_secundar/25"}  transition-all duration-200 ease-in-out cursor-pointer shrink-0`}>
                <p>{c.nume_categorie}</p>
              </li>
            ))
          }
          
           
        </ul>
        <div className='flex items-center space-x-3 shrink-0'>
          <p>Sorteaza dupa: </p>
          <div className='relative select-none'>
            <button onClick={()=>{setShowSort(!showSort)}} className={`flex items-center space-x-3 relative border px-3 py-1.5  bg-fundal_card border-bordura1 hover:bg-text_secundar/25 transition-all duration-200 ease-in-out cursor-pointer ${showSort?"rounded-t-xl":"rounded-xl"}`}>
              <p>Cel mai mare discount (%)</p>
              {showSort?<IoIosArrowUp />:<IoIosArrowDown />}
            </button>
            <ul className={`absolute w-full z-100 bg-fundal_card space-y-1 rounded-b-xl overflow-hidden ${showSort?"max-h-100 opacity-100":"max-h-0 opacity-0"} transition-all duration-500 ease-in-out`}>
              {
                ["Cel mai mare discount (%)","Pret: Crescator", "Pret: Descrescator","Stoc aproape epuizat"].map((sort,i)=>(
                  <li key={i} className='py-1 px-3 hover:bg-text_secundar/25 transition-all duration-200 ease-in-out cursor-pointer'>
                    {sort}
                  </li>
                ))
              }
            </ul>
          </div>

        </div>
      </div>
      <ul className='my-8 grid grid-cols-4  max-modf:grid-cols-2 max-modf4:grid-cols-1 max-modf5:grid-cols-3 gap-3'>
        {
          produse.map((p)=>{

            return (
              <li key={p.id} className={`bg-fundal_card px-4 py-3 transition-all duration-300 ease-in-out rounded-xl border hover:border-hovr3 hover:scale-102 ${p.categorie_id === showCategorie || showCategorie === null ? "block": "hidden"} border-bordura`}
              onMouseEnter={()=>setHoverProdus(p.id)}
              onMouseLeave={()=>setHoverProdus(null)}
              >
                <div className='relative overflow-hidden '>
                  <img className={`w-full h-39 rounded-lg select-none ${hoverProdus===p.id?"scale-110":"scale-100"} transition-all duration-300 ease-in-out`} src={p.img} alt="" />
                  <button className='absolute top-3 right-3 bg-fundal_card px-2 py-2 rounded-full border border-bordura1 cursor-pointer text-text_secundar hover:text-text_principal transition-all duration-300 ease-in-out'>
                    <FaRegHeart/>
                  </button>
                  <div className='absolute top-3 left-3 text-[12px] select-none bg-red-500 font-medium px-2 rounded-xl py-0.5'>
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
                <p className={`${hoverProdus===p.id?"text-grad":"text-text_principal"} cursor-pointer text-[14px] select-none font-bold`}>{p.nume}</p>
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

export default OferteFlash
