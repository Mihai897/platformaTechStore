import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { articole } from './articole';
import { FaLock } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShieldAlt } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { MdLaptop } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import { intrebari_frecvente } from './intrebari_frecvente';
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { LuMessageCircleMore } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

const CentruAjutor = () => {
  const navigate = useNavigate();
  const iconMap = {
    livrare: FaTruck,
    retur: TfiReload,
    garantie: FaShieldAlt,
    securitate: FaLock,
    plati:CiCreditCard1,
    suport:MdLaptop
  }
  const [showAnswer,setShowAnswer] = useState(null);
  return (
    <div className=' py-6'>
      

      <div className='bg-fundal_card mt-3 py-10 '>
        <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 text-center'>
          <div className='flex justify-center text-grad'>
            <div className='flex items-center
             bg-grad/30 border border-bordura1 space-x-2 text-[14px] font-bold px-3 py-1 rounded-full'>
              <CiCircleQuestion/>
              <p>SUPORT TEHNIC & ASISTENTA</p>
            </div>
              
          </div>
          <p className='font-bold text-[45px] max-modf4:text-[40px] mt-2'>Cu ce te putem ajuta astazi?</p>
          <div className='relative w-[60%] max-modf:w-full mx-auto mt-5'>
            <input className='border border-bordura1 px-10 pr-3 py-3 w-full bg-fundal_inp focus:ring-2 focus:ring-grad rounded-xl placeholder:text-text_placeholder transition-all duration-200 ease-in-out outline-0 placeholder:select-none' placeholder='ex: Retur produs, Cum verific garantia, Modificare adresa...' type="text" name="" id="" />
            <IoIosSearch className='absolute text-grad text-[24px] top-1/2 -translate-y-1/2 ml-3'/>
          </div>

          <ul className='text-[14px] mt-6 flex space-x-3 space-y-3 justify-center flex-wrap  items-center text-text_secundar'>
            <p className='shrink-0 '>Cautari frecvente:</p>
            <button className='border border-bordura1 px-3 rounded-xl py-0.5 bg-fundal_inp transition-all duration-300 ease-in-out hover:text-grad cursor-pointer select-none shrink-0'>Return in 14 zile</button>
            <button className='border border-bordura1 px-3 rounded-xl py-0.5 bg-fundal_inp transition-all duration-300 ease-in-out hover:text-grad cursor-pointer select-none shrink-0'>Garantiile & Service</button>
            <button className='border border-bordura1 px-3 rounded-xl py-0.5 bg-fundal_inp transition-all duration-300 ease-in-out hover:text-grad cursor-pointer select-none shrink-0'>Status Comanda</button>
            <button className='border border-bordura1 px-3 rounded-xl py-0.5 bg-fundal_inp transition-all duration-300 ease-in-out hover:text-grad cursor-pointer select-none shrink-0'>Descarcare Factura</button>
          </ul>
        </div>
      </div>




      <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 mt-6'>
        <p className='text-[22px] font-bold'>Categorii de Asistenta</p>
        <p className='text-[15px] text-text_secundar'>Alege un domeniu pentru a accesa ghidurile dedicate.</p>

        <ul className='grid grid-cols-3 gap-3 mt-6'>
          {
            articole.map((a)=>{
              const Icon = iconMap[a.icon]
              return (
                <li key={a.id} className='border px-3 py-5 rounded-xl border-bordura1 cursor-pointer hover:scale-102 hover:border-grad bg-fundal_card transition-all duration-300 ease-in-out'>
                  <div className='flex justify-center text-[24px] text-grad'>
                    {Icon && <Icon/>}
                  </div>
                  <p className='font-bold mt-3'>{a.nume}</p>
                  <p className='text-text_secundar text-[14px]'>{a.text}</p>
                  <div className='flex items-center space-x-1 text-[14px] mt-3 text-grad'>
                    <p>Exploreaza articole</p>
                    <IoIosArrowForward/>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>


      <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 mt-6 grid grid-cols-2 gap-6 max-modf:grid-cols-1'> 
        <div className='border border-bordura1 rounded-xl px-5 py-5 bg-fundal_card'>

          <div className='flex items-center space-x-3'>
            <div className='text-grad text-[23px] bg-fundal_inp px-3 py-3 rounded-full border border-bordura1'>
              <IoIosInformationCircleOutline/>
            </div>
            <div>
              <p className='font-bold'>Verificare Status Comanda</p>
              <p className='text-[14px] text-text_secundar'>Verifica stadiul livrarii in timp real fara autentificare.</p>
            </div>
          </div>

          <div className='text-[14px] mt-3'>
            <p className=''>Numar Comanda (ex: TS-98421)</p>
            <input className='my-1.5 bg-fundal_inp w-full px-3 py-3 rounded-xl outline-0 border border-bordura1 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-grad placeholder:text-text_placeholder' placeholder='TS-XXXXX' type="text" name="" id="" />
          </div>
          <div className='text-[14px]'>
            <p className='mt-1.5'>Email sau Telefon</p>
            <input className='my-1.5 bg-fundal_inp w-full px-3 py-3 rounded-xl outline-0 border border-bordura1 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-grad placeholder:text-text_placeholder' placeholder='nume@domain.ro or 07xx...' type="text" name="" id="" />
          </div>

          

          <button className='text-[14px] border bg-grad text-black font-bold w-full my-3 py-3 px-3 rounded-xl cursor-pointer hover:bg-but_hover transition-all duration-300 ease-in-out'>CAUTA COMANDA</button>
        </div>

        
        <div className='border border-bordura1 rounded-xl px-5 py-5 bg-fundal_card'>
          <div className='flex items-center space-x-3'>
            <div className='text-grad text-[23px] bg-fundal_inp px-3 py-3 rounded-full border border-bordura1'>
              <GoShieldCheck/>
            </div>
            <div>
              <p className='font-bold'>Verificare Garantie Produs</p>
              <p className='text-[14px] text-text_secundar'>Verificare eligibiltatea garantiei folosind seria S/N.</p>
            </div>
          </div>

          <div className='text-[14px] mt-3'>
            <p>Serie Serial Number (S/N)</p>
            <input className='my-1.5 bg-fundal_inp w-full px-3 py-3 rounded-xl outline-0 border border-bordura1 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-grad placeholder:text-text_placeholder' placeholder='ex: SN-8820491823' type="text" name="" id="" />
          </div>

          <p className='text-[14px] text-text_secundar mt-2.5'>Gasesti seria S/N pe eticheta ambalajului sau pe spatele echipamentului.</p>

          <button className='text-[14px] border bg-butoane text-black font-bold w-full my-3 py-3 px-3 rounded-xl cursor-pointer hover:bg-but_hover transition-all duration-300 ease-in-out'>VERIFICA ACOPERIREA GARANTIEI</button>
        </div>


      </div>


      <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 mt-6'>
        <p className='text-[22px] font-bold'>Intrebari Frecvente (FAQ)</p>
        <ul className='mt-5 space-y-3'>
          {
            intrebari_frecvente.map(int=>(
              <li onClick={()=>{setShowAnswer(prev=>prev===int.id ? null : int.id)}} className='border px-3 py-3 rounded-xl border-bordura1 overflow-hidden cursor-pointer  bg-fundal_card'>
                <div className='flex space-x-3 items-center justify-between'>
                  <div className='flex space-x-3 items-center '>
                    <CiSearch className='text-grad'/>
                    <p>{int.intrebare}</p>
                  </div>
                  {
                    showAnswer === int.id ? <IoIosArrowUp/>: <IoIosArrowDown/>
                  }
                </div>

                <div className={` ${showAnswer === int.id?"max-h-100 opacity-100 mt-3 py-3":"py-0 max-h-0 opacity-0 mt-0"} border-t border-t-bordura  transition-all duration-300 ease-in-out text-text_secundar text-[14px] overflow-y-auto scrollbar-thin`}>
                  <p>{int.raspuns}</p>
                  <div className='mt-3 text-[12px] flex items-center space-x-3 justify-between'>
                    <p className=''>A fost util acest raspuns?</p>
                    <div className='flex space-x-3 items-center-safe'>
                      <button className='flex items-center space-x-1 cursor-pointer bg-fundal_inp px-3 py-0.5 border-bordura1 hover:bg-grad/15 hover:text-grad rounded-xl border transition-all duration-300 ease-in-out'>
                        <AiFillLike className='text-yellow-400'/>
                        <p>Util (64)</p>
                      </button>
                      <button className='flex items-center space-x-1 cursor-pointer bg-fundal_inp px-3 py-0.5 border-bordura1 hover:bg-grad/15 hover:text-red-500 rounded-xl border transition-all duration-300 ease-in-out'>
                        <AiFillDislike className='text-yellow-400'/>
                        <p>Nu</p>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>

      <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 mt-6 ' >
        <div className='bg-fundal_card px-5 py-10 rounded-xl'>
          <div className='text-center'>
            <p className='font-bold text-[26px]'>Nu ai gasit raspunsul cautat?</p>
            <p className='text-[14px] text-text_secundar mt-1'>Echipa noastra de asistenta tehnica este pregatita sa iti ofere suport personalizat.</p>
          </div>

          <div className='grid grid-cols-3 mt-5 max-modf:grid-cols-2 gap-3 max-modf1:grid-cols-1'>
            
            <div className='border px-4 py-6 rounded-xl border-bordura hover:border-grad transition-all duration-300 ease-in-out bg-fundal_inp '>
              <div className=' flex justify-center'>
                <div className='bg-grad/15 text-[24px] px-3 py-3 rounded-xl text-grad'>
                  <LuMessageCircleMore />
                </div>
              </div>

              <p className='text-center mt-3 font-bold'>Live Chat Direct</p>
              <p className='text-center mt-3 text-[14px] text-text_secundar'>Discuta in timp real cu un cunsultant tehnic. Timp de asteptare mediu: <span className='text-grad'>3 minute</span>.</p>
              <button className='mt-5 bg-grad w-full px-3 py-1.5 rounded-xl cursor-pointer hover:bg-butoane transition-all duration-300 ease-in-out '>Porneste Chatul Live</button>
            </div>

            <div className='border px-4 py-6 rounded-xl border-bordura hover:border-grad transition-all duration-300 ease-in-out bg-fundal_inp '>
              <div className=' flex justify-center'>
                <div className='bg-hovr3/15 text-[24px] px-3 py-3 rounded-xl text-hovr3'>
                  <FiPhone />
                </div>
              </div>

              <p className='text-center mt-3 font-bold'>Asistenta Telefonica</p>
              <p className='text-center mt-3 text-[14px] text-text_secundar'>Apeleaza-ne la 0800 800 900 (apel gratuit). Program: Luni-Vineri 08:00-19:30.</p>
              <button className='mt-5 bg-gray-700 w-full px-3 py-1.5 rounded-xl cursor-pointer hover:bg-gray-600 transition-all duration-300 ease-in-out'>Suna acum</button>
            </div>

            <div className='border px-4 py-6 rounded-xl border-bordura hover:border-grad transition-all duration-300 ease-in-out bg-fundal_inp '>
              <div className=' flex justify-center'>
                <div className='bg-hovr/15 text-[24px] px-3 py-3 rounded-xl text-hovr'>
                  <MdMailOutline />
                </div>
              </div>

              <p className='text-center mt-3 font-bold'>Tichet De Suport</p>
              <p className='text-center mt-3 text-[14px] text-text_secundar'>Raspuns garantat in maxim 24 de ore lucratoare de la trimiterea solicitarii.</p>
              <button className='mt-5 bg-hovr w-full px-3 py-1.5 rounded-xl cursor-pointer hover:bg-hovr/60 transition-all duration-300 ease-in-out '>Trimite Solicitarea</button>
            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default CentruAjutor
