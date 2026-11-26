import React, { useState } from 'react'
import { GrSettingsOption } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from 'react-icons/io';
import { BsHandbag } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { navbar } from './navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";

import { IoIosLaptop } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoHeadset } from "react-icons/io5";
import { categoriiNav } from './categorii_navb';
import { CiDeliveryTruck } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { categorii_produse } from '../../pages/home/categorii_produse';

const Navbar = () => {
  const iconMap = {
    home: AiOutlineHome,
    laptop: IoIosLaptop,
    telefon: IoPhonePortraitOutline,
    audio: IoHeadset
  }
  const [showCategories,setShowCategories] = useState(false);
  const [showLog,setShowLog] = useState(false);
  const [showNav,setShowNav] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='border-b border-b-bordura'>
      <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6'>
        
        <div className='flex space-x-3 justify-between items-center'>
          
          <div className='flex py-5 items-center space-x-3'>
            <div className='w-9 h-9 flex items-center justify-center bg-grad rounded-lg'>
              <GrSettingsOption size={22}/>
            </div>
            <div className='leading-3.5'>
              <p className='font-bold tracking-widest'>Tech<span className='bg-linear-to-r from-grad via-but_hover text-[18px] max-modf2:text-[16px] to-grad bg-clip-text text-transparent'>Store</span></p>
              <p className='text-[10px] max-modf2:text-[8px] text-text_secundar'>NEXT-GEN TECH</p>
            </div>
          </div>

          <div className=' w-[55%] relative max-modf1:hidden'>
            <input className=' 
            focus:ring-2 focus:ring-grad
            w-full outline-none bg-fundal_inp outline-0 border border-bordura py-1.5 rounded-lg pl-10 text-[14px] pr-3 transition-all duration-200 ease-in-out placeholder-text_placeholder' type="text" placeholder='Cauta laptopuri, smartphone-uri, monitoare...' name="" id="" />
            <CiSearch className='absolute text-text_secundar text-[19px] top-1/2 -translate-y-1/2 ml-3'/>
            
          </div>

          <div className='flex space-x-8 max-modf2:space-x-4 max-modf1:space-x-6 items-center'>
            <button onClick={()=>navigate("/favorite")} className='relative max-modf2:hidden'>
              <CiHeart className='text-[24px] cursor-pointer text-text_principal'/>
              <div className='absolute -top-2.5 -right-2.75 text-[11px]'>
                <p className='px-1  rounded-full bg-grad select-none'>0</p>
              </div>
            </button>

            <div className='relative'
             
            >
              <button onClick={()=>setShowLog(!showLog)} className='flex items-center cursor-pointer'
              
              >
                <FiUser className='text-[19px]'/>
                <IoIosArrowDown className='text-[12px] text-text_secundar'/>
              </button>
              {showLog &&(<div
              className={`absolute z-100 border border-bordura bg-fundal_card top-5 left-1/2 -translate-x-1/2 
               w-55 px-3 py-1.5 rounded-lg `}>
                <p className='font-bold text-center text-[19px]'>Bun venit!</p>
                <p className='mt-3 text-[12.5px] text-center'>Intra in contul tau TechStore si ai control complet asupra ofertelor!</p>
                <div className='flex flex-col mt-3  space-y-3 select-none'>
                  <button onClick={()=>navigate("/login")} className='border px-3 py-1 rounded-lg bg-grad cursor-pointer hover:bg-but_hover transition-all duration-300 ease-in-out border-bordura'>Autentificare</button>
                  <button onClick={()=>navigate("/register")} className='border px-3 py-1 rounded-lg border-bordura cursor-pointer bg-fundal_card hover:bg-bordura1 duration-300 ease-in-out transition-all '>Creare cont</button>
                </div>
              </div>)}
            </div>

            <div className='flex items-center bg-grad px-2 py-1 rounded-lg font-medium cursor-pointer hover:bg-butoane transition-all duration-300 ease-in-out select-none'>
              <BsHandbag/>
              <p className='text-[14px] ml-2 max-modf2:hidden '>Cos</p>
              <p className='ml-2 text-[14px] max-modf2:hidden bg-fundal_card px-1.5 rounded-full text-grad'>0</p>
            </div>

            <button onClick={()=>{
              setShowNav(!showNav)
            }} className='cursor-pointer text-text_secundar hover:text-text_principal transition-all duration-200 ease-in-out modf1:hidden'>
              <RxHamburgerMenu className='text-[21px]'/>
            </button>
          </div>

        </div>

        <div className={`border-t border-t-bordura  flex modf1:space-x-3 modf1:items-center modf1:justify-between max-modf1:flex-col max-modf1:overflow-hidden ${showNav?"max-modf1:max-h-100 max-modf1:opacity-100":"max-modf1:max-h-0 max-modf1:opacity-0"} transition-all duration-300 ease-in-out`}> 
          <div className='mt-3 relative text-[14px] modf1:hidden'>
            <input className=' 
            focus:ring-2 focus:ring-grad
            w-full outline-none bg-fundal_inp outline-0 border border-bordura py-1.5 rounded-lg pl-10 text-[14px] pr-3 transition-all duration-200 ease-in-out placeholder-text_placeholder' type="text" placeholder='Cauta laptopuri, smartphone-uri, monitoare...' name="" id="" />
            <CiSearch className='absolute text-text_secundar text-[19px] top-1/2 -translate-y-1/2 ml-3'/>
          </div>
          <div className='py-3 flex max-modf1:flex-col modf1:items-center max-modf1:space-y-1.5 max-modf1:w-full modf1:space-x-3'>
            {
              navbar.map((n,i)=>{
                const isCategory = n.id === 1;
                const Icon = iconMap[n.icon];
                return (
                <div key={i} className='relative ' 
                  onMouseEnter={()=>{
                    if(isCategory) setShowCategories(true);
                  }}
                  onMouseLeave={()=>{
                    if(isCategory) setShowCategories(false);
                  }}>

                  <NavLink key={n.path} to={n.path}
                
                    className={({isActive})=>`${isActive?"text-grad":"text-white"} select-none flex items-center space-x-1.5 text-[14px] hover:text-grad transition-all  duration-300 ease-in-out  max-modf1:w-full`}>
                      {Icon &&<Icon />} 
                      <p>{n.label}</p>
                  </NavLink>
                  {
                    isCategory && showCategories && (
                      <div className='absolute  top-5 left-0 max-modf1:hidden text-white bg-fundal_card border border-bordura px-3 py-3 w-155 text-[14px] rounded-lg'>
                        <ul className='flex space-x-3 justify-between text-[14px] '>
                          {
                            categorii_produse.map((c)=>
                            {const Icon = iconMap[c.icon]  
                            return(
                              <li key={c.id_categorie} className={`${c.id_categorie >3?"hidden":"block"}`} >
                                <div className='flex items-center space-x-3 text-grad'>
                                  {Icon && <Icon size={22}/>}
                                  <p>{c.nume_categorie}</p>
                                </div>
                                <ul className='space-y-1.5 pt-3 text-text_secundar select-none'>
                                  {
                                    c.subcategorii.map((t)=>(
                                      <li key={t.id_subcategorie} className='cursor-pointer hover:text-text_principal transition-all duration-200 ease-in-out'>
                                        <p>{t.nume}</p>
                                      </li>
                                    ))
                                  }
                                </ul>
                              </li>
                            )})
                          }
                        </ul>
                      </div>
                    )
                  }
                </div>
              )})
            }
          </div>
          <div className='text-[14px] flex items-center space-x-3 text-text_secundar max-modf:hidden'>
            <div className='flex items-center space-x-1.5 '>
              <CiDeliveryTruck className='text-grad'/>
              <p>Livrare Rapida 24h</p>
            </div>
            <div className='flex items-center space-x-1.5'>
              <IoShieldCheckmarkOutline className='text-grad'/>
              <p>Garantie Premium 2 Ani</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
