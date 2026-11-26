import React from 'react'
import { categorii_produse } from './categorii_produse'
import { produse } from './produse';
import { CgArrowRight, CgSmartHomeLight } from "react-icons/cg";
import { CiLaptop } from "react-icons/ci";
import { RiHeadphoneLine } from "react-icons/ri";
import { GiSmartphone } from "react-icons/gi";
import { GrMonitor } from "react-icons/gr";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Outlet, useLocation, useMatches, useNavigate, useParams } from 'react-router-dom';

const CategoriiProduse = () => {
  let total_subcategorii =0;
  for(const categorie of categorii_produse){
    total_subcategorii += categorie.subcategorii.length
  }
  
  const nr_total_categorii = categorii_produse.length;
  const nr_total_subcategorii = categorii_produse.flatMap(categorie=>categorie.subcategorii).length
  const nr_total_produse = produse.length;

  const iconMap = {
    laptop: CiLaptop,
    audio: RiHeadphoneLine,
    telefon:GiSmartphone,
    monitoare: GrMonitor,
    componente: MdOutlineSettingsInputComponent,
    smarthome:CgSmartHomeLight
  }
  const navigate = useNavigate();
  
  
  return (
    <div className=' '>


      <div className='bg-fundal_card py-10'>
        <div className='max-w-screen-2xl mx-auto px-14   max-modf1:px-10  max-modf2:px-6'>
          <p className='font-bold text-[39px]'>Toate Categoriile de produse</p>
          <div className='flex max-modf:space-y-3 modf:space-x-10 items-center max-modf:flex-col'>
            <p className='text-text_secundar'>Exploreaza catalogul nostru complet de echipamente IT, componente hardware, perifcerice de gaming si dispozitive smart home.</p>
            <div className='flex space-x-5 shrink-0 text-center text-[14px] border px-3 py-3 rounded-xl border-bordura1 bg-fundal_inp items-center'>
              <div className='border-r pr-5 border-r-bordura1'>
                <p className='text-[24px] text-grad font-bold'>{nr_total_categorii}</p>
                <p>CATEGORII PRINCIPALE</p>
              </div>
              <div className='border-r pr-5 border-r-bordura1'>
                <p className='text-[24px] text-hovr3 font-bold'>{total_subcategorii}</p>
                <p>SUBCATEGORII</p>
              </div>
              <div>
                <p className='text-[24px] text-hovr1 font-bold'>{nr_total_produse}</p>
                <p>PRODUSE IN STOC</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <ul className='max-w-screen-2xl mx-auto px-14   max-modf1:px-10 grid grid-cols-2 max-modf1:grid-cols-1 gap-5  max-modf2:px-6 py-10'>
        {
          categorii_produse.map(c=>{
            const Icon = iconMap[c.icon];
            return(
            <li key={c.id_categorie} className='border px-3 py-3 rounded-xl border-bordura bg-fundal_card'>
              <div className='flex items-center space-x-3'>
                <div className='px-3 py-3 rounded-xl bg-grad/10 border border-bordura1 text-[24px] text-grad'>
                  {
                    Icon && <Icon/>
                  }
                </div>
                <div>
                  <p className='font-bold text-[19px]'>{c.nume_categorie}</p>
                  <p className='text-[15px] text-text_secundar'>{
                    produse.filter(p=>p.categorie_id === c.id_categorie).length
                  } produse disponibile</p>
                  
                </div>
              </div>

              <ul className='mt-3 text-text_secundar'>
                {
                  c.subcategorii.map(s=>(
                    <li key={s.id_subcategorie}>
                      <div className='flex items-center space-x-3 text-[14px] m'>
                        <IoIosArrowForward/>
                        <p>{s.nume}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>

             <div className='flex justify-end'>
                 <button onClick={()=>navigate(c.slug)} className='flex items-center space-x-3 text-[15px] cursor-pointer bg-grad px-3 py-1 rounded-lg hover:bg-grad/80 transition-all duration-300 ease-in-out'>
                  <p>Exploreaza</p>
                  <CgArrowRight/>
                </button>
             </div>
            </li>
          )})
        }
      </ul>

      <div className='mb-10 max-w-screen-2xl mx-auto px-14   max-modf1:px-10  max-modf2:px-6'>
        <div className='flex modf1:items-center modf1:space-x-3 max-modf1:flex-col modf1:justify-between w-full'>
          <div className='shrink-0'>
            <p className='text-[15px] text-grad'>PARTENERI OFICIALI AUTORIZAT</p>
            <p className='font-bold shrink-0 text-[24px]'>Producatori & Branduri Top</p>
          </div>
          <div className='flex modf1:justify-end'>
            <p className='text-[14px] text-text_secundar w-[70%] max-modf:w-[90%] max-modf1:w-full'>Garantie oficial producator, service autorizat si suport tehnic dedicat pentru toate brandurile partenere.</p>
          </div>
        </div>

        <div className='mt-3 grid grid-cols-6 max-modf5:grid-cols-4 max-modf1:grid-cols-2 max-modf2:grid-cols-1 gap-3 '>
          <div className='text-center hover:border-grad transition-all duration-300 ease-in-out cursor-pointer hover:text-hovr1 bg-fundal_card border border-bordura px-3 py-3 rounded-xl'>
            <p className='font-bold'>ASUS ROG</p>
            <p className='text-text_secundar text-[12px]'>Placi Video & Laptopuri</p>
          </div>
          <div className='text-center bg-fundal_card border hover:border-grad hover:text-grad transition-all duration-300 ease-in-out cursor-pointer border-bordura px-3 py-3 rounded-xl'>
            <p className='font-bold'>NVIDIA</p>
            <p className='text-text_secundar text-[14px]'>Geforce RTX Series</p>
          </div>
          <div className='text-center bg-fundal_card border hover:border-grad hover:text-eroare transition-all duration-300 ease-in-out cursor-pointer border-bordura px-3 py-3 rounded-xl'>
            <p className='font-bold'>AMD</p>
            <p className='text-text_secundar text-[12px]'>Ryzen & Radeon</p>
          </div>
          <div className='text-center bg-fundal_card border hover:border-grad transition-all duration-300 ease-in-out hover:text-hovr3 cursor-pointer border-bordura px-3 py-3 rounded-xl'>
            <p className='font-bold'>APPLE</p>
            <p className='text-text_secundar text-[12px]'>MacBook, iPhone, iPad</p>
          </div>
          <div className='text-center bg-fundal_card border hover:border-grad hover:text-hovr transition-all duration-300 ease-in-out cursor-pointer border-bordura px-3 py-3 rounded-xl'>
            <p className='font-bold'>SAMSUNG</p>
            <p className='text-text_secundar text-[12px]'>SSD, Monitoare, TV </p>
          </div>
          <div className='text-center bg-fundal_card border hover:border-grad hover:text-butoane transition-all duration-300 ease-in-out cursor-pointer border-bordura px-3 py-3 rounded-xl'>
            <p className='font-bold'>CORSAIR</p>
            <p className='text-text_secundar text-[12px]'>Surse, RAM, Periferice</p>
          </div>
        </div>
      </div>

      


    </div>
  )
}

export default CategoriiProduse
