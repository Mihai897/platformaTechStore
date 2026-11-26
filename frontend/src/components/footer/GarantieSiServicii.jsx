import React, { useState } from 'react'
import { FaArrowRight, FaCheck, FaLaptop, FaSearch, FaTruck } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa6'
import { FiPlusCircle } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";
import { IoClose, IoShieldOutline } from "react-icons/io5";
import { LuShieldPlus } from "react-icons/lu";
import { IoFlashOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CiApple } from "react-icons/ci";
import { IoTvOutline } from "react-icons/io5";
import { FiSmartphone } from "react-icons/fi";
import { LuHeadphones } from "react-icons/lu";

const GarantieSiServicii = () => {
  const [selectProdus,setSelectProdus]= useState(null);
  const exempleProduse = [
    {
      id:1,
      nume: "Laptop Gaming ROG (Garantie Activa)",
      nume_produs:"Laptop Gaming ASUS ROG Strix G16 (2025)",
      garantie: "activa",
      info_garantie: "GARANTIE ACTIVA PRODUCATOR",
      cod: "SN-88492024",
      factura: "FACT-2025-8820",
      data_achizitiei: "15 mai 2025",
      timp_garantie: 540,
      service_pick: "Eligibil Gratuit",
      status_acoperire: "Piese originale + Manopera 0 LEI"
    },
    {
      id:2,
      nume: "Casti Bose",
      nume_produs: "Casti Wireless Bose QuietComfort Ultra",
      garantie:"inactiva",
      info_garantie:"GARANTIE EXPIRATA",
      cod: "TS-9841",
      factura: "FACT-2023-1120",
      data_achizitiei: "19 Octombrie 2023",
      timp_garantie: 0,
      service_pick: "Contra Cost",
      status_acoperire: "Service Post-Garantie Disponibil"
    }
  ]

  const intrebarile = [
    {
      id:1,
      intrebare: "Cat dureaza procesul de reparatie in garantie?",
      raspuns: "Conform legislatiei în vigoare (Ordonanta de Urgenta nr. 140/2021), perioada maxima de reparatie este de 15 zile calendaristice din momentul in care produsul ajunge in centrul nostru service. In medie, 85% din produsele aduse in service-ul TechStore sunt reparate si expediate inapoi in 48-72 de ore lucratoare."
    },
    {
      id: 2,
      intrebare: "Ce fac Daca produsul a sosit defect din fabrica (DOA - Dead on Arrival)?",
      raspuns:"Daca produsul primit prezinta un defect functional neconform in primele 48 de ore de la receptie, este incadrat in categoria DOA. In acest caz, produsul se inlocuieste pe loc cu unul nou sigilat sau se ramburseaza integral suma achitata, fara a trece prin procedura standard de reparatie."
    },
    {
      id: 3,
      intrebare: "Ce situatii NU sunt acoperite de garantia standard?",
      raspuns:"Garantia standard nu acopera defectiunile cauzate de: socuri mecanice (caderi, loviri, ecrane sparte), contact cu lichide (pentru dispozitive fara certificare IP68), interventii neautorizate in alt service neacreditat, modificari de firmware/bios modificate ilegal sau daune cauzate de socuri electrice de la reteaua locala. Pentru aceste situatii recomandam pachetul Protectie Daune Accidentale."
    },
    {
      id: 4,
      intrebare: "Cum beneficiez de serviciul Gratuit Pick-Up & Return?",
      raspuns:"Este foarte simplu! Soliciti reparatia completand formularul RMA de pe aceasta pagina. In urma trimiterii, primesti AWB-ul generat automat. Curierul (Fan Courier sau Sameday) se va prezenta la adresa ta în ziua aleasa pentru a ridica coletul. Toate costurile de transport tur-retur sunt suportate integral de TechStore."
    }
  ];
  const [selectIntrebare,setSelectIntrebare] = useState(null);
  return (
    <div  >

      <div className='border border-bordura bg-fundal_card mb-10'>
        <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 py-20 flex modf5:space-x-8 max-modf5:space-y-8 items-start max-modf5:flex-col'>
          <div className='w-1/2 max-modf5:w-full'>
            <div className='flex'>
              <div className='flex items-center space-x-3 text-[12.5px] text-grad px-3 py-1 rounded-xl border border-bordura1 bg-grad/15'>
                <FaWrench/>
                <p className='font-bold'>Centru Tehnic Autorizat & Multi-Brand</p>
              </div>
            </div>

            <div className='text-[40px] max-modf4:text-[34px] font-bold mt-3'>
              <p>Garantie & Service Tehnic</p>
              <p className='bg-linear-to-r from-hovr3 via-butoane to-hovr3 bg-clip-text text-transparent'>Simplu, Rapid si 100% Transparent</p>
            </div>
            <p className='mt-3 text-text_secundar max-modf4:text-[15px]'>Diagnosticare gratuita in 24 de ore, reparare exclusiva cu piese originale de la producator si serviciul gratuit <span className='text-white'>Pick-Up & Return</span> pe intreg teritoriul romaniei.</p>

            <div className='flex items-center modf4:space-x-3 mt-6 max-modf4:flex-col max-modf4:space-y-3'>
              <button className='flex items-center space-x-3 border px-3 py-3 rounded-xl bg-butoane hover:-translate-y-0.5 text-black shadow-[0px_0px_10px_#0891b2] hover:bg-but_hover transition-all duration-300 ease-in-out border-bordura1 cursor-pointer'>
                <FiPlusCircle/>
                <p>Solicita Reparatie RMA</p>
              </button>
              <button className='flex items-center space-x-3 border px-3 py-3 rounded-xl bg-grad/15 hover:bg-grad/40 transition-all duration-300 ease-in-out border-bordura1 cursor-pointer'>
                <FaSearch className='text-grad'/>
                <p>Verifica Status Garantie</p>
              </button>
            </div>

            <div className='grid grid-cols-3 gap-3 mt-10'>
              <div>
                <p className='text-[22px] font-bold text-grad'>48 Ore</p>
                <p className='text-[14px] text-text_secundar'>Timp mediu de solutionare</p>
              </div>
              <div>
                <p className='text-[22px] font-bold text-butoane'>100%</p>
                <p className='text-[14px] text-text_secundar'>Piese Origine Garantate</p>
              </div>
              <div>
                <p className='text-[22px] font-bold text-hovr3'>0 Lei</p>
                <p className='text-[14px] text-text_secundar'>Cost Curier Pick-Up & Return</p>
              </div>
            </div>
          </div>


          <div className='w-1/2 max-modf5:w-full border px-6 py-6 rounded-xl border-bordura1 shadow-[0px_0px_15px_#08736b] bg-fundal_inp'>
            
            <div className='flex items-center space-x-3'>
              <div className='text-[26px] text-hovr3  bg-hovr3/10 px-3 py-3 rounded-xl  border border-bordura1'>
                <LuShieldCheck/>
              </div>
              <div>
                <p className='font-bold'>Cetru Service Autorizat TechStore</p>
                <p className='text-text_secundar text-[15px]'>Status in timp real pentru tichetele active</p>
              </div>
            </div>


            <div className='border-t-bordura1 mt-6 py-6 space-y-5 border-t'>


              <div className='flex items-center modf4:space-x-3 max-modf4:items-start max-modf4:space-y-2 justify-between border border-bordura1 px-3 py-3 rounded-xl text-[14px]  bg-fundal_card max-modf4:flex-col'>
                <div className='flex items-center space-x-3'>
                  <div className='w-4 h-4 animate-pulse rounded-full bg-green-400'></div>
                  <div>
                    <p className='font-bold'>RMA-2028-9921</p>
                    <p className='text-text_secundar'>Laptop Asus Gaming ROG Strix</p>
                  </div>
                </div>

                <div className='flex bg-green-400/10 text-green-400 text-[10px]  px-3 py-0.5 rounded-xl '>
                  <p>Reparatie Finalizata</p>
                </div>
              </div>

              <div className='flex items-center modf4:space-x-3 justify-between border border-bordura1 px-3 py-3 rounded-xl text-[14px] max-modf4:flex-col max-modf4:items-start max-modf4:space-y-2 bg-fundal_card'>
                <div className='flex items-center space-x-3'>
                  <div className='w-4 h-4  rounded-full bg-orange-400'></div>
                  <div>
                    <p className='font-bold'>RMA-2028-9940</p>
                    <p className='text-text_secundar'>Casti Sony WH-1000XMS</p>
                  </div>
                </div>

                <div className='flex bg-orange-400/10 text-orange-400 px-3 py-0.5 text-[10px] rounded-xl'>
                  <p>In Diagnosticare</p>
                </div>
              </div>

              <div className='flex items-center modf4:space-x-3 max-modf4:space-y-2 max-modf4:flex-col max-modf4:items-start justify-between border border-bordura1 px-3 py-3 rounded-xl text-[14px] bg-fundal_card'>
                <div className='flex items-center space-x-3'>
                  <div className='w-4 h-4  rounded-full bg-blue-400'></div>
                  <div>
                    <p className='font-bold'>RMA-2028-9952</p>
                    <p className='text-text_secundar'>Monitor Gaming Samsung Odyssey</p>
                  </div>
                </div>

                <div className='flex bg-blue-400/10 text-blue-400 text-[10px] px-3 py-0.5 rounded-xl'>
                  <p>Reparatie Finalizata</p>
                </div>
              </div>



            </div>

            <div className='flex max-modf4:flex-col max-modf4:space-y-2 items-center space-x-3 justify-between text-[14px]'>
              <p className='text-text_secundar'>Suport hotline tehnic: <span className='text-white'>0800 800 999</span></p>
              <button className='text-grad flex items-center space-x-3 hover:text-grad/80 cursor-pointer'>
                <p>Trimite Tichet Nou</p>
                <FaArrowRight/>
              </button>
            </div>


          </div>


          


        </div>
      </div>

      <div className='max-w-screen-2xl mx-auto px-14 mb-10  max-modf1:px-10  max-modf2:px-6'>
        <div className='mx-auto w-[65%] max-modf5:w-full text-center'>
          <p className='text-grad font-bold'>VERIFICARE INSTATA GARANTIE</p>
          <p className='text-[29px] font-bold mt-2'>Verifica Statusul Garantiei Produsului Tau</p>
          <p className='text-text_secundar mt-1'>Introdu numarul de serie (SN) inscriptionat pe produs sau numarul facturii/comenzii TechStore</p>

          <div className='mt-6 border px-3 py-3 rounded-xl bg-fundal_card border-bordura1'>
            <div className='flex items-center space-x-3'>
              <input className='w-full border px-3 py-2 rounded-xl outline-0 focus:ring-2 focus:ring-grad transition-all duration-300 ease-in-out border-bordura1 bg-fundal_inp placeholder:text-text_placeholder' type="text" placeholder='Ex: SN-88492024 sau Ts-98421...' value={exempleProduse.find(produs=>produs.id ===selectProdus)?.cod || ""} name="" id="" />
              <button className='flex items-center space-x-3 border px-3 py-2 rounded-xl bg-butoane text-black hover:bg-but_hover transition-all duration-300 ease-in-out cursor-pointer shrink-0'>
                <FaSearch/>
                <p>Verifica Garantia</p>
              </button>
            </div>

            <div className='flex items-center shrink-0 flex-wrap  space-x-3 text-[12px] mt-4 border-t border-t-bordura1 py-3'>
              <p className='mt-1.5'>Exemple demonstratrive rapide:</p>
              <button onClick={()=>{setSelectProdus(exempleProduse[0].id)}} className='flex mt-1.5 items-center space-x-1.5 bg-grad/20 rounded-xl border border-bordura1 px-3 py-0.75 cursor-pointer hover:bg-grad/30 transition-all duration-300 ease-in-out '>
                <FaLaptop className='text-grad'/>
                <p>Laptop Gaming ROG (Garantie Activa)</p>
              </button>

              
              <button onClick={()=>{setSelectProdus(exempleProduse[1].id)}} className='flex mt-1.5 items-center space-x-1.5 bg-grad/20 rounded-xl border border-bordura1 px-3 py-0.75 cursor-pointer hover:bg-grad/30 transition-all duration-300 ease-in-out '>
                <FaLaptop className='text-orange-400'/>
                <p>Casti Bose (Expirata)</p>
              </button>


            </div>
            
          </div>

          <ul className=' mt-6 '>
            {
              exempleProduse.map(ep=>(
                <li className={`border px-3 py-3 rounded-xl ${ep.timp_garantie===0?"border-orange-400":"border-grad"} bg-fundal_card   ${selectProdus ===ep.id?"block":"hidden"}`}>
                  <div className='flex modf1:items-center max-modf1:flex-col modf1:space-x-3 max-modf1:space-y-3 modf1:justify-between'>
                    <div className='text-start'>
                      <div className='flex'>
                        <p className={`text-[12px] font-bold px-3 py-0.5 rounded-full border-bordura1 border ${ep.timp_garantie ===0?"text-orange-400 bg-orange-400/15":"text-grad bg-grad/15"}`}>{ep.info_garantie}</p>
                      </div>
                      <p className='font-bold mt-3 text-[19px]'>{ep.nume_produs}</p>
                      <p className='text-text_secundar text-[14px]'>Factura: {ep.factura} &middot; Data Achizitie: {ep.data_achizitiei}</p>
                    </div>

                    <div className='modf1:text-end max-modf1:text-start'>
                      <p className={`${ep.timp_garantie===0?"text-orange-400":"text-grad"} font-bold text-[19px]`}>{ep.timp_garantie} Zile</p>
                      <p className='text-[14px] text-text_secundar'>Ramase din 24 Luni Total</p>
                    </div>
                  </div>

                  <div className='text-start grid grid-cols-2 max-modf1:grid-cols-1 gap-3 mt-3 border-t-bordura1 py-3 border-t'>
                    <div className='flex items-center space-x-3 text-[14px] border bg-fundal_inp border-bordura1 px-3 py-3 rounded-xl'>
                      <FaTruck className='text-grad text-[19px]'/>
                      <div >
                        <p className='font-bold'>Serviciu Pick-Up & Return</p>
                        <p className='text-text_secundar'>{ep.service_pick}</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-3 text-[14px] border bg-fundal_inp border-bordura1 px-3 py-3 rounded-xl'>
                      <LuShieldCheck className='text-hovr3 text-[19px]'/>
                      <div >
                        <p className='font-bold'>Serviciu Pick-Up & Return</p>
                        <p className='text-text_secundar'>{ep.status_acoperire}</p>
                      </div>
                    </div>
                  </div>

                  <div className='flex justify-end mt-3'>
                    <button className='flex items-center px-3 py-1.5 rounded-xl bg-grad cursor-pointer transition-all duration-300 ease-in-out hover:bg-grad/80 space-x-3 text-[14px]'>
                      <FaWrench/>
                      <p>Solicita Service RMA pentru acest produs</p>
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      
      <div className='border border-bordura bg-fundal_card mb-10'>
        <div className='max-w-screen-2xl mx-auto px-14   max-modf1:px-10 py-19  max-modf2:px-6'>
          <div className='text-center'>
            <p className='text-grad text-[15px] font-bold'>PROTECTIE EXTINSA FARA GRIJI</p>
            <p className='text-[28px] font-bold mt-1.5'>Pachetele de garantie TechStore Plus</p>
            <p className='text-[14px] text-text_secundar mt-1.5 w-[55%] max-modf3:w-full mx-auto'>Alege nivelul ideal de protectie pentru echipamentele tale premium. Extinde acoperirea standard sau adauga protectie la accidente.</p>
          </div>


          <ul className='grid grid-cols-3 max-modf5:grid-cols-2 max-modf1:grid-cols-1 gap-3 mt-8'>
            <li className='bg-fundal_inp border border-bordura1 px-5 py-5 rounded-xl'>
              <div className='text-[22px] flex'>
                <div className='shrink-0 bg-fundal_card px-3 py-3 rounded-xl border border-bordura1'>
                  <IoShieldOutline/>
                </div>
              </div>

              <p className='font-bold text-[19px] mt-1.5'>Garantie Standard</p>
              <p className='text-[15px] text-text_secundar'>Inclusa gratuit cu orice achizitie</p>

              <p className='mt-4 text-[19px] font-bold'>GRATUIT <span className='text-[14px] text-text_secundar font-normal'>/ 24 Luni</span></p>

              <ul className='mt-4'>
                <li className='flex items-center space-x-1.5 text-[15px]'>
                  <FaCheck className='text-grad'/>
                  <p className='text-text_secundar'>Pick-Up & Return gratuit pe tot teritoriul tarii</p>
                </li>
                <li className='flex items-center space-x-1.5 text-[15px]'>
                  <FaCheck className='text-grad'/>
                  <p className='text-text_secundar'>Piese de schimb 100% originale producator</p>
                </li>
                <li className='flex items-center space-x-1.5 text-[15px]'>
                  <FaCheck className='text-grad'/>
                  <p className='text-text_secundar'>Reparatie in maximum 15 zile calendaristice</p>
                </li>
                <li className='flex items-center space-x-1.5 text-[15px]'>
                  <IoClose className='text-text_secundar/40'/>
                  <p className='text-text_secundar/40'>Fara produs la schimb pe durata reparatiei</p>
                </li>
              </ul>

              <button className='mt-6 w-full text-[14px] bg-fundal_inp border border-bordura1 px-3 py-3 rounded-xl cursor-pointer hover:bg-gray-400/10 transition-all duration-300 ease-in-out'>Afla Detalii</button>
            </li>


            
            <li className='bg-fundal_inp border border-grad px-5 py-5 rounded-xl'>
              <div className='text-[22px] flex'>
                <div className='shrink-0 bg-fundal_card px-3 py-3 text-grad rounded-xl border border-bordura1'>
                  <LuShieldPlus/>
                </div>
              </div>

              <p className='font-bold text-[19px] mt-1.5'>Garantie Extinsa +12 / + 24 Luni</p>
              <p className='text-[15px] text-text_secundar'>Prelungeste garantia pentru laptopuri & spartphone-uri</p>

              <p className='mt-4 text-[19px] font-bold text-grad'>De la 99 Lei <span className='text-[14px] text-text_secundar font-normal'>/ produs</span></p>

              <ul className='mt-4'>
                <li className='flex items-center space-x-1.5 text-[15px]'>
                  <FaCheck className='text-grad'/>
                  <p className='text-text_secundar'>Toate beneficiile Garantiei Standard</p>
                </li>
                <li className='flex items-center space-x-1.5 text-[15px]'>
                  <FaCheck className='text-grad'/>
                  <p className='text-text_secundar'>Inlocuire pe loc daca reparatia depaseste 5 zile</p>
                </li>
                <li className='flex items-center space-x-1.5 text-[15px]'>
                  <FaCheck className='text-grad'/>
                  <p className='text-text_secundar'>Protectie avansata la flucutatii de supratensiune</p>
                </li>
                <li className='flex items-center space-x-1.5 text-[15px]'>
                  <FaCheck className='text-grad'/>
                  <p className='text-text_secundar'>Prioritate VIP in diagnosticare (Sub 12 ore)</p>
                </li>
              </ul>

              <button className='mt-6 w-full text-[14px] bg-grad border border-bordura1 px-3 py-3 rounded-xl cursor-pointer hover:bg-grad/80 transition-all duration-300 ease-in-out'>Adauga Garantie Extinsa In Cos</button>
            </li>


            <li className='bg-fundal_inp border border-bordura1 px-5 py-5 rounded-xl'>
              <div className='text-[22px] flex'>
                <div className='shrink-0 bg-fundal_card px-3 py-3 rounded-xl border border-bordura1 text-hovr3'>
                  <IoFlashOutline/>
                </div>
              </div>

              <p className='font-bold text-[19px] mt-1.5'>Protectie Daune Accidentale</p>
              <p className='text-[15px] text-text_secundar'>Acopera riscurile neprevazute de utilizare zilnica</p>

              <p className='mt-4 text-[19px] font-bold'>De la 149 LEI <span className='text-[14px] text-text_secundar font-normal'>/ an</span></p>

              <ul className='mt-4'>
                <li className='flex items-center space-x-1.5 text-[15px]'>
                  <FaCheck className='text-grad'/>
                  <p className='text-text_secundar'>Acoperire la caderi accidentale si ecrane sparte</p>
                </li>
                <li className='flex items-center space-x-1.5 text-[15px]'>
                  <FaCheck className='text-grad'/>
                  <p className='text-text_secundar'>Infiltratii accidentale de lichide (apa, cafea)</p>
                </li>
                <li className='flex items-center space-x-1.5 text-[15px]'>
                  <FaCheck className='text-grad'/>
                  <p className='text-text_secundar'>Inlocuirea baterie uzata gratis la final de 12 luni</p>
                </li>
                <li className='flex items-center space-x-1.5 text-[15px]'>
                  <IoClose className='text-text_secundar/40'/>
                  <p className='text-text_secundar/40'>Trnasport Curier tur-retur rapid</p>
                </li>
              </ul>
              <button className='mt-6 w-full text-[14px] bg-fundal_inp border border-bordura1 px-3 py-3 rounded-xl cursor-pointer hover:bg-gray-400/10 transition-all duration-300 ease-in-out'>Alege Protectie Daune</button>
            </li>



          </ul>
        </div>
      </div>


      <div className='max-w-screen-2xl mx-auto px-14 mb-10  max-modf1:px-10  max-modf2:px-6 '>
        <div className='text-center'>
          <p className='text-grad text-[15px] font-bold'>FLUX SIMPLIFICAT RMA</p>
          <p className='text-[28px] font-bold mt-1.5'>Cum functioneaza Service-ul TechStore?</p>
          <p className='text-[14px] text-text_secundar mt-1.5 w-[55%] max-modf4:w-full mx-auto'>Procedura noastra Pick-Up Return iti economiseste timpul. Totul se rezolva in 4 pasi simpli.</p>
        </div>

        <ul className='grid grid-cols-4 max-modf5:grid-cols-2 max-modf1:grid-cols-1 mt-10 gap-3'>
          <li className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura1'>
            <span className='bg-grad px-3 py-1 font-bold text-black rounded-xl text-[22px]'>1</span>

            <p className='mt-3 text-[16px] font-bold'>Solicitare Online RMA</p>
            <p className='text-text_secundar mt-3 text-[14px]'>Completezi formularul online de service in mai putin de 2 minute specificand adresa de preluare.</p>
          </li>
          <li className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura1'>
            <span className='bg-grad px-3 py-1 font-bold text-black rounded-xl text-[22px]'>2</span>

            <p className='mt-3 text-[16px] font-bold'>Curier Gratuit (Pick-Up)</p>
            <p className='text-text_secundar mt-3 text-[14px]'>Curierul partener vine la usa ta si ridica produsul ambalat corespunzator. Cost transport: 0 LEI.</p>
          </li>
          <li className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura1'>
            <span className='bg-grad px-3 py-1 font-bold text-black rounded-xl text-[22px]'>3</span>

            <p className='mt-3 text-[16px] font-bold'>Diagnostic & Reparatie</p>
            <p className='text-text_secundar mt-3 text-[14px]'>Technicienii certificati diagnosticheaza defectul si inlocuiesc componentele defecte cu piese noi.</p>
          </li>
          <li className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura1'>
            <span className='bg-grad px-3 py-1 font-bold text-black rounded-xl text-[22px]'>4</span>

            <p className='mt-3 text-[16px] font-bold'>Testare & Returnare</p>
            <p className='text-text_secundar mt-3 text-[14px]'>Efectueaza teste riguroase de calitate si iti trimitem produsul inapoi, perfect functional si curatat.</p>
          </li>
        </ul>
        
        <div className='flex justify-center'>
          <button className='flex items-center bg-grad px-3 py-3 rounded-xl mt-7 space-x-3 text-black font-medium cursor-pointer hover:bg-grad/80 transition-all duration-300 ease-in-out'>
            <FaWrench/>
            <p>Deschide Solicitare Reparatie Acum</p>
          </button>
        </div>
      </div>

      <div className='max-w-screen-2xl mx-auto px-14 mb-10  max-modf1:px-10  max-modf2:px-6 '>
        <div className='px-8 py-8 border rounded-xl border-bordura1 bg-fundal_card flex modf1:items-center modf1:space-x-3 max-modf1:flex-col max-modf1:space-y-3 modf1:justify-between'>
          <div>
            <span className='text-grad text-[14px] bg-fundal_inp px-3 py-0.5 rounded-xl border border-bordura1'>Serviciu Rapid RMA</span>
            <p className='mt-3 text-[28px] font-bold'>Ai un produs defect sau care necesita service?</p>
            <p className='text-[14px] text-text_secundar mt-1.5 w-[60%] max-modf5:w-full'>Completeaza cererea online, iar noi trimitem curierul sa ridice pachetul direct de la tine de acasa, fara costuri suplimentare.</p>
          </div>
          <div className='shrink-0'>
            <button className='flex items-center space-x-3 bg-grad  px-3 py-1.5 rounded-xl border border-bordura1 cursor-pointer transition-all duration-300 ease-in-out hover:bg-grad/80 hover:scale-105'>
              <FaTruck/>
              <p>Trimite Produsul in Service</p>
            </button>
          </div>
        </div>
      </div>

      <div className='border border-bordura bg-fundal_card mb-10'>
        <div className='max-w-screen-2xl mx-auto px-14 py-10  max-modf1:px-10  max-modf2:px-6 max-mod'>
          <div className='text-center'>
            <p className='text-grad text-[15px] font-bold'>RASPUNSURI LA INTREBARI FRECVENTE</p>
            <p className='text-[28px] font-bold mt-1.5'>Intrebari si Raspunsuri despre Garantie</p>
            <p className='text-[14px] text-text_secundar mt-1.5 w-[55%] max-modf4:w-full mx-auto'>Gaseste rapid informatiile legale si procedurale de care ai nevoie.</p>
          </div>

          
          <ul className='mt-6 space-y-4'>
            {
              intrebarile.map(i=>(
                <li className='w-[80%] max-modf:w-full mx-auto bg-fundal_inp px-3 py-3 rounded-xl overflow-hidden border  border-bordura1'>
                  <button onClick={()=>{
                  setSelectIntrebare(i.id===selectIntrebare?null:i.id)
                }}  className='flex w-full justify-between  cursor-pointer items-center space-x-3'>
                    <p>{i.intrebare}</p>
                    {selectIntrebare === i.id?<IoIosArrowUp/>:<IoIosArrowDown/>}
                  </button>
                  <div className={`${selectIntrebare===i.id?"max-h-100 opacity-100 mt-3":"max-h-0 mt-0 opacity-0"} transition-all duration-300 ease-in-out   text-[14px] overflow-hidden text-text_secundar`}>
                    <p>{i.raspuns}</p>
                  </div>
                </li>
              ))
            }
          </ul>


        </div>
      </div>
      
      <div className='max-w-screen-2xl mx-auto px-14 mb-10  max-modf1:px-10  max-modf2:px-6 '>
        <p className='text-center text-[14px] font-bold text-text_secundar'>CENTRU AUTORIZAT PARTENER & LOGISTICA OFICIALA</p>

        <ul className='mt-5 flex flex-wrap space-x-10'>
          <li className='flex text-[21px] mt-1.5 text-text_secundar font-bold items-center space-x-3 shrink-0'>
            <FaLaptop/>
            <p>ASUS ROG</p>
          </li>
          <li className='flex text-[21px] mt-1.5 text-text_secundar font-bold items-center space-x-3 shrink-0'>
            <CiApple/>
            <p>Apple Service</p>
          </li>
          <li className='flex text-[21px] mt-1.5 text-text_secundar font-bold items-center space-x-3 shrink-0'>
            <IoTvOutline/>
            <p>Lenovo Pro</p>
          </li>
          <li className='flex text-[21px] mt-1.5 text-text_secundar font-bold items-center space-x-3 shrink-0'>
            <FiSmartphone/>
            <p>Samsung Care</p>
          </li>
          <li className='flex text-[21px] mt-1.5 text-text_secundar font-bold items-center space-x-3 shrink-0'>
            <LuHeadphones/>
            <p>Bose Official</p>
          </li>
          <li className='flex text-[21px] mt-1.5 text-text_secundar font-bold items-center space-x-3 shrink-0'>
            <FaTruck/>
            <p>Fan Courier / Sameday</p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default GarantieSiServicii
