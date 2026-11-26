import React from 'react'
import { IoFlashOutline } from "react-icons/io5";
import { IoReloadOutline } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuHeadphones } from "react-icons/lu";

const InfoSite = () => {
  return (
    <div className='bg-fundal_card py-3 my-10 '>
      <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 grid grid-cols-4 gap-3 text-[14px] max-modf:grid-cols-2 max-modf4:grid-cols-1 '>

        <div className='flex space-x-3 max-modf4: items-center '>
          <div className='text-[22px] text-grad border border-bordura1 bg-fundal_inp px-2.5 py-2.5 rounded-xl'>
            <IoFlashOutline/>
          </div>
          <div>
            <p className='font-bold'>Livrari Rapide</p>
            <p className='text-text_secundar text-[13px]'>Expediere in 24 de ore in toata tara</p>
          </div>
        </div>
        <div className='flex space-x-3 items-center '>
          <div className='text-[22px] text-grad border border-bordura1 bg-fundal_inp px-2.5 py-2.5 rounded-xl'>
            <IoReloadOutline className='scale-x-[-1]'/>
          </div>
          <div>
            <p className='font-bold'>30 Zile Retur Gratuit</p>
            <p className='text-text_secundar text-[13px]'>Fara intrebari suplimentare</p>
          </div>
        </div>
        <div className='flex space-x-3 items-center '>
          <div className='text-[22px] text-grad border border-bordura1 bg-fundal_inp px-2.5 py-2.5 rounded-xl'>
            <IoShieldCheckmarkOutline/>
          </div>
          <div>
            <p className='font-bold'>Garantie Oficiala</p>
            <p className='text-text_secundar text-[13px]'>Minimum 2 ani garantie extinsa</p>
          </div>
        </div>
        <div className='flex space-x-3 items-center '>
          <div className='text-[22px] text-grad border border-bordura1 bg-fundal_inp px-2.5 py-2.5 rounded-xl'>
            <LuHeadphones/>
          </div>
          <div>
            <p className='font-bold'>Suport Tehnic 24/7</p>
            <p className='text-text_secundar text-[13px]'>Asistenta specializata live</p>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default InfoSite
