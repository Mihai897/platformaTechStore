import React, { useState } from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

import { TbBrandApple } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FiPhone } from "react-icons/fi";
const Login = () => {
  const navigate = useNavigate();
  const [tipLogare,setTipLogare] = useState("email");
  return (
    <div className='max-w-screen-2xl mx-auto px-14   max-modf1:px-10 py-10 max-modf2:px-6'>
      <div className='flex justify-center'>
        <div className='border px-8 py-8 rounded-xl border-bordura w-150 bg-fundal_card'>


          <div className='flex max-modf2:flex-col max-modf2:space-y-3 items-center modf2:space-x-3'>
            <button className='flex max-modf2:w-full cursor-pointer justify-center w-1/2 bg-grad/80 px-3 py-2 rounded-xl  items-center space-x-1.5'>
              <MdOutlineFileDownload className='text-[19px] -rotate-90'/>
              <p>Autentificare</p>
            </button>
            <button onClick={()=>navigate("/register")}   
            className='flex max-modf2:w-full w-1/2 justify-center items-center space-x-1.5 text-text_secundar hover:text-text_principal cursor-pointer transition-all duration-300 px-3 py-2 rounded-xl  ease-in-out'>
              <LuUserPlus className='text-[17px]'/>
              <p>Creare Cont Nou</p>
            </button>
            
          </div>


          <div className='mt-5'>
            <p className='text-center text-text_secundar text-[14px] '>CONECTARE RAPIDA CU</p>

            <div className='mt-3 grid grid-cols-3 gap-3 max-modf2:grid-cols-2'>
              <button className='flex bg-fundal_inp/50 transition-all duration-300 ease-in-out px-3 py-1.5 rounded-xl border border-bordura1 items-center cursor-pointer hover:bg-fundal_inp space-x-1.5 justify-center'>
                <FcGoogle/>
                <p className='text-[14px]'>Google</p>
              </button>
              <button className='flex bg-fundal_inp/50 transition-all duration-300 ease-in-out px-3 py-1.5 rounded-xl border border-bordura1 items-center cursor-pointer hover:bg-fundal_inp space-x-1.5 justify-center'>
                <TbBrandApple/>
                <p className='text-[14px]'>Apple ID</p>
              </button>
              <button className='flex bg-fundal_inp/50 transition-all duration-300 ease-in-out px-3 py-1.5 rounded-xl border border-bordura1 items-center cursor-pointer hover:bg-fundal_inp space-x-1.5 justify-center'>
                <FaFacebookF/>
                <p className='text-[14px]'>Facebook</p>
              </button>
            </div>
          </div>

          <div className='mt-8 border-t relative border-t-bordura1'>
            <p className='absolute -top-0.5 left-1/2 -translate-1/2 text-[14px] text-text_secundar max-modf2:text-[11px] bg-fundal_card px-5'>SAU CU EMAIL</p>
          </div>


          <ul className='mt-5 space-y-3'>
            {tipLogare==="email" &&(<li key={"email"}>
              <p className='text-[14px]'>Adresa Email </p>
              <div className='relative'>
                <input className='bg-fundal_inp w-full mt-1.5  px-10 py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="email" name="" placeholder='nume@domeniu.ro' id="" />
                <MdMailOutline className='absolute text-text_secundar text-[19px] left-3 mt-1 top-1/2 -translate-y-1/2'/>
                <button className='cursor-pointer'>
                  <MdOutlineCancel className='absolute text-text_secundar hover:text-text_principal transition-all duration-300 ease-in-out text-[19px] right-3 mt-1 top-1/2 -translate-y-1/2'/>
                </button>
              </div>
            </li>)}
            {tipLogare==="numar" &&(<li key={"numar"}>
              <p className='text-[14px]'>Numar Telefon Mobil </p>
              <div className='relative'>
                <input className='bg-fundal_inp w-full mt-1.5  px-10 py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="text" name="" placeholder='07xxxxxxxx' id="" />
                <FiPhone className='absolute text-text_secundar text-[19px] left-3 mt-1 top-1/2 -translate-y-1/2'/>
                <button className='cursor-pointer'>
                  <MdOutlineCancel className='absolute text-text_secundar hover:text-text_principal transition-all duration-300 ease-in-out text-[19px] right-3 mt-1 top-1/2 -translate-y-1/2'/>
                </button>
              </div>
            </li>)}
          </ul>
          {tipLogare==="email" &&(<p onClick={()=>setTipLogare("numar")} className='mt-3 text-[14px]'>Sau conectati-va cu <button className='cursor-pointer text-grad hover:text-grad/80 transition-all duration-300 ease-in-out'>numarul de telefon</button>.</p>)}
          {tipLogare==="numar" &&(<p onClick={()=>setTipLogare("email")} className='mt-3 text-[14px]'>Sau conectati-va cu <button className='cursor-pointer text-grad hover:text-grad/80 transition-all duration-300 ease-in-out'>email-ul</button>.</p>)}

          <div className='mt-3'>
            <p className='text-[14px]'>Parola Cont</p>
            <div className='relative'>
              <input className='bg-fundal_inp w-full mt-1.5  px-10 py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="password" name="" placeholder='Introduce-ti parola' id="" />
              <IoLockClosedOutline className='absolute text-text_secundar text-[19px] left-3 mt-1 top-1/2 -translate-y-1/2'/>
              <button className='cursor-pointer'>
                <IoEyeOutline className='absolute text-text_secundar hover:text-text_principal transition-all duration-300 ease-in-out text-[19px] right-3 mt-1 top-1/2 -translate-y-1/2'/>
              </button>
            </div>
          </div>


          <div className='mt-3 flex items-center space-x-3'>
            <input type="checkbox" name="" id="" />
            <p className='text-[14px]'>Pastreaza-ma autentificat (30 zile)</p>
          </div>
          

          <button className='flex bg-grad w-full justify-center mt-3 px-3 py-3 rounded-xl hover:bg-grad/80 cursor-pointer transition-all duration-300 ease-in-out items-center space-x-1.5'>
            <p>Conecteaza-te in Cont</p>
            <BsArrowRightShort className='text-[21px]'/>
          </button>


          <div className='flex justify-center mt-25'>
            <button onClick={()=>navigate("/")} className='flex items-center space-x-1.5 text-[14px] cursor-pointer text-text_secundar hover:text-text_principal transition-all duration-300 ease-in-out'>
              <p>Vrei sa continui fara cont? Apasa aici pentru a continua ca oaspete.</p>
              <IoIosArrowForward/>
            </button>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Login
