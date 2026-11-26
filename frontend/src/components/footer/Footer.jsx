import React from 'react'
import { GrSettingsOption } from "react-icons/gr";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='bg-fundal_card py-10 border border-bordura'>
      <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 '>
        <ul className='grid grid-cols-3 gap-3 max-modf1:grid-cols-1 max-modf1:gap-y-6'>
          <li>
            <div className='flex items-center space-x-3'>
              <div className='bg-grad px-2 py-2 rounded-xl text-[19px]'>
                <GrSettingsOption/>
              </div>
              <p>TECH<span className='bg-linear-to-r from-grad via-but_hover to-grad 
              bg-clip-text font-bold tracking-widest text-transparent '>STORE</span></p>
            </div>
            <p className='mt-3 text-[15px] text-text_secundar'>Centrul oficial de asistenta tehnica TechStore. Transparenta, garantie extinsa si livrare rapida.</p>
          </li>

          <li className='text-[15px]'>
            <p className='font-bold'>CATEGORII SUPORT</p>
            <div className='flex flex-col space-y-1.5 mt-3 text-text_secundar'>
              <Link  to={"retur"} onClick={()=>{window.scrollTo(0,0)}} className='hover:text-text_principal transition-all duration-300 ease-in-out'>Politica de Retur</Link>
              <Link onClick={()=>{window.scrollTo(0,0)}} to={"garantii-si-servicii"} className='hover:text-text_principal transition-all duration-300 ease-in-out'>Garantii & Servicii Autorizate</Link>
              <Link onClick={()=>{window.scrollTo(0,0)}} className='hover:text-text_principal transition-all duration-300 ease-in-out'>Modalitati de Plata In Rate</Link>
              <Link onClick={()=>{window.scrollTo(0,0)}} className='hover:text-text_principal transition-all duration-300 ease-in-out'>Urmarire AWB Curier</Link>
            </div>
          </li>

          <li className='text-[15px]'>
            <p className='font-bold'>UTILE & ANPC</p>
            <div className='flex flex-col space-y-1.5 mt-3 text-text_secundar'>
              <Link onClick={()=>{window.scrollTo(0,0)}} to={"politica-de-cofidentialitate"} className='hover:text-text_principal transition-all duration-300 ease-in-out'>Politica de Confidentialitate</Link>
              <Link onClick={()=>{window.scrollTo(0,0)}} className='hover:text-text_principal transition-all duration-300 ease-in-out'>Protectia Datelor (GDPR)</Link>
              <Link to={"termeni-si-conditii"} onClick={()=>{window.scrollTo(0,0)}} className='hover:text-text_principal transition-all duration-300 ease-in-out'>Termenii si Conditiile</Link>
              <Link to={"cookies"} onClick={()=>{window.scrollTo(0,0)}} className='hover:text-text_principal transition-all duration-300 ease-in-out'>Politica Cookies</Link>
              
            </div>
          </li>

          
        </ul>
        <p className='mt-10 text-[15px] text-text_secundar modf1:text-center'>© 2026 TechStore România. Toate drepturile rezervate.</p>
      </div>
    </div>
  )
}

export default Footer
