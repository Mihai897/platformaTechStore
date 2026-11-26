import React from 'react'
import { GoFlame } from "react-icons/go";

const FlashDeals = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 py-8'>
      <div className='bg-linear-to-r from-red-600/19 via-fundal_card/50 to-fundal_card px-3 py-6 rounded-xl flex modf1:space-x-3 modf1:justify-between modf1:items-center border border-red-400/30 max-modf1:space-y-5 max-modf1:flex-col'>
        <div className='space-y-3'>
          <div className='flex'>
            <div className='flex items-center space-x-1.5 text-[12px] text-red-400 bg-red-400/30 px-3 py-0.5 rounded-full border border-red-400/30 tracking-widest'>
              <GoFlame size={14}/>
              <p>FLASH DEALS 24 HOURS</p>
            </div>
          </div>
          <div className='space-y-1.5 '>
            <p className='text-[30px] text-text_principal font-bold max-modf:text-[29px]'>Reduceri de Pana la -40% la Seria CyberStudio</p>
            <p className='text-[14px] modf:w-[85%] text-text_secundar'>Preturi speciale valabile in limita stocului disponibil. Profita acum inainte de expirarea ofertei!</p>
          </div>
        </div>

        <div className='flex items-center space-x-3 max-modf1:justify-center select-none'>
          <div className='text-center border border-bordura1 px-3 py-1.5 rounded-xl'>
            <p className='text-[28px] text-grad font-bold'>08</p>
            <p className='text-[10px] text-text_secundar'>ORE</p>
          </div>
          <p className='text-[24px] text-text_secundar'>:</p>
          <div className='text-center border border-bordura1 px-3 py-1.5 rounded-xl'>
            <p className='text-[28px] text-grad font-bold'>39</p>
            <p className='text-[10px] text-text_secundar'>MINUTE</p>
          </div>
          <p className='text-[24px] text-text_secundar'>:</p>
          <div className='text-center border border-bordura1 px-3 py-1.5 rounded-xl'>
            <p className='text-[28px] text-grad font-bold'>58</p>
            <p className='text-[10px] text-text_secundar'>SECUNDE</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default FlashDeals
