import React, { useState } from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CgPhone } from "react-icons/cg";
import { TbMessagesFilled } from "react-icons/tb";
import { FaGoogle, FaQuestionCircle, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { contact } from './contact';
import { MdLocationPin } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { IoIosArrowDown, IoIosSend } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { BsSend } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { FaToolbox } from "react-icons/fa6";

const Contact = () => {
  const [locatia,setLocatia] = useState(1);
  const [magazinSelectat,setMagazinSelectat] = useState(contact[0]);
  return (
    <div className='bg-fundal_card border mb-10 border-bordura'>
      <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 py-10 '>



        <div className='flex'>
          <div className='text-[14px] flex items-center space-x-3 bg-fundal_inp px-3 py-0.5 rounded-xl border border-bordura1'>
            <TfiHeadphoneAlt className='scale-x-[-1]'/>
            <p>Suntem aici sa te ajutam 24/7</p>
          </div>
        </div>

        <p className='mt-3 text-[40px] max-modf4:text-[34px] font-bold max-modf: max-modf:text-center'>Contact & Showroom-uri Physicale</p>
        <p className='w-[60%] text-text_secundar max-modf:w-full mt-3'>Ai intrebari despre o comanda, doresti consultanta tehnica dedicata sau vrei sa testezi ultimele gadgeturi? Contacteaza-ne online sau viziteaza showroom-urile noastre din tara.</p>


        <div className='grid grid-cols-4 gap-3 mt-5 max-modf5:grid-cols-2 max-modf4:grid-cols-1'>
          <div className='flex items-center space-x-3 text-[14px] border px-3 py-3 rounded-xl border-bordura1'>
            <div className='text-[24px]  px-3 py-3 rounded-xl bg-grad/15'>
              <CgPhone/>
            </div>

            <div>
              <p className='text-text_secundar'>Asistenta Telefonica</p>
              <p className='font-bold'>0371 000 999</p>
              <p className='text-green-500'>L-V: 09:00 - 15:00</p>
            </div>
          </div>

          
          <div className='flex items-center space-x-3 text-[14px] border px-3 py-3 rounded-xl border-bordura1'>
            <div className='text-[24px]  px-3 py-3 rounded-xl bg-hovr3/15 text-hovr3'>
              <TbMessagesFilled/>
            </div>

            <div>
              <p className='text-text_secundar'>Chat Live Instant</p>
              <p className='font-bold'>Discuta cu un consultant</p>
              <p className='text-green-500'>Raspuns sub 2 minute</p>
            </div>
          </div>

          <div className='flex items-center space-x-3 text-[14px] border px-3 py-3 rounded-xl border-bordura1'>
            <div className='text-[24px]  px-3 py-3 rounded-xl bg-green-500/15 text-green-500'>
              <FaWhatsapp/>
            </div>

            <div>
              <p className='text-text_secundar'>WhatsApp Business</p>
              <p className='font-bold'>_40 721 000 999</p>
              <p className='text-green-500'>Mesaje rapide & poze</p>
            </div>
          </div>

          <div className='flex items-center space-x-3 text-[14px] border px-3 py-3 rounded-xl border-bordura1'>
            <div className='text-[24px]  px-3 py-3 rounded-xl bg-butoane/15 text-butoane'>
              <IoMailOutline/>
            </div>

            <div>
              <p className='text-text_secundar'>Suport pe Email</p>
              <p className='font-bold'>suport@techstore.ro</p>
              
            </div>
          </div>


        </div>


        <div className='mt-5 border px-4 py-6 border-bordura1 bg-fundal_inp rounded-xl'>

          <div className='modf:flex modf:items-center modf:space-x-3 modf:justify-between max-modf:space-y-3'>
            <div className='max-modf:text-center'>
              <p className='text-[14px] max-modf2:text-[12px]'>RETEAUA NOASTRA DE MAGAZINE</p>
              <p className='text-[32px] font-bold max-modf2:text-[26px]'>Showroom-uri & Puncte de Ridicare</p>
            </div>

            <div className='text-text_secundar flex items-center space-x-3 text-[14px] max-modf2:text-[12px] bg-fundal_principal px-3 py-3 shrink-0 rounded-xl max-modf:justify-center'>
              <div className='text-[19px]'>
                <FaBoxOpen/>
              </div>
              <p>Verifica stocul local si ridica comanda gratuit in 1-2 ore!</p>
            </div>
          </div>


          <div className='mt-10  flex modf:space-x-3 max-modf:flex-col max-modf:space-y-3'>
            <ul className='h-135 max-modf5:h-145 max-modf:w-full max-modf:h-65 w-1/2 space-y-3 overflow-hidden overflow-y-scroll scrollbar-thin pr-2'>
              {
                contact.map(c=>(
                  <li onClick={()=>{
                    setLocatia(c.id);
                    setMagazinSelectat(c);
                  }} key={c.id} className={` px-3 py-3 border rounded-xl  bg-fundal_principal cursor-pointer hover:bg-fundal_inp transition-all duration-300 ${locatia===c.id?"border-grad":"border-bordura1"} ease-in-out`}>
                    <div className='flex items-center space-x-3 justify-between text-[12px]'>
                      <p className='bg-grad/30 px-3 py-0.5 rounded-xl border font-bold border-bordura1'>{c.locatie}</p>
                      <p className='text-hovr3'>Deschis acum</p>
                    </div>
                    <p className='text-[16px] mt-3 font-bold'>{c.nume}</p>
                    <p className='text-[14px] text-text_secundar'>{c.strada}</p>
                  </li>
                ))
              }
            </ul>
            <div className='w-1/2 max-modf:w-full    overflow-hidden bg-fundal_card px-4 py-4 border border-bordura1 rounded-xl'>
              <div>
                <p className='text-[15px] text-text_secundar'>{magazinSelectat.locatie}</p>
                <p className='font-bold text-[22px]'>{magazinSelectat.nume}</p>
              </div>

              <div className='grid grid-cols-2 gap-3 mt-3 max-modf2:grid-cols-1'>


                <div className='bg-fundal_inp px-3 py-3  rounded-xl border border-bordura1'>
                  <div className='flex space-x-1.5 items-center text-[14px] text-text_secundar'>
                    <MdLocationPin/>
                    <p>Adresa:</p>
                  </div>
                  <p className='text-[14px] mt-1'>{magazinSelectat.nume}</p>
                </div>

                <div className='bg-fundal_inp px-3 py-3  rounded-xl border border-bordura1'>
                  <div className='flex space-x-1.5 items-center text-[14px] text-text_secundar'>
                    <GoClock/>
                    <p>Program Functionare:</p>
                  </div>
                  <p className='text-[14px] mt-1'>Luni-Duminica: {magazinSelectat.program}</p>
                </div>

                <div className='bg-fundal_inp px-3 py-3  rounded-xl border border-bordura1'>
                  <div className='flex space-x-1.5 items-center text-[14px] text-text_secundar'>
                    <FaPhoneAlt/>
                    <p>Telefon Direct Magazin:</p>
                  </div>
                  <p className='text-[14px] mt-1'>{magazinSelectat.telefon}</p>
                </div>

                <div className='bg-fundal_inp px-3 py-3  rounded-xl border border-bordura1'>
                  <div className='flex space-x-1.5 items-center text-[14px] text-text_secundar'>
                    <FaBox/>
                    <p>Ridicare Comenzi:</p>
                  </div>
                  <p className='text-[14px] mt-1'>Punct Pick-Up Gratuit</p>
                </div>




              </div>


              <div className='mt-3 bg-black h-67 rounded-lg px-3 py-10'>
                <div className='flex justify-center'>
                  <div className=' bg-grad/30 px-3 py-3 rounded-full border border-grad text-[23px] animate-bounce'>
                    <MdLocationPin/>
                  </div>
                </div>
                <p className='text-center mt-3 font-bold'>{magazinSelectat.nume}</p>
                <p className='text-center mt-1.5 text-[15px] text-text_secundar'>{magazinSelectat.strada}</p>
                
                <div className='flex justify-center mt-5'>
                  <button className='flex items-center space-x-3 bg-grad/30 border border-bordura1 px-3 py-1.5 rounded-xl text-[15px] hover:bg-grad/50 transition-all duration-300 ease-in-out cursor-pointer'>
                    <FaGoogle className='text-red-400'/>
                    <p>Deschide Google Maps</p>
                  </button>
                </div>
              </div>
            </div>
          </div>


    


        </div>


        <div className='mt-5 max-modf5:space-y-3 modf5:flex modf5:space-x-3  items-start'>
          <div className='w-3/4 max-modf5:w-full border px-4 py-6 border-bordura1 bg-fundal_inp rounded-xl'>
            <div className='flex items-center space-x-1.5 text-text_secundar'>
              <IoIosSend/>
              <p>FORMULAR ASISTENTA</p>
            </div>
            <p className='font-bold text-[24px]'>Trimite-ne un Mesaj</p>
            <p className='text-[14px] text-text_secundar mt-1'>Echipa noastra va analiza solicitarea si va raspunde in maxim 24 de ore lucratoare.</p>

            <div className='grid grid-cols-2 max-modf4:grid-cols-1 gap-3 mt-3'>


              <div className='text-[14px]'> 
                <p className='font-bold'>NUME SI PRENUME</p>
                <input className='mt-2 border w-full px-3 py-1.5 rounded-lg border-bordura1 bg-fundal_inp outline-0 focus:ring-2 focus:ring-grad' placeholder='ex: Popescu Ion' type="text" name="" id="" />
              </div>


              <div className='text-[14px]'> 
                <p className='font-bold'>ADRESA EMAIL</p>
                <input className='mt-2 border w-full px-3 py-1.5 rounded-lg border-bordura1 bg-fundal_inp outline-0 focus:ring-2 focus:ring-grad' placeholder='ex: ion.popescu@email.ro' type="email" name="" id="" />
              </div>


              <div className='text-[14px]'> 
                <p className='font-bold'>NUMAR TELEFON</p>
                <input className='mt-2 border w-full px-3 py-1.5 rounded-lg border-bordura1 bg-fundal_inp outline-0 focus:ring-2 focus:ring-grad' placeholder='ex: 0722 000 000' type="text" name="" id="" />
              </div>


              <div className='text-[14px]'> 
                <p className='font-bold'>NUMAR COMANDA (OPTIONAL)</p>
                <input className='mt-2 border w-full px-3 py-1.5 rounded-lg border-bordura1 bg-fundal_inp outline-0 focus:ring-2 focus:ring-grad' placeholder='ex: TS-2026-9874' type="text" name="" id="" />
              </div>




            </div>


            <div className='text-[14px] mt-3'>
              <p className='font-bold'>DEPARTAMENT/SUBIECT</p>
              <div>
                <button className='flex bg-fundal_inp border border-bordura1 w-full px-3 py-1.5 cursor-pointer mt-3 rounded-lg justify-between space-x-3 items-center'>
                  <p>Alege departamentul dorit...</p>
                  <IoIosArrowDown/>
                </button>
              </div>
            </div>
            <div className='text-[14px] mt-3'>
              <p className='font-bold'>MESAJUL TAU</p>
              <textarea className='w-full border px-3 py-3 mt-3 rounded-lg h-30 resize-none border-bordura1 bg-fundal_inp outline-0' name="" placeholder='Descrie detaliat solicitarea ta...' id=""></textarea>
            </div>

            <div className='text-[14px] mt-3'>
              <p className='font-bold'>AFISEAZA FISIERE / POZE (OPTIONAL)</p>
              <button className='w-full mt-3 border border-bordura1 px-3 py-3 flex flex-col items-center space-y-3  hover:border-grad cursor-pointer transition-all duration-300 ease-in-out rounded-xl'>
                <FaCloudUploadAlt className='text-[30px] text-text_secundar'/>
                <p className='text-[12px] text-text_secundar '>Click pentru a atasa poze cu produsul, factura sau documente (Max 10 MB)</p>
              </button>
            </div>

            <div>
              <button className='flex items-center space-x-3 mt-5 border px-5 py-3 rounded-xl bg-butoane transition-all duration-300 ease-in-out text-black font-bold cursor-pointer hover:bg-but_hover'>
                <BsSend/>
                <p>Trimite Solicitare</p>
              </button>
            </div>
          </div>

          <div className='w-2/4 max-modf5:w-full '>
            <div className='border px-4 py-6 border-bordura1 bg-fundal_inp rounded-xl relative overflow-hidden'>
              <span className='bg-grad/30 text-[12px] px-3 py-0.5 rounded-xl border border-bordura1'>DEPARTAMENT B2B</span>

              <p className='mt-3 font-bold text-[20px] z-100'>Achizitii Corporate & Companii</p>

              <p className='text-[14px] mt-3 z-100 text-text_secundar'>Beneficiezi de discounturi de volum, manager de cont dedicat, plata la termen si oferte personalizate pentru echiparea firmei tale.</p>
              
              <ul className='mt-3 text-[14px] list-disc ml-3 z-100'>
                <li>Ofertare rapida in maxim 2 ore</li>
                <li>Facturare cu TVA deductibil</li>
                <li>Livrare prioritara din depozit</li>
              </ul>

              <button className='w-full z-100 hover:bg-gray-400/30 transition-all duration-300 bg-fundal_inp mt-3 border border-bordura1 px-3 py-2 flex items-center space-x-3 justify-center rounded-xl cursor-pointer'>
                <CiMail/>
                <p>b2b@techstore.ro</p>
              </button>
              <FaToolbox className='absolute text-[105px] text-text_secundar/15 -bottom-3 right-0'/>
            </div>
            <div className='border mt-5 px-4 py-6 border-bordura1 bg-fundal_inp rounded-xl'>
              <div className='flex items-center space-x-3 font-bold'>
                <FaQuestionCircle/>
                <p>INTREBARI FRECVENTE</p>
              </div>

              <div className='text-[14px] mt-3'>
                <p>Cum initiezi un retur in 14 zile?</p>
                <p className='text-text_secundar'>Afla totul despre procedura simplificata de retur online.</p>
              </div>
              <div className='text-[14px] mt-3'>
                <p>Cat dureaza o reparatie in garantie?</p>
                <p className='text-text_secundar'>Termenul legal este de maxim 15 zile calendaristice.</p>
              </div>
              <div className='text-[14px] mt-3'>
                <p>Cum pot urmari un AWB de livrare?</p>
                <p className='text-text_secundar'>Primesti linkul direct de tracking pe email.</p>
              </div>
            </div>
          </div>

          
        </div>



      </div>
    </div>
  )
}

export default Contact
