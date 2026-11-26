import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaRegBookmark } from "react-icons/fa";

import { AiOutlineSave } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoBagHandleOutline, IoEyeOutline } from "react-icons/io5";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { produse } from '../home/produse';
import { FaRegHeart, FaStar } from 'react-icons/fa6';

const Favorite = () => {
  const produseSalvate = produse.length;
  const navigate = useNavigate();
  const [hoverProdus,setHoverProdus] = useState(null);
  return (
    <div >
      <div className='bg-fundal_card'>
        <div className='max-w-screen-2xl mx-auto px-14   max-modf1:px-10  py-10 max-modf2:px-6'>
          <div className='flex items-center space-x-3'>
            <CiHeart className='text-grad text-[39px]'/>
            <p className='font-bold text-[34px]'>Lista mea de Favorite</p>
           
          </div>

           <p className='text-text_secundar text-[15px]'>Salveaza produsele dorite, urmareste modificarile de pret si adauga-le rapid in cos.</p>

           <div className='grid mt-4 grid-cols-4 max-modf5:grid-cols-2 max-modf2:grid-cols-1 gap-3'>
            
            <div className='flex items-center space-x-3 border border-bordura1 bg-fundal_inp px-3 py-3 rounded-xl'>
              <div className='text-[24px] text-grad bg-grad/15 px-3 py-3 rounded-xl border border-bordura1'>
                <FaRegBookmark/>
              </div>
              <div>
                <p className='text-[13px] text-text_secundar'>PRODUSE SALVATE</p>
                <p className='font-bold text-[24px]'>6</p>
              </div>
            </div>


            <div className='flex items-center space-x-3 border border-bordura1 bg-fundal_inp px-3 py-3 rounded-xl'>
              <div className='text-[24px] text-hovr3 bg-hovr3/15 px-3 py-3 rounded-xl border border-bordura1'>
                <AiOutlineSave/>
              </div>
              <div>
                <p className='text-[13px] text-text_secundar'>VALOAREA TOTALA</p>
                <p className='font-bold text-hovr3 text-[24px]'>16.746 LEI</p>
              </div>
            </div>


            <div className='flex items-center space-x-3 border border-bordura1 bg-fundal_inp px-3 py-3 rounded-xl'>
              <div className='text-[24px] text-orange-400 bg-orange-400/15 px-3 py-3 rounded-xl border border-bordura1'>
                <MdOutlineLocalOffer/>
              </div>
              <div>
                <p className='text-[13px] text-text_secundar'>LA REDUCERE</p>
                <p className='font-bold text-[24px]'>3</p>
              </div>
            </div>


            <div className='flex items-center space-x-3 border border-bordura1 bg-fundal_inp px-3 py-3 rounded-xl'>
              <div className='text-[24px] text-hovr1 bg-hovr1/15 px-3 py-3 rounded-xl border border-bordura1'>
                <IoBagHandleOutline/>
              </div>
              <div>
                <p className='text-[13px] text-text_secundar'>PRODUSE IN COS</p>
                <p className='font-bold text-[24px]'>4</p>
              </div>
            </div>
           </div>
        </div>
      </div>

      <div className='max-w-screen-2xl mx-auto px-14   max-modf1:px-10  py-10 max-modf2:px-6'> 
        <p className='text-text_secundar'>Se afiseaza {produseSalvate} produse salvate.</p>

        {
          produseSalvate!==0 &&(
            <ul className={`mt-4 grid grid-cols-4 max-modf5:grid-cols-3 max-modf4:grid-cols-1 max-modf1:grid-cols-2 gap-3`}>
            {
              produse.map((p)=>{
    
                return (
                  <li key={p.id} className={`bg-fundal_card px-4 py-3 transition-all duration-300 ease-in-out rounded-xl border hover:border-hovr3 hover:scale-102  border-bordura `}
                  onMouseEnter={()=>setHoverProdus(p.id)}
                  onMouseLeave={()=>setHoverProdus(null)}
                  >
                    <div className='relative overflow-hidden rounded-lg'>
                      <img className={`w-full h-39 rounded-lg ${hoverProdus===p.id?"scale-110":"scale-100"} transition-all  overflow-hidden duration-300 select-none ease-in-out`} src={p.img} alt="" />
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
                        <p className='text-[12px] text-text_secundar line-through'>{p.pret} LEI</p>
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
          )
        }

        {
        produseSalvate===0 && (
          <div className='mt-6 border border-bordura1 px-3 py-10 text-center bg-fundal_inp rounded-xl'>
            <div className='flex justify-center'>
              <div className=' px-5 py-5 bg-text_secundar/15 rounded-full text-[39px] text-text_secundar border-bordura border'>
                <IoHeartDislikeOutline/>
              </div>
            </div>

            <p className='text-[23px] mt-4 font-bold'>Lista ta de favorite este goala</p>
            <p className='mt-3 text-text_secundar text-[15px] w-[40%] mx-auto'>Nu ai salvat niciun produs momentan. Exploreaza catalogul nostru de produse si adauga preferatele tale aici!</p>

            <div className='flex justify-center mt-5'>
              <button onClick={()=>{navigate("/categorii-produse");
              window.scrollTo(0,0);
              }} className='flex items-center space-x-3 bg-butoane hover:bg-but_hover transition-all duration-300 ease-in-out cursor-pointer rounded-xl font-medium px-3 py-3 text-black '>
                <MdOutlineExplore className='text-[22px]'/>
                <p>Exploreaza Catalogul</p>
              </button>
            </div>
          </div>
          )
        }
      </div>

      
    </div>
  )
}

export default Favorite
