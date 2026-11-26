import React, { useState } from 'react'
import { FaLock, FaRegCalendar, FaRegClock, FaShieldAlt, FaUserCog } from 'react-icons/fa'
import { FaUserXmark } from 'react-icons/fa6'
import { IoFlash } from 'react-icons/io5'
import { LuDot } from 'react-icons/lu'
import { MdBlockFlipped } from 'react-icons/md'

const PoliticaDeCofidentialitate = () => {

  const sectiunile = [
    {
      id:1,
      sectiunea:"sectiune-1",
      nume: "1. Ce date Colectam"
    },
    {
      id:2,
      sectiunea:"sectiune-2",
      nume: "2. Scopul Prelucrarii Datelor"
    },
    {
      id:3,
      sectiunea:"sectiune-3",
      nume: "3. Stocarea si Securitatea"
    },
    {
      id:4,
      sectiunea:"sectiune-4",
      nume: "4. Drepturile Tale GDPR"
    },
    {
      id:5,
      sectiunea:"sectiune-5",
      nume: "5. Cookie-uri & Tracking"
    },
    {
      id:6,
      sectiunea:"sectiune-6",
      nume: "6. Partajarea cu Terti"
    },
    {
      id:7,
      sectiunea:"sectiune-7",
      nume: "7. Contact Responsabil DPO"
    },
    
  ]
  const [selectSection,setSelectSection] = useState(null);
  return (

    <div>
      <div className='bg-fundal_card border border-bordura mb-10'>
        <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 py-10'>


          <div className='flex'>
            <div className='flex px-3 py-0.5 rounded-full items-center space-x-2 text-[12px] bg-grad/30'>
              <FaShieldAlt/>
              <p>Conformitate Regulament UE 2016/679</p>
            </div>
          </div>

          <p className='font-bold mt-3 text-[38px]'>Politica de Confidentialitate</p>
          <p className='text-text_secundar w-[60%] max-modf:w-full'>Protectia datelor tale cu caracter personal este o prioritate fundamentala pentru TechStore. Afla cum colectam, utilizam, protejam si iti garantam drepturile.</p>

          <div className='flex items-center space-x-3 text-[12px] text-text_secundar mt-3'>
            <div className='flex items-center space-x-3'>
              <FaRegCalendar/>
              <p>Ultimul update: 15 ianuarie 2026</p>
            </div>
            <LuDot/>
            <div className='flex items-center space-x-3'>
              <FaRegClock/>
              <p>Timp lectura: ~6 min</p>
            </div>
          </div>


          <div className='flex justify-center mt-6'>
            <div className='grid grid-cols-4 gap-3 max-modf:grid-cols-2 max-modf4:grid-cols-1'>
              <div className='flex items-center space-x-3 text-[12px] bg-fundal_inp px-3 py-3 rounded-xl border border-bordura1'>
                <div className='text-[18px] bg-grad/15 px-3 py-3 rounded-xl border border-bordura1'>
                  <FaLock/>
                </div>
                <div>
                  <p className='font-bold'>Criptare AES 256-bit</p>
                  <p className='text-text_secundar'>Toate datele sunt securizate bancar</p>
                </div>

              </div>



              <div className='flex items-center space-x-3 text-[12px] bg-fundal_inp px-3 py-3 rounded-xl border border-bordura1'>
                <div className='text-[18px] bg-hovr/15 px-3 py-3 rounded-xl border text-hovr border-bordura1'>
                  <MdBlockFlipped/>
                </div>
                <div>
                  <p className='font-bold'>Zero Vanzare terti</p>
                  <p className='text-text_secundar'>Nu vindem datele tale niciodata</p>
                </div>

              </div>



              <div className='flex items-center space-x-3 text-[12px] bg-fundal_inp px-3 py-3 rounded-xl border border-bordura1'>
                <div className='text-[18px] bg-hovr1/15 px-3 py-3 rounded-xl border text-hovr1 border-bordura1'>
                  <FaUserXmark/>
                </div>
                <div>
                  <p className='font-bold'>Dreptul de a fi Uitat</p>
                  <p className='text-text_secundar'>Stergere cont & date la cerere</p>
                </div>

              </div>



              <div className='flex items-center space-x-3 text-[12px] bg-fundal_inp px-3 py-3 rounded-xl border border-bordura1'>
                <div className='text-[18px] bg-hovr3/15 px-3 py-3 rounded-xl border text-hovr3 border-bordura1'>
                  <FaUserCog/>
                </div>
                <div>
                  <p className='font-bold'>DPO Dedicat</p>
                  <p className='text-text_secundar'>Ofiter specializat de protectie</p>
                </div>

              </div>







            </div>
          </div>

        </div>
      </div>

      <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 mb-10 flex modf:space-x-6 max-modf:flex-col max-modf:space-y-3 modf:items-start'>


        <div className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura1 w-105 modf:sticky max-modf:w-full top-3'>
          <p className='font-bold text-[14px]'>CUPRINS DOCUMENT</p>
          <ul className='space-y-1.5 mt-3 text-[13px]'>
            {
              sectiunile.map(s=>(
                <li key={s.id} className=''>
                  <a onClick={()=>setSelectSection(s.id)} href={`#${s.sectiunea}`} className='cursor-pointer'>
                    <p className={`${selectSection===s.id? 'text-grad':"text-text_principal"} hover:text-grad transition-all duration-300 ease-in-out px-3 py-1.5`}>{s.nume}</p>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='w-full space-y-6'>
          <section id='sectiune-1' className='bg-fundal_card w-full px-3 py-3 rounded-xl border border-bordura1 scroll-mt-3'>
            <div className='flex items-center space-x-3 pb-5 border-b border-b-bordura'>
              <p className='font-bold px-3.5 py-2 rounded-xl border border-bordura1 bg-fundal_inp'>1</p>
              <p className='font-bold text-[21px]'>Ce date Colectam Despre Tine</p>
            </div>

            <div className='mt-5 px-3 py-3 bg-fundal_inp rounded-r-xl border-l-3 border-grad '>
              <div className='text-grad flex space-x-3 items-center font-bold'>
                <IoFlash/>
                <p>SUMAR PE SCURT (TL;DR):</p>
              </div>
              <p className='mt-3 text-text_secundar'>Colectam doar datele strict necesare pentru a-ti livra comenzile (nume, adresa, telefon, email) si date tehnice automate (IP, browser) pentru securitatea site-ului.</p>
            </div>

            <p className='mt-3 text-gray-400'>Atunci cand utilizezi platforma TechStore, colectam diferite categorii de date cu caracter personal:</p>

            <div className='grid text-[14px] grid-cols-2 gap-3 max-modf4:grid-cols-1'>
              <div className='mt-3 px-3 py-3 bg-fundal_inp rounded-lg border border-bordura1'>
                <p className='font-bold'>DATE FURNIZATE DIRECT</p>
                <ul className='text-text_secundar list-disc ml-3 mt-1'>
                  <li>Nume si prenume complet</li>
                  <li>Adresa de livrare si facturare</li>
                  <li>Numar de telefon de contact</li>
                  <li>Adresa de e-mail</li>
                  <li>Date de facturare(CUI/CIF pentru firme)</li>
                </ul>
              </div>
              <div className='mt-3 px-3 py-3 bg-fundal_inp rounded-lg border border-bordura1'>
                <p className='font-bold'>DATE COLECTATE AUTOMAT</p>
                <ul className='text-text_secundar list-disc ml-3 mt-1'>
                  <li>Adresa IP si tipul dispozitivului</li>
                  <li>Browser-ul si sistemul de operare</li>
                  <li>Istoricul de navigare in magazin</li>
                  <li>Cookie-uri si identificatori de sesiune</li>
                  <li>Sursa de trafic / Referral URLs</li>
                </ul>
              </div>

              
            </div>


          </section>


          <section id='sectiune-2' className='bg-fundal_card w-full px-3 py-3 rounded-xl border border-bordura1 scroll-mt-3'>
            <div className='flex items-center space-x-3 pb-5 border-b border-b-bordura'>
              <p className='font-bold px-3.5 py-2 rounded-xl border border-bordura1 bg-fundal_inp'>2</p>
              <p className='font-bold text-[21px]'>Scopul si Temeiul Legal al Prelucrarii</p>
            </div>


            <div className='mt-5 px-3 py-3 bg-fundal_inp rounded-r-xl border-l-3 border-grad'>
              <div className='text-grad flex space-x-3 items-center font-bold'>
                <IoFlash/>
                <p>SUMAR PE SCURT (TL;DR):</p>
              </div>
              <p className='mt-3 text-text_secundar'>Utilizam datele pentru a procesa comenzile (executare contract), pentru facturare ( obligatie legala) si doar cu acordul tau pentru newslettere de marketing.</p>
            </div>

            <p className='mt-3 text-gray-400'>Conform Articolului 6 din Regulamentul GDPR, procesam datele tale in baza urmatoarelor temeiuri legale:</p>
            <ul className='text-[14px] mt-3 space-y-3'>
              <li className='bg-fundal_inp px-3 py-3 border border-bordura1 rounded-lg'>
                <p className='font-bold'>1. EXECUTAREA CONTRACTULUI (ART.6 LIT.B)</p>
                <p className='text-text_secundar'>Procesarea comenzii, confirmarea stocului, expedierea prin curierat rapid, emiterea garantiilor si asigurarea suportului post-vanzare.</p>
                
              </li>
              <li className='bg-fundal_inp px-3 py-3 border border-bordura1 rounded-lg'>
                <p className='font-bold'>2. OBLIGATIE LEGALA (ART.6 LIT.C)</p>
                <p className='text-text_secundar'>Intocmirea documentelor financiar-contabile, evidenta fiscala si respectarea legislatiei privind protectia consumatorilor.</p>
                
              </li>
              <li className='bg-fundal_inp px-3 py-3 border border-bordura1 rounded-lg'>
                <p className='font-bold'>3. CONSIMTAMANT EXPLICIT (ART. 6 LIT.A)</p>
                <p className='text-text_secundar'>Trimiterea de oferte personalizate, newstlettere, alerte de stoc si campanii de remarketing. Iti poti retrage consimtamantul oricand.</p>
                
              </li>
            </ul>

          </section>

          <section id='sectiune-3' className='bg-fundal_card w-full px-3 py-3 rounded-xl border border-bordura1 scroll-mt-3'>
            <div className='flex items-center space-x-3 pb-5 border-b border-b-bordura'>
              <p className='font-bold px-3.5 py-2 rounded-xl border border-bordura1 bg-fundal_inp'>3</p>
              <p className='font-bold text-[21px]'>Stocarea si Securitatea Datelor</p>
            </div>


            <div className='mt-5 px-3 py-3 bg-fundal_inp rounded-r-xl border-l-3 border-grad'>
              <div className='text-grad flex space-x-3 items-center font-bold'>
                <IoFlash/>
                <p>SUMAR PE SCURT (TL;DR):</p>
              </div>
              <p className='mt-3 text-text_secundar'>Stocam datele pe servere securizate in Uniunea Europeana. Facturile sunt pastrate 10 ani conform legii fiscale, iar datele de cont pana la stergerea de catre tine.</p>
            </div>

            <p className='mt-3 text-gray-400'>Aplicatia TechStore utilizeaza masuri tehnice si organizatorice avansate:</p>

            <ul className='mt-3 list-disc ml-5 text-text_secundar text-[14px]'>
              <li>Servere cu redundanta gazduite in centre de date ISO 27001 din Uniunea Europeana.</li>
              <li>Criptare SSL/TLS pe 256 de biti pentru toate transferurile de date din site.</li>
              <li>Acces stric restrictionat pe baza de roluri pentru angajatii TechStore.</li>
              <li>Audituri periodice de securitate si teste de penetrare impotriva vulnerabilitatilor.</li>
            </ul>

          </section>
          <section id='sectiune-4' className='bg-fundal_card w-full px-3 py-3 rounded-xl border border-bordura1 scroll-mt-3'>
             <div className='flex items-center space-x-3 pb-5 border-b border-b-bordura'>
              <p className='font-bold px-3.5 py-2 rounded-xl border border-bordura1 bg-fundal_inp'>4</p>
              <p className='font-bold text-[21px]'>Drepturile Tale Conform GDPR</p>
            </div>


            <div className='mt-5 px-3 py-3 bg-fundal_inp rounded-r-xl border-l-3 border-grad'>
              <div className='text-grad flex space-x-3 items-center font-bold'>
                <IoFlash/>
                <p>SUMAR PE SCURT (TL;DR):</p>
              </div>
              <p className='mt-3 text-text_secundar'>Ai dreptul sa vezi ce date avem, sa le modifici, sa le descarci sau sa ne ceri stergerea lor definitiva in orice moment.</p>
            </div>

            <div className='grid grid-cols-2 text-[14px] gap-3'>
              <div className='mt-3 px-3 py-3 bg-fundal_inp rounded-lg border border-bordura1'>
                <p className='font-bold'>Dreptul de Acces:</p>
                <p className='text-text_secundar'>Poti solicita o copie a tuturor datelor personale pe care le detinem.</p>
              </div>
              <div className='mt-3 px-3 py-3 bg-fundal_inp rounded-lg border border-bordura1'>
                <p className='font-bold'>Dreptul la Rectificare:</p>
                <p className='text-text_secundar'>Poti corecta datele direct din cont sau contactandu-ne.</p>
              </div>
              <div className='mt-3 px-3 py-3 bg-fundal_inp rounded-lg border border-bordura1'>
                <p className='font-bold'>Dreptul la Stergere:</p>
                <p className='text-text_secundar'>Dreptul de a fi uitat - Stergerea definitva a profilului tau.</p>
              </div>
              <div className='mt-3 px-3 py-3 bg-fundal_inp rounded-lg border border-bordura1'>
                <p className='font-bold'>Dreptul la Portabilitate:</p>
                <p className='text-text_secundar'>Descarca datele intr-un format structurat si lizibil.</p>
              </div>
            </div>

          </section>
          <section id='sectiune-5' className='bg-fundal_card w-full px-3 py-3 rounded-xl border border-bordura1 scroll-mt-3'>
            <div className='flex items-center space-x-3 pb-5 border-b border-b-bordura'>
              <p className='font-bold px-3.5 py-2 rounded-xl border border-bordura1 bg-fundal_inp'>5</p>
              <p className='font-bold text-[21px]'>Plotiica de Cookie-uri & Tracking</p>
            </div>

            <p className='mt-5 text-gray-400'>Cookie-urile sunt fisiere text de mici dimensiuni stocate pe dispozitivul tau pentru a imbunatati experienta de navigare, a pastra produsele in cos si a analiza traficul.</p>

          </section>
          <section id='sectiune-6' className='bg-fundal_card w-full px-3 py-3 rounded-xl border border-bordura1 scroll-mt-3'>
            <div className='flex items-center space-x-3 pb-5 border-b border-b-bordura'>
              <p className='font-bold px-3.5 py-2 rounded-xl border border-bordura1 bg-fundal_inp'>6</p>
              <p className='font-bold text-[21px]'>Partajarea Datelor cu Terti</p>
            </div>
            
            <p className='text-gray-400 mt-5'>Nu vindem si nu inchiriem datele tale personale. Partajam date doar cu furnizor de servicii contractuali de incredere:</p>
            <ul className='list-disc ml-5 text-gray-400 mt-3 text-[14px]'>
              <li>Servicii de Curierat(FAN courier, Sameday, Cargus)</li>
              <li>Procesatori de plati</li>
              <li>Platforme SMS & Email</li>
            </ul>

          </section>
          <section id='sectiune-7' className='bg-fundal_card w-full px-3 py-3 rounded-xl border border-bordura1 scroll-mt-3'>
            <div className='flex items-center space-x-3 pb-5 border-b border-b-bordura'>
              <p className='font-bold px-3.5 py-2 rounded-xl border border-bordura1 bg-fundal_inp'>7</p>
              <p className='font-bold text-[21px]'>Contract Responsabil Protectia Datelor (DPO)</p>
            </div>

            <p className='text-gray-400 mt-5'>Pentru orice intrebari, clarificari sau solicitari legate de datele tale personale, poti contracta direct Ofiterul nostru pentru Protectia Datelor:</p>
            <p className='mt-3 text-text_secundar text-[14px] border border-bordura1 px-3 py-3 rounded-xl'>Email DPO Dedicat: <span className='text-grad'>dpo@techstore.ro</span> (Termen de raspuns in maxim 30 de zile)</p>
          </section>
        </div>


      </div>



      
    </div>
  )
}

export default PoliticaDeCofidentialitate
