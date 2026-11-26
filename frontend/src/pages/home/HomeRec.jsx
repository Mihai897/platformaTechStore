import React from 'react'
import { FaStar } from "react-icons/fa";
import { recenzii_site } from '../recenzii_site';

const HomeRec = () => {
  return (
     <div className='bg-fundal_card py-12 border border-bordura my-8'>
        <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6'>
          <div className='text-center'>
            <p className='text-grad text-[14px] font-medium'>EXPERIENTA CLIENTILOR</p>
            <p className='font-bold text-[28px]'>Peste 15.000 De Persoane Ne Recomanda</p>
          </div>
          <ul className='mt-8 grid grid-cols-3 max-modf1:grid-cols-1 gap-3'>
            {
              recenzii_site.map((r)=>(
                <li key={r.id} className='border px-3 py-3 rounded-xl border-bordura shadow-[0px_0px_3px_var(--color-bordura)]'>
                  <ul className='flex space-x-1'>
                    {
                      [1,2,3,4,5].map((star,i)=>(
                        <li key={i}>
                          <FaStar className={`${r.rating<=5 ?"text-yellow-400":"text-text_secundar"}`}/>
                        </li>
                      ))
                    }
                  </ul>
                  <p className='mt-3 text-text_secundar text-[14px] italic'>"{r.text}"</p>
                  <div className='mt-3 flex items-center space-x-3'>
                    <div className='bg-grad/10 border border-bordura1 px-2 py-2 rounded-full font-bold text-grad'>
                      <p>{r.initiale}</p>
                    </div>
                    <div className='text-[14px]'>
                      <p className='font-bold'>{r.nume}</p>
                      <p className='text-text_secundar text-[13px]'>{r.ocupatie}</p>
                    </div>
                  </div>
               </li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default HomeRec
