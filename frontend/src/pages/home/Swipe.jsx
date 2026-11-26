import React from 'react'
import { IoBagHandleOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Swipe = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6'>
      <div className='bg-fundal_card px-5 py-5 rounded-3xl  '>

        <div className='flex modf:items-center modf:space-x-3 modf:justify-between max-modf:flex-col max-modf:space-y-3'>
          <div className='w-1/2 max-modf:w-full'>
            <div className='flex'>
              <p className='text-[14px] text-grad border px-3 rounded-xl border-bordura1 bg-grad/30'>PRE-ORDER EXCLUSIV</p>
            </div>
            <div className='font-bold py-2 text-[50px] max-modf:text-[43px]'>
              <p>Apex Studio Laptop Pro</p>
            </div>

            <div className='flex items-center space-x-3'>
              <p className='text-[25px] font-medium text-grad'>7.499 LEI</p>
              <button className='flex select-none space-x-1.5 items-center bg-grad px-3 py-2.5 transition-all duration-300 ease-in-out rounded-xl hover:bg-butoane cursor-pointer border border-bordura'>
                <IoBagHandleOutline className='text-[21px]'/>
                <p>Adauga in Cos</p>
              </button>
              <button className='cursor-pointer border border-bordura1 px-3 hover:bg-text_secundar/30 py-2.5 rounded-lg bg-fundal_card transition-all duration-300'>
                <IoEyeOutline className='text-[20px]'/>
              </button>
            </div>
          </div>


          <div className='w-1/2 max-modf:w-full'>
            <img className='w-full h-80 rounded-lg' src='produse/apexprolaptop.avif'/>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-between'>
          <div className='flex space-x-1.5'>
            <button className='bg-grad w-2.5 cursor-pointer h-2.5 rounded-full'></button>
            <button className='bg-text_secundar/30 w-2.5 cursor-pointer h-2.5 rounded-full hover:bg-text_secundar transition-all duration-300 ease-in-out'></button>
            <button className='bg-text_secundar/30 w-2.5 cursor-pointer h-2.5 rounded-full hover:bg-text_secundar transition-all duration-300 ease-in-out'></button>
          </div>

          <div className='flex items-center space-x-3'>
            <button className='cursor-pointer bg-grad/10 px-2.5 py-2.5 rounded-xl border hover:bg-grad transition-all duration-300 ease-in-out border-bordura1 '>
              <IoIosArrowBack/>
            </button>
            <button className='cursor-pointer bg-grad/10 px-2.5 py-2.5 rounded-xl border hover:bg-grad transition-all duration-300 ease-in-out border-bordura1 '>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Swipe
