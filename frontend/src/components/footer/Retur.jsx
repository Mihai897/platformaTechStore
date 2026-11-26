import React, { useState } from 'react'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { FaCheck } from 'react-icons/fa6';
import { CiCreditCard1 } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { BsExclamationTriangle } from "react-icons/bs";

const Retur = () => {
  const [showInfoReg,setShowInfoReg] = useState(null);
  return (
    <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 py-8'>
      

      <div className='bg-fundal_card px-5 py-6 rounded-xl border border-bordura '>

        <div className='flex justify-center'>
          <div className='flex items-center space-x-3 bg-grad/10 border border-bordura1 text-[14px] px-3 py-1 rounded-xl text-grad'>
            <IoShieldCheckmarkOutline/>
            <p>GARANTIA SiMPLA DE RETUR 30 ZILE</p>
          </div>
        </div>

        <p className='text-center my-5 text-[34px] font-bold'>Retur Simplu, Rapid si 100% Gratuit</p>
        <p className='text-text_secundar text-center w-[60%] max-modf:w-[80%] max-modf1:w-full mx-auto'>Nu esti complet multumit de produs? Ai la dispozitie 30 de zile calendaristice pentru a-l returna fara batai de cap. Noi suportam transportul de la domiciliul tau!</p>

        <div className='w-[60%]  max-modf:w-[80%] max-modf1:w-full mx-auto bg-fundal_principal mt-4 px-5 py-8  rounded-xl border border-bordura'>
          <div className='flex  space-x-3 items-center'>
            <IoIosSearch className='text-grad text-[19px]'/>
            <p className='text-text_principal font-medium'>Verifica Eligibilitatea returului</p>
          </div>
          <p>Introdu detaliile comenzii pentru a afla instant daca produsul este in fereasta de 30 zile.</p>

          <div className='flex mt-4 modf1:items-center modf1:space-x-3 text-[14px] max-modf1:flex-col max-modf1:space-y-3'>
            <input className='border bg-fundal_card border-bordura px-3 outline-0 focus:ring-2 focus:ring-grad placeholder:text-text_placeholder py-1.5 rounded-xl w-[50%] max-modf1:w-full' type="text" name="" placeholder='ex: Ts-98431' id="" />
            <input className='border bg-fundal_card border-bordura px-3 outline-0 focus:ring-2 focus:ring-grad  max-modf1:w-full placeholder:text-text_placeholder py-1.5 rounded-xl w-[50%]' type="text" placeholder='Emailul folosit la comanda' name="" id="" />

            <button className='cursor-pointer bg-grad  px-6 py-1.5 hover:bg-grad/80 transition-all duration-300 ease-in-out rounded-xl'>VERIFICA</button>
          </div>
        </div>
      </div>


      <div className='mt-8'>

        <div className='text-center'>
          <p className='font-bold text-[30px]'>Cum Functioneaza Returul in 4 Pasi Simpli</p>
          <p className='text-[15px] text-text_secundar'>Procesul nostru este complet digitalizat si proiectat pentru eficienta maxima.</p>
        </div>

        <div className='grid grid-cols-4 max-modf:grid-cols-2 max-modf3:grid-cols-1 gap-3 mt-6'>
          <div className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura1'>
            <div className=' flex'>
              <p className='px-3 py-2 bg-grad/15 font-black text-[22px] rounded-xl text-grad'>01</p>
            </div>
            <p className='mt-3 font-bold text-[17px]'>1. Solicitare Online</p>
            <p className='mt-1.5  text-[14px] text-text_secundar'>Apasa pe butonul "Initiaza Retur" si completeaza formularul RMA in mai putin de 2 minute.</p>

            <div className='flex items-center text-[12.5px] space-x-1.5 mt-4 text-grad'>
              <FaCheck/>
              <p>Fara imprimare de AWB necesara</p>
            </div>
          </div>


          <div className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura1'>
            <div className=' flex'>
              <p className='px-3 py-2 bg-hovr/15 font-black text-[22px] rounded-xl text-hovr'>02</p>
            </div>
            <p className='mt-3 font-bold text-[17px]'>2. Ambalare Produs</p>
            <p className='mt-1.5  text-[14px] text-text_secundar'>Pune produsul impreuna cu accesoriile sale originale in cutia de protectie.</p>

            <div className='flex items-center text-[12.5px] space-x-1.5 mt-4 text-hovr'>
              <FaCheck/>
              <p>Protectie adecvata pentru transport</p>
            </div>
          </div>


          <div className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura1'>
            <div className=' flex'>
              <p className='px-3 py-2 bg-hovr3/15 font-black text-[22px] rounded-xl text-hovr3'>03</p>
            </div>
            <p className='mt-3 font-bold text-[17px]'>3. Preluare Curier Gratuit</p>
            <p className='mt-1.5  text-[14px] text-text_secundar'>Curierul partener (FAN Courier/Sameday) vine direct la usa ta la data si ora selectata.</p>

            <div className='flex items-center text-[12.5px] space-x-1.5 mt-4 text-hovr3'>
              <FaCheck/>
              <p>Cost transport: 0 lei</p>
            </div>
          </div>


          <div className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura1'>
            <div className=' flex'>
              <p className='px-3 py-2 bg-hovr1/15 font-black text-[22px] rounded-xl text-hovr1'>04</p>
            </div>
            <p className='mt-3 font-bold text-[17px]'>4. Rambursare Rapida</p>
            <p className='mt-1.5  text-[14px] text-text_secundar'>Dupa receptia si verificarea coletullui in depozit, banii sunt virati in 24-48h.</p>

            <div className='flex items-center text-[12.5px] space-x-1.5 mt-4 text-hovr1'>
              <FaCheck/>
              <p>Optiune +5% Bonus pe card Cadou</p>
            </div>
          </div>




        </div>


      </div>


      <div className='mt-8 border px-3 py-8 rounded-xl border-bordura bg-fundal_card'>
        <p className='font-bold text-[22px]'>Modalitati de Rambursare a Banilor</p>
        <p className='text-[14px] text-text_secundar mt-1'>Alege optiunea cea mai convenabila pentru tine in momentul completarii cererii de retur.</p>

        <div className='grid grid-cols-3 gap-3 mt-4 max-modf1:grid-cols-1'>
          <div className='bg-fundal_principal border border-bordura px-3 py-3 rounded-xl'>
            <div className='flex space-x-1.5 items-center text-grad '>
              <CiCreditCard1/>
              <p>Cardul Bancar Original</p>
            </div>
            <p className='text-text_secundar text-[14px] mt-3'>Rambursare direct pe cardul folosit la efectuarea platii online. Procesare in -48 ore lucratoare.</p>
          </div>


          
          <div className='bg-fundal_principal border border-bordura px-3 py-3 rounded-xl '>
            <div className='text-[12px] flex justify-end'>
              <p className='bg-hovr3 text-black font-bold px-3 py-0.5 rounded-full'>RECOMANDAT</p>
            </div>
            <div className='flex space-x-1.5 items-center text-hovr3 mt-4'>
              <CiDollar/>
              <p>Cardul Bancar Original</p>
            </div>
            <p className='text-text_secundar text-[14px] mt-3'>Rambursare direct pe cardul folosit la efectuarea platii online. Procesare in 24-48 ore lucratoare.</p>
          </div>


          <div className='bg-fundal_principal border border-bordura px-3 py-3 rounded-xl'>
            <div className='flex space-x-1.5 items-center text-butoane '>
              <CiBank/>
              <p>Transfer Cont IBAN</p>
            </div>
            <p className='text-text_secundar text-[14px] mt-3'>Ideal pentru comenzile achitate la livrare (ramburs cash). Introduci codul IBAN si titularul in formular.</p>
          </div>



        </div>
      </div>

      <div className='mt-8'>
        <p className='font-bold text-[22px]'>Regulament & Conditii Detaliate</p>
        <p className='text-[14px] text-text_secundar mt-1'>Apasa pe fiecare sectiune pentru a consulta detaliile specifice fiecarei categorii de produse.</p>

        <ul className='mt-3 space-y-3'>
          {
            [
              {
                id:1,
                nume: "1. Conditii Generale De Retur",
                text: "Conform OUG 34/2014, cumparatorul are dreptul sa se retraga din contractul de vanzare fara a preciza motivele, in termen de 14 zile. TechStore extinde acest drept la 30 de zile calendaristice gratuit pentru toti clientii inregistrati. Produsul returnat trebuie sa fie in aceeasi stare in care a fost livrat(in ambalajul original cu toate accesoriile etichetele intacte si documentele care l-au insotit)."
              },
              {
                id:2,
                nume: "2. Returul Componentelor & Produselor Electronice",
                text: "Laptop-uri, PC-uri, Monitoare si Componente IT pot fi returnate daca nu prezinta urme de socuri mecanice, zgarieturi sau lichide pe placile de baza. Este obligatoriu sa delogati toate conturile personale (Google, Apple ID, Microsoft, BIOS Password) inainte de a preda echipamentul."
              },
              {
                id:3,
                nume: "3. Produse Neeligibile pentru Retur",
                text: "Sunt exceptate de la dreptul de retur: Licentele de software livrate electronic (ESD) activate, castile in-ear desigilate din motive de igiena, consumabilele desigilate (cartuse imprimanta, paste termice), precum si produsele aduse pe comanda speciala din afara stocului uzual."
              },
              {
                id:4,
                nume:"4. Termenul de Returnare a Banilor",
                text: "Rambursarea sumelor se face in cel mult 24-48 de ore lucratoare de la receptionarea si verificarea fizica a produsuli in centrul nostru logistic. Daca alegeti optiunea de Voucher Cadou, primiti un bonus automat de 5%, aplicat la intreaga valoare a produsului.."
              },
            ].map(reg=>(
              <li key={reg.id} className={`border px-3 py-3 rounded-xl bg-fundal_card border-bordura`}>
                <button onClick={()=>{setShowInfoReg(prev=>prev===reg.id?null:reg.id)}} className={`flex ${showInfoReg ===reg.id? "text-grad":"text-text_principal"} cursor-pointer items-center hover:text-grad transition-all duration-300 ease-in-out   space-x-3 justify-between w-full  `}>
                  <p className='text-start  font-bold text-[18px]'>{reg.nume}</p>
                  {
                    showInfoReg ===reg.id? <IoIosArrowUp className='text-text_secundar'/>: <IoIosArrowDown className='text-text_secundar'/>
                  }
                </button>

                <div className={`border-t transition-all duration-300 overflow-hidden ease-in-out border-t-bordura ${showInfoReg===reg.id?"max-h-100 opacity-100 mt-3":"max-h-0 opacity-0"}`}>
                  <p className='text-text_secundar mt-3 '>{reg.text}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>

      <div className='mt-8 border px-5 py-8 rounded-xl border-eroare/50 bg-eroare/15 flex items-center space-x-3'>
        <div className='px-3 py-3 border border-eroare/50 rounded-xl bg-eroare/15 text-eroare text-[19px]'>
          <BsExclamationTriangle/>
        </div>
        <div>
          <p className='font-bold '>Exceptii de la Dreptul de Retur (OUG 34/2014)</p>
          <p className='text-[14px] mt-1.5 text-text_secundar'>Din motive de igiena si protectie a sanatatii, castile in-ear desigilate, produsele de ingrijire personala folosite, licentele de software activate digital si produsele aduse pe comanda speciala personalizata nu pot fi returnate daca au fost desigilate.</p>
        </div>
      </div>


    </div>
  )
}

export default Retur
