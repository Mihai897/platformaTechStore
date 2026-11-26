import React, { useState } from 'react'
import { BsSearch, BsShieldCheck, BsTruck } from 'react-icons/bs'
import { MdOutlineFileDownload } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import { GrCube } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import { GoShield } from "react-icons/go";
import { GoGlobe } from "react-icons/go";

const TermeniSiConditii = () => {
  const sectiuni = [
    {
      id: 1,
      sectiunea: "sectiunea-1",
      nume: "1. Dispotizitii Generale & Informatii Legale"
    },
    {
      id: 2,
      sectiunea: "sectiunea-2",
      nume: "2. Crearea Contului & Securitatea"
    },
    {
      id: 3,
      sectiunea: "sectiunea-3",
      nume: "3. Plasarea si Acceptarea Comenzilor"
    },
    {
      id: 4,
      sectiunea: "sectiunea-4",
      nume: "4. Preturi, Facturare si Modalitati de plata"
    },
    {
      id: 5,
      sectiunea: "sectiunea-5",
      nume: "5. Livrarea si Transportul Produselor"
    },
    {
      id: 6,
      sectiunea: "sectiunea-6",
      nume: "6. Dreptul de Retur (14 zile) & Politica de Anulare"
    },
    {
      id: 7,
      sectiunea: "sectiunea-7",
      nume: "7. Garantii si Service"
    },
    {
      id: 8,
      sectiunea: "sectiunea-8",
      nume: "8. Proprietate Intelectuala"
    },
    {
      id: 9,
      sectiunea: "sectiunea-9",
      nume: "9. Protectia Datelor Personale (GDPR)"
    },
    {
      id: 10,
      sectiunea: "sectiunea-10",
      nume: "10. Litigii, ANPC & Solutionare SAL/SOL"
    }
  ];
  const [selectSectiune,setSelectSectiune] = useState(null);
  return (
    <div className='max-w-screen-2xl mx-auto px-14 max-modf1:px-10  max-modf2:px-6 py-10'>
      <div className='border px-5 py-8 rounded-xl border-bordura bg-fundal_card'>
        <div className='flex'>
          <div className='flex px-3 py-0.5 rounded-xl border border-bordura1 items-center space-x-1.5 text-[14px] text-grad bg-grad/15'>
            <BsShieldCheck/>
            <p>Cadru Legal si Transparenta</p>
          </div>
        </div>

        <p className='text-[44px] text-center font-bold'>Termeni si Conditii de Utilizare</p>
        <p className='text-center mt-3 mx-auto text-text_secundar w-[80%]'>Ultima actualizare: <span className='text-text_principal'>16 Octombrie 2026</span>. Va rugam sa cititi cu atentie acest document inainte de a utiliza serviciile noastre, plasarea unei comenzi echivaland cu acceptarea tuturor clauzelor prezentate.</p>

        <div className='flex mt-8 modf1:space-x-3 w-[80%] mx-auto items-center max-modf1:flex-col max-modf1:w-full max-modf1:space-y-3'>
          <div className='w-full relative'>
            <input className='border pl-10 pr-3 py-3 rounded-xl border-bordura outline-0 focus:ring-2 focus:ring-grad transition-all duration-300 ease-in-out placeholder:text-text_placeholder bg-fundal_inp w-full ' type="text" placeholder='Cauta in termeni (ex: retur, garantie,livrare, ANPC)...' name="" id="" />
            <BsSearch className='absolute text-grad left-3 top-1/2 -translate-y-1/2 '/>
          </div>
          <button className=' text-[14px] w-34 hover:bg-text_secundar/30 transition-all duration-300 ease-in-out border border-bordura1 shrink-0 bg-fundal_inp py-3 rounded-xl cursor-pointer flex items-center space-x-1.5 justify-center'>
            <MdOutlineFileDownload className='text-grad text-[19px]'/>
            <p>Descarca PDF</p>  
          </button>
        </div>
      </div>


      <div className='mt-8 flex modf:space-x-6 items-start'>

        <div className='sticky max-modf:hidden top-3 w-125 border px-3 py-3 rounded-xl border-bordura bg-fundal_card'>
          <div className='flex items-center space-x-3 justify-between pb-3'>
            <p className='font-bold'>CUPRINS SUMAR</p>
            <p className='text-[12px] bg-grad/15 px-3 py-0.5 rounded-full'>10 Sectiuni</p>
          </div>

          <div className='border-t pt-3 border-t-bordura text-[14px]  '>

            <ul className='space-y-2'>
              {
                sectiuni.map(s=>(
                  <li key={s.id} >
                    <a href={`#${s.sectiunea}`} onClick={(e)=>{
                      e.preventDefault();
                      setSelectSectiune(s.id);
                      document.getElementById(s.sectiunea)?.scrollIntoView()
                    }} className='cursor-pointer  ' >
                      <p className={`px-3 hover:text-grad transition-all duration-300 ease-in-out ${selectSectiune ===s.id?"text-grad":"text-text_secundar"}`}>{s.nume}</p>
                    </a>
                  </li>
                ))
              }
            </ul>
            
            
           
          </div>
        </div>


        <div className='w-full space-y-5'>
          
          <section id='sectiunea-1' className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura w-full scroll-mt-3'>
            <div className='flex items-center space-x-3'>
              <p className='text-grad font-bold px-3 py-2  bg-fundal_inp rounded-xl'>01</p>
              <p className='text-[22px] font-bold'>Dispozitii Generale & Informatii Legale</p>
            </div>
            <p className='mt-3 text-[14px] text-text_secundar'>Prezentul document stabileste termenii si conditiile de utilizare a site-ului web TechStore.ro si conditiile de achizitionare a produselor si serviciilor comercializate prin intermediul acestuia.</p>
            <p className='mt-3 text-[14px] text-text_secundar'>Site-ul este administrat si operat de catre S.C. TECHSTORE GROUP S.R.L., persoana juridica de nationalitate romana, avand sediul social in Bucuresti, Bd. Timisoara nr. 26, Sector 6, inregistrata la Registrul Comertului sub nr. J40/1234/2020, Cod Unic de inregistrare Fiscala RO12345678, capital social varsat 100.000 LEI.</p>

            <div className='bg-fundal_inp mt-4 px-3 py-3 rounded-xl border border-bordura1 text-[14px]'>
              <p className='font-bold'>DEFINITII CHEIE</p>
              <ul className='space-y-1.5 mt-1.5 list-disc ml-5'>
                <li className='text-text_secundar'><span className='text-text_principal font-medium'>Vanzator: </span>S.C. TECHSTORE GROUP S.R.L.</li>
                <li className='text-text_secundar'><span className='text-text_principal font-medium'>Cumparator: </span>Orice persoana fizica (peste 18 ani) sau juridica care plaseaza o comanda.</li>
                <li className='text-text_secundar'><span className='text-text_principal font-medium'>Site: </span>Domeniul www.techstore.ro si subdomeniile acestuia.</li>
                <li className='text-text_secundar'><span className='text-text_principal font-medium'>Contract: </span>Contractul la distanta incheiat intre Vanzator si Cumparator, fara prezenta fizica simultana.</li>
              </ul>
            </div>
          </section>



          <section id='sectiunea-2' className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura w-full scroll-mt-3'>
            <div className='flex items-center space-x-3'>
              <p className='text-grad font-bold px-3 py-2  bg-fundal_inp rounded-xl'>02</p>
              <p className='text-[22px] font-bold'>Crarea Contului & securitatea</p>
            </div>
            <p className='mt-3 text-[14px] text-text_secundar'>Pentru a efectua achizitii pe TechStore, Cumparatorul isi poate crea un Cont de Utilizator sau poate plasa o comanda rapida in calitate de Vizitator.</p>
            <p className='mt-3 text-[14px] text-text_secundar'>Utilizatorul este unicul responsabil pentru mentinerea confidentialitatii datelor de acces (nume de utilizator si parola) si pentru toate activitatile desfasurate prin intermediul contului sau. TechStore nu poate fi trasa la raspundere pentru daunele cauzate de utilizarea neautorizata a contului.</p>
            <p className='mt-3 text-[14px] text-text_secundar'>In cazul in care suspectati o bresă de securitate sau acces neautorizat în contul dumneavoastra, aveti obligatia de a notifica imediat echipa de suport TechStore.</p>
          </section>

          <section id='sectiunea-3' className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura w-full scroll-mt-3'>
            <div className='flex items-center space-x-3'>
              <p className='text-grad font-bold px-3 py-2  bg-fundal_inp rounded-xl'>03</p>
              <p className='text-[22px] font-bold'>Plasarea si Acceptara Comenzilor</p>
            </div>
            <p className='mt-3 text-[14px] text-text_secundar'>Clientul poate plasa comenzi pe site prin adaugarea produselor dorite in cosul de cumparaturi si finalizarea pasilor de plata si livrare. Adaugarea unui produs in cos fara finalizarea comenzii nu atrage dupa sine rezervarea acestuia.</p>
            <p className='mt-3 text-[14px] text-text_secundar'>Prin finalizarea comenzii, Cumparatorul garantează ca toate datele furnizate sunt corecte, complete si adevarate.</p>

            <div className='mt-3 text-[14px] text-yellow-400 flex space-x-3 border border-yellow-400/20 px-3 py-3 rounded-xl bg-yellow-400/10'>
              <div>
                <FiAlertTriangle/>
              </div>
              <div>
                <p className='font-bold mb-1.5'>Momentul Incheierii Contractului:</p>
                <p>E-mailul automat generat imediat dupa plasarea comenzii are doar rol de confirmare de primire. Contractul la distanta se considera încheiat numai in momentul primirii e-mailului de confirmare a expedierii produselor de la depozitul nostru.</p>
              </div>
            </div>
          </section>

          <section id='sectiunea-4' className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura w-full scroll-mt-3'>
            <div className='flex items-center space-x-3'>
              <p className='text-grad font-bold px-3 py-2  bg-fundal_inp rounded-xl'>04</p>
              <p className='text-[22px] font-bold'>Preturi, Facturare si Modalitati de Plata</p>
            </div>
            <p className='mt-3 text-[14px] text-text_secundar'>Toate preturile afisate pe site sunt exprimate in LEI (RON) si includ TVA (19%), precum si taxa TMB (unde este aplicabil pentru echipamente IT/electrocasnice).</p>
            <p className='mt-3 text-[14px] text-text_secundar'>TechStore pune la dispozitia cumparatorilor urmatoarele modalitati de plata:</p>
             <ul className='space-y-1.5 mt-1.5 list-disc ml-5 text-[14px]'>
              <li className='text-text_secundar'><span className='text-text_principal font-medium'>Plata online cu cardul bancar: </span>Visa, Mastercard prin procesator securizat Netopia / Stripe (3D Secure).</li>
              <li className='text-text_secundar'><span className='text-text_principal font-medium'>Ramburs la livrare: </span>Plata in numerar sau card la curier (limita maxima conform legii 5.000 LEI pentru persoane fizice).</li>
              <li className='text-text_secundar'><span className='text-text_principal font-medium'>Plata in rate egale fara dobanda: </span>Carduri de cumparături emise de bancile partenere (Banca Transilvania, BCR, BRD, Alpha Bank).</li>
              <li className='text-text_secundar'><span className='text-text_principal font-medium'>Transfer Bancar (Ordin de plata): </span>Pentru persoane juridice, livrarea efectundu-se dupa creditarea contului Vanzatorului.</li>
            </ul>
          </section>

          <section id='sectiunea-5' className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura w-full scroll-mt-3'>
            <div className='flex items-center space-x-3'>
              <p className='text-grad font-bold px-3 py-2  bg-fundal_inp rounded-xl'>05</p>
              <p className='text-[22px] font-bold'>Livrarea si Transportul Produselor</p>
            </div>
            <p className='mt-3 text-[14px] text-text_secundar'>Livrarea se efectueaza pe intreg teritoriul Romaniei prin intermediul companiilor de curierat rapid partenere (FAN Courier, SameDay, Easybox).</p>

            <div className='text-[14px] grid grid-cols-2 gap-3 mt-3'>
              <div className='border px-3 py-3 rounded-xl border-bordura1 bg-fundal_inp'>
                
                <div className='flex items-center space-x-1.5'>
                  <BsTruck className='text-grad'/>
                  <p className='font-bold'>Curier Rapid La Adresa</p>
                </div>

                <p className='text-text_secundar'>Cost standard: 19.99 LEI. Gratuit pentru comenzi peste 500 LEI. Termen: 24-48 ore lucratoare.</p>
              </div>
              <div className='border px-3 py-3 rounded-xl border-bordura1 bg-fundal_inp'>
                
                <div className='flex items-center space-x-1.5'>
                  <GrCube className='text-grad'/>
                  <p className='font-bold'>Locker / Easybox 24/7</p>
                </div>

                <p className='text-text_secundar'>Cost standard: 12.99 LEI. Ridicare flexibila oricand in 48h de la sosirea coletului.</p>
              </div>
            </div>

            <p className='mt-3 text-[14px] text-text_secundar'>La primirea coletului, Cumparatorul are dreptul de a verifica integritatea ambalajului. In cazul constatarii unor avarii vizibile, se recomanda refuzul coletului si intocmirea unui proces verbal cu curierul.</p>
          </section>

          <section id='sectiunea-6' className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura w-full scroll-mt-3'>
            <div className='flex items-center space-x-3'>
              <p className='text-grad font-bold px-3 py-2  bg-fundal_inp rounded-xl'>06</p>
              <p className='text-[22px] font-bold'>Dreptul de Retur (14 zile) & Politica de Anulare</p>
            </div>
            <p className='mt-3 text-[14px] text-text_secundar'>Conform Ordonantei de Urgentă OUG 34/2014 privind drepturile consumatorilor, aveti dreptul de a va retrage din contractul de cumparare, fara a preciza motivele, in termen de 14 zile calendaristice de la intrarea în posesia fizica a produselor.</p>

            <div className='mt-3 border border-bordura1 bg-hovr3/10 px-3 py-3 rounded-xl text-[14px]' >
              <div className='flex items-center space-x-3 text-hovr3'> 
                <TfiReload/>
                <p>Conditii pentru Returnare Echipamente IT & Electronice:</p>
                
              </div>
              <ul className='ml-5 mt-1.5 list-disc text-text_secundar'>
                  <li>Produsele trebuie returnate in starea lor originala, insotite de toate accesoriile si ambalajul initial.</li>
                  <li>Licentele software activate, produsele digitale deblocate sau consumabilele desigilate nu pot fi returnate.</li>
                  <li>Rambursarea sumelor se va realiza în maxim 14 zile de la primirea si verificarea produsului returnat in contul IBAN specificat.</li>
                </ul>
            </div>
          </section>

          <section id='sectiunea-7' className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura w-full scroll-mt-3'>
            <div className='flex items-center space-x-3'>
              <p className='text-grad font-bold px-3 py-2  bg-fundal_inp rounded-xl'>07</p>
              <p className='text-[22px] font-bold'>Garantii si Service</p>
            </div>
            <p className='mt-3 text-[14px] text-text_secundar'>Toate produsele comercializate de TechStore beneficiaza de garantie legala de conformitate de 24 luni pentru persoane fizice (conform Legii 449/2003 si Ordonantei 140/2021) si de 12 luni pentru persoane juridice.</p>
            <p className='mt-3 text-[14px] text-text_secundar'>Fiecare produs este insotit de un certificat de garantie emis de producator sau de catre TechStore. Reparatiile sau inlocuirile in garantie se efectueaza in termen de maxim 15 zile calendaristice de la receptia produsului in centrul de service autorizat.</p>
          </section>

          <section id='sectiunea-8' className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura w-full scroll-mt-3'>
            <div className='flex items-center space-x-3'>
              <p className='text-grad font-bold px-3 py-2  bg-fundal_inp rounded-xl'>08</p>
              <p className='text-[22px] font-bold'>Proprietate Intelectuala & Drepturi de Autor</p>
            </div>
            <p className='mt-3 text-[14px] text-text_secundar'>Intregul continut al site-ului TechStore.ro (imagini, texte, elemente de grafica web, scripturi, marci inregistrate) este proprietatea S.C. TECHSTORE GROUP S.R.L. si este protejat de Legea Dreptului de Autor (Legea nr. 8/1996).</p>
            <p className='mt-3 text-[14px] text-text_secundar'>Copierea, distribuirea sau utilizarea neautorizata a oricarui element de pe site fara acordul prealabil in scris este strict interzisa si se pedepseste conform legilor în vigoare.</p>
          </section>

          <section id='sectiunea-9' className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura w-full scroll-mt-3'>
            <div className='flex items-center space-x-3'>
              <p className='text-grad font-bold px-3 py-2  bg-fundal_inp rounded-xl'>09</p>
              <p className='text-[22px] font-bold'>Protectia Datelor cu Caracter Personal (GDPR)</p>
            </div>
            <p className='mt-3 text-[14px] text-text_secundar'>TechStore respecta confidentialitatea datelor dumneavoastra si se supune Regulamentului General privind Protectia Datelor (UE 2016/679 - GDPR).</p>
            <p className='mt-3 text-[14px] text-text_secundar'>Datele colectate (nume, adresa, telefon, e-mail, detalii facturare) sunt utilizate exclusiv pentru prelucrarea, facturarea si livrarea comenzilor dumneavoastra, precum si pentru comunicari de marketing doar in cazul in care v-ati exprimat acordul expres.</p> 
          </section>
          
          <section id='sectiunea-10' className='bg-fundal_card px-3 py-3 rounded-xl border border-bordura w-full scroll-mt-3'>
            <div className='flex items-center space-x-3'>
              <p className='text-grad font-bold px-3 py-2  bg-fundal_inp rounded-xl'>10</p>
              <p className='text-[22px] font-bold'>Litigii, ANPC si Solutionarea Alternativa (SAL/SOL)</p>
            </div>
            <p className='mt-3 text-[14px] text-text_secundar'>Eventualele litigii aparute intre Vanzător si Cumparator se vor rezolva pe cale amiabila. In cazul in care rezolvarea amiabila nu este posibila, partile se pot adresa instantelor judecătoresti competente din Romania.</p>
            <p className=' mt-3 text-[14px] font-bold'>LEGATURI UTILE PROTECTIA CONSUMATORULUI:</p>

            <div className='grid grid-cols-2 gap-3 mt-3 text-[14px]'>

              <div className='border border-bordura1 px-3 py-3 rounded-xl flex items-center space-x-3'>
                <div className='bg-blue-600/15 px-3 py-3 rounded-xl text-[19px] text-blue-400'>
                  <GoShield/>
                </div>

                <div>
                  <p className='font-bold'>ANPC - SAL</p>
                  <p className='text-text_secundar'>Solutionarea Alternativa a Litigiilor</p>
                </div>
              </div>
              <div className='border border-bordura1 px-3 py-3 rounded-xl flex items-center space-x-3'>
                <div className='bg-yellow-600/15 px-3 py-3 rounded-xl text-[19px] text-yellow-400'>
                  <GoGlobe/>
                </div>

                <div>
                  <p className='font-bold'>Platforma SOL</p>
                  <p className='text-text_secundar'>Solutionarea Online a Litigiilor (UE)</p>
                </div>
              </div>

              
            </div>
          </section>

        </div>
        
      </div>
    </div>
  )
}

export default TermeniSiConditii
