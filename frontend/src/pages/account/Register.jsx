import React, { useState } from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

import { TbBrandApple } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import { IoLockClosedOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { GoGift } from "react-icons/go";
import { FiUser } from "react-icons/fi";

const Register = () => {
  const navigate = useNavigate();
  const [selectTipCont,setSelectTipCont] = useState(1);
  const tipCreareCont = [
                      {id:1,nume:"Persoana Fizica"},{id:2,nume:"Persoana Juridica (Firma)"}
                    ];
  return (
    <div className='max-w-screen-2xl mx-auto px-14   max-modf1:px-10 py-10 max-modf2:px-6'>
          <div className='flex justify-center'>
            <div className='border px-8 py-8 rounded-xl border-bordura w-190 bg-fundal_card'>
    
    
              <div className='flex items-center  max-modf2:space-x-3 max-modf2:flex-col max-modf2:space-y-3'>
                <button onClick={()=>navigate("/login")}  
                className='flex cursor-pointer justify-center w-1/2 px-3 py-2 rounded-xl text-text_secundar hover:text-text_principal items-center transition-all max-modf2:w-full duration-300 ease-in-out space-x-1.5'>
                  <MdOutlineFileDownload className='text-[19px] -rotate-90'/>
                  <p>Autentificare</p>
                </button>
                <button className='flex max-modf2:w-full w-1/2 justify-center items-center space-x-1.5  hover:text-text_principal cursor-pointer transition-all bg-grad px-3 py-2 rounded-xl duration-300 ease-in-out'>
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

             
    
              <div className='mt-5'>
                <p className='text-[14px]'>Tipul de Cont</p>
                <ul className='text-[15px] mt-3 flex max-modf2:flex-col'>
                  {
                    tipCreareCont.map(c=>(
                      <li onClick={()=>setSelectTipCont(c.id)} key={c.id} className={`w-1/2 max-modf2:w-full cursor-pointer   px-3  py-1.5 rounded-xl text-center ${selectTipCont===c.id?"bg-grad/25 text-grad border border-bordura1":"text-text_secundar hover:text-text_principal "}`}>{c.nume}</li>
                    ))
                  }
                  
                  
                </ul>
              </div>


              <div className='mt-5 bg-linear-to-r to-hovr3/30 from-grad/30 via-hovr3/30 px-3 py-3 rounded-lg border border-bordura1 flex items-center space-x-3'>
                <GoGift className='text-hovr3'/>
                <p className='text-[14px]'><span className='text-hovr3'>Bonsu de bun venit:</span> Creeaza cont acum si primesti un cupon cadou de <span className='font-bold text-text_principal'>50 LEI</span> la prima comanda!</p>
              </div>



              {selectTipCont===1 &&(<div>
                
      
      
                <div className='grid grid-cols-2 max-modf4:grid-cols-1 mt-4 gap-3'>
                  <div className=''>
                    <p className='text-[14px]'>Nume</p>
                    <div className='relative'>
                      <input className='bg-fundal_inp w-full mt-1.5  px-10 py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="text" name="" placeholder='ex: Popescu' id="" />
                      <FiUser className='absolute text-text_secundar text-[19px] left-3 mt-1 top-1/2 -translate-y-1/2'/>
                      
                    </div>
                  </div>

                  <div className=''>
                    <p className='text-[14px]'>Prenume</p>
                    <div className='relative'>
                      <input className='bg-fundal_inp w-full mt-1.5  px-10 py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="text" name="" placeholder='ex: Alexandru' id="" />
                      <FiUser className='absolute text-text_secundar text-[19px] left-3 mt-1 top-1/2 -translate-y-1/2'/>
                      
                    </div>
                  </div>
                </div>


                <div className='grid grid-cols-2 max-modf4:grid-cols-1 mt-3 gap-3'>
                  <div>
                    
                    <p className='text-[14px]'>Adresa Email</p>
                    <div className='relative'>
                      <input className='bg-fundal_inp w-full mt-1.5  px-10 py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="email" name="" placeholder='ex: alex@mail.com' id="" />
                      <MdMailOutline className='absolute text-text_secundar text-[19px] left-3 mt-1 top-1/2 -translate-y-1/2'/>
                      
                    </div>
                  </div>
                  <div>
                    
                    <p className='text-[14px]'>Numar Telefon Mobil</p>
                    <div className='relative'>
                      <input className='bg-fundal_inp w-full mt-1.5  px-10 py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="text" name="" placeholder='ex: 07xxxxxxxx' id="" />
                      <FiPhone className='absolute text-text_secundar text-[19px] left-3 mt-1 top-1/2 -translate-y-1/2'/>
                      
                    </div>
                  </div>
                </div>



      
                <div className='mt-3 grid grid-cols-2 gap-3 max-modf4:grid-cols-1'>
                  <div >
                    <p className='text-[14px]'>Parola Cont</p>
                    <div className='relative'>
                      <input className='bg-fundal_inp w-full mt-1.5 px-3 pr-10 py-2 text-text_secundar rounded-xl border outline-0 focus:ring-2 focus:ring-grad border-bordura1' type="password" name="" placeholder='Introduce-ti parola' id="" />
                    
                      <button className='cursor-pointer'>
                        <IoEyeOutline className='absolute text-text_secundar hover:text-text_principal transition-all duration-300 ease-in-out text-[19px] right-3 mt-1 top-1/2 -translate-y-1/2'/>
                      </button>
                    </div>
                  </div>
                  <div >
                    <p className='text-[14px]'>Confirma Parola</p>
                    <div className='relative'>
                      <input className='bg-fundal_inp w-full mt-1.5 pl-3 pr-10 py-2 outline-0 focus:ring-2 focus:ring-grad text-text_secundar rounded-xl border border-bordura1' type="password" name="" placeholder='Confirmarea parolei' id="" />
                      
                      <button className='cursor-pointer'>
                        <IoEyeOutline className='absolute text-text_secundar hover:text-text_principal transition-all duration-300 ease-in-out text-[19px] right-3 mt-1 top-1/2 -translate-y-1/2'/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>)}




              {selectTipCont===2 &&(<div>
                
      
      
                <div className='grid grid-cols-2 max-modf4:grid-cols-1 mt-4 gap-3'>
                  <div className=''>
                    <p className='text-[14px]'>Nume</p>
                    <div className='relative'>
                      <input className='bg-fundal_inp w-full mt-1.5  px-10 py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="text" name="" placeholder='ex: Popescu' id="" />
                      <FiUser className='absolute text-text_secundar text-[19px] left-3 mt-1 top-1/2 -translate-y-1/2'/>
                      
                    </div>
                  </div>

                  <div className=''>
                    <p className='text-[14px]'>Prenume</p>
                    <div className='relative'>
                      <input className='bg-fundal_inp w-full mt-1.5  px-10 py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="text" name="" placeholder='ex: Alexandru' id="" />
                      <FiUser className='absolute text-text_secundar text-[19px] left-3 mt-1 top-1/2 -translate-y-1/2'/>
                      
                    </div>
                  </div>
                </div>


                <div className='grid grid-cols-2 max-modf4:grid-cols-1 mt-3 gap-3'>
                  <div>
                    
                    <p className='text-[14px]'>Adresa Email</p>
                    <div className='relative'>
                      <input className='bg-fundal_inp w-full mt-1.5  px-10 py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="email" name="" placeholder='ex: alex@mail.com' id="" />
                      <MdMailOutline className='absolute text-text_secundar text-[19px] left-3 mt-1 top-1/2 -translate-y-1/2'/>
                      
                    </div>
                  </div>
                  <div>
                    
                    <p className='text-[14px]'>Numar Telefon Mobil</p>
                    <div className='relative'>
                      <input className='bg-fundal_inp w-full mt-1.5  px-10 py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="text" name="" placeholder='ex: 07xxxxxxxx' id="" />
                      <FiPhone className='absolute text-text_secundar text-[19px] left-3 mt-1 top-1/2 -translate-y-1/2'/>
                      
                    </div>
                  </div>
                </div>

                <div className='mt-3'>
                  <p className='text-grad font-bold text-[14px]'>Date companie</p>

                  <div className='grid grid-cols-2 max-modf4:grid-cols-1 mt-3 gap-3'>
                    <div>
                      
                      <p className='text-[14px]'>Rao/Nume Companie</p>
                      <div className='relative'>
                        <input className='bg-fundal_inp w-full mt-1.5 px-3  py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="text" name="" placeholder='ex: Tech SRL' id="" />
                        
                        
                      </div>
                    </div>
                    <div>
                      
                      <p className='text-[14px]'>CUI / CIF</p>
                      <div className='relative'>
                        <input className='bg-fundal_inp w-full mt-1.5  px-3 py-2 text-text_secundar rounded-xl border border-bordura1 outline-0 focus:ring-2 focus:ring-grad' type="text" name="" placeholder='ex: RO13456789' id="" />
                        
                        
                      </div>
                    </div>
                  </div>
                </div>

      
                <div className='mt-3 grid grid-cols-2 gap-3 max-modf4:grid-cols-1'>
                  <div >
                    <p className='text-[14px]'>Parola Cont</p>
                    <div className='relative'>
                      <input className='bg-fundal_inp w-full mt-1.5 px-3 pr-10 py-2 text-text_secundar rounded-xl border outline-0 focus:ring-2 focus:ring-grad border-bordura1' type="password" name="" placeholder='Introduce-ti parola' id="" />
                    
                      <button className='cursor-pointer'>
                        <IoEyeOutline className='absolute text-text_secundar hover:text-text_principal transition-all duration-300 ease-in-out text-[19px] right-3 mt-1 top-1/2 -translate-y-1/2'/>
                      </button>
                    </div>
                  </div>
                  <div >
                    <p className='text-[14px]'>Confirma Parola</p>
                    <div className='relative'>
                      <input className='bg-fundal_inp w-full mt-1.5 pl-3 pr-10 py-2 outline-0 focus:ring-2 focus:ring-grad text-text_secundar rounded-xl border border-bordura1' type="password" name="" placeholder='Confirmarea parolei' id="" />
                      
                      <button className='cursor-pointer'>
                        <IoEyeOutline className='absolute text-text_secundar hover:text-text_principal transition-all duration-300 ease-in-out text-[19px] right-3 mt-1 top-1/2 -translate-y-1/2'/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>)}


              <div className='mt-3 border px-3 py-3 border-bordura rounded-xl text-[14px]'>
                <p>Complexitate Parola</p>
                <div className='mt-1.5 grid grid-cols-4 gap-1.5' >
                  <div className=' py-1 bg-text_secundar/30 '></div>
                  <div className=' py-1 bg-text_secundar/30 '></div>
                  <div className=' py-1 bg-text_secundar/30 '></div>
                  <div className=' py-1 bg-text_secundar/30 '></div>
                </div>
                <ul className='grid grid-cols-2 gap-1.5 mt-3 text-text_secundar list-disc ml-3'>
                  <li>Min. 8 caractere</li>
                  <li>Cel putin o cifra</li>
                  <li>Cel putin o majuscula</li>
                  <li>Caracter Special(!#$%)</li>
                </ul>
              </div>


    
    
              <div className='mt-5 flex items-center space-x-3'>
                <input type="checkbox" name="" id="" />
                <p className='text-[14px]'>Am citit si sunt de acord cu <button onClick={()=>navigate("/termeni-si-conditii")} className='text-grad underline hover:text-grad/80 transition-all duration-300 ease-in-out cursor-pointer'>Termenii si Conditiile</button> si <button onClick={()=>navigate("/")} className='text-grad underline hover:text-grad/80 transition-all duration-300 ease-in-out cursor-pointer'>Politica GDPR</button></p>
              </div>
              <div className='mt-1.5 flex items-center space-x-3'>
                <input type="checkbox" name="" id="" />
                <p className='text-[14px]'>Doresc sa primesc oferte exclusive, cupoane promotionale si noutati tehnologice prin email.</p>
              </div>
              
    
              <button className='flex bg-grad w-full justify-center mt-3 px-3 py-3 rounded-xl hover:bg-grad/80 cursor-pointer transition-all duration-300 ease-in-out items-center space-x-1.5'>
                <p>Creeaza Cont TechStore</p>
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

export default Register
