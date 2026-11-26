import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { categorii_produse } from './categorii_produse';
import { HiSquare3Stack3D } from "react-icons/hi2";
import { CiLaptop } from 'react-icons/ci';
import { RiHeadphoneLine } from 'react-icons/ri';
import { GiSmartphone } from 'react-icons/gi';
import { GrMonitor } from 'react-icons/gr';
import { MdOutlineSettingsInputComponent } from 'react-icons/md';
import { CgSmartHomeLight } from 'react-icons/cg';
import { produse } from './produse';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaList, FaRegHeart, FaStar } from "react-icons/fa";
import { LuGrid2X2 } from "react-icons/lu";
import { FaFilter } from "react-icons/fa6";
import { IoBagHandleOutline, IoEyeOutline } from 'react-icons/io5';

const Categorie = () => {
  const location = useLocation();
  const {slug} = useParams();
  const categorie = categorii_produse.find(c=>c.slug === slug);
  const navigate = useNavigate();
  const iconMap = {
      laptop: CiLaptop,
      audio: RiHeadphoneLine,
      telefon:GiSmartphone,
      monitoare: GrMonitor,
      componente: MdOutlineSettingsInputComponent,
      smarthome:CgSmartHomeLight
    }
  const [showDisplayProduct,sethowDisplayProduct] = useState("grila");
  const [checkCategorie,setCheckCategorie] = useState(categorie.id_categorie);
  const [checkSubCategorie,setCheckSubCategorie] = useState("toate");
  const [checkDisponibilitate,setCheckDisponibilitate] = useState(null);
  const [checkRating,setCheckRating] = useState(null);
  const [min,setMin] = useState(100);
  const max= 8500;
  const [value,setValue] = useState(max);

  const [hoverProdus,setHoverProdus] = useState(null);
  
  const [showFilter,setShowFilter] =useState(false);
  
  const [showCategorie,setShowCategorie] = useState(null);
  return (
    <div className='max-w-screen-2xl mx-auto px-14   max-modf1:px-10 py-10 max-modf2:px-6'>
      <div>
        <div className='flex items-center space-x-3 text-[26px] font-bold'>
          <HiSquare3Stack3D className='text-grad'/>
          <p>Categorii Principale</p>
        </div>

        <ul className='grid grid-cols-6 max-modf5:grid-cols-3 max-modf1:grid-cols-2 max-modf2:grid-cols-1 gap-3 mt-4'>
          {
            categorii_produse.slice(0,6).map(c=>{
              const Icon = iconMap[c.icon];
              return(
              <li onClick={()=>{navigate(`/categorii-produse/${c.slug}`)}} key={c.id_categorie} className={`border px-3 py-3 rounded-xl ${categorie.id_categorie===c.id_categorie?"text-grad border-grad":"text-text_principal hover:-translate-y-1 border-bordura1"}  hover:border-grad cursor-pointer  transition-all bg-fundal_card duration-300 ease-in-out hover:text-grad`}>
                <div className='flex justify-center'>
                  <div className='bg-grad/15 px-3 py-3 rounded-xl text-[28px] '>
                    {Icon && <Icon/>}
                  </div>
                  
                </div>

                <div className='text-[12px] mt-1.5 text-center'>
                  <p className='font-bold'>{c.nume_categorie}</p>
                  <p className='text-text_secundar'>{produse.filter(p=>p.categorie_id===c.id_categorie).length} Produse</p>
                </div>
                
              </li>
            )})
          }
        </ul>
      </div>


      <div className='mt-10 text-[14px] modf3:flex modf3:items-center modf3:space-x-3 max-modf3:space-y-1.5 bg-fundal_card px-5 py-5 rounded-xl border border-bordura1'>
        
        
        <p className='text-text_secundar shrink-0'>Afisare <span className='text-text_principal font-bold'>{produse.filter(p=>p.categorie_id===categorie.id_categorie).length}</span> produse</p>
        
        <ul className='overflow-x-auto w-[80%]    flex space-x-3 scrollbar-thin py-3'>
          <li className='shrink-0 text-grad border px-3 py-0.5 rounded-lg bg-fundal_inp border-bordura1'>{categorie.nume_categorie}</li>
          
        </ul>
      

        <div className='flex items-center  space-x-3  shrink-0'>
          <p className='text-text_secundar'>Ordoneaza:</p>
          <button className='flex space-x-5 bg-fundal_inp px-3 py-0.5 border border-bordura1 rounded-lg cursor-pointer  items-center '>
            <p>Cele mai populare</p>
            <IoIosArrowDown/>
          </button>

          <div className='flex items-center text-[17px] space-x-1.5'> 
            
            <button onClick={()=>sethowDisplayProduct("grila")} className={`cursor-pointer ${showDisplayProduct==="grila"?"text-grad":"text-text_secundar"}`}>
              <LuGrid2X2/>
            </button>

            <button onClick={()=>sethowDisplayProduct("lista")} className={`cursor-pointer ${showDisplayProduct==="lista"?"text-grad":"text-text_secundar"}`}>
              <FaList/>
            </button>
            
          </div>
        </div>
      </div>


      <div className={`mt-10 flex  items-start ${showDisplayProduct==='grila'?"modf3:space-x-3 max-modf3:flex-col max-modf3:space-y-3":'modf:space-x-3 max-modf:flex-col max-modf:space-y-3'}`}>

        <div className={`${showDisplayProduct==='grila'?"modf3:w-70 max-modf3:w-full max-modf3:max-h-80 max-modf3:overflow-y-auto max-modf3:scrollbar-thin":"w-70 max-modf:w-full max-modf:max-h-80 max-modf:overflow-y-auto max-modf:scrollbar-thin"} border-bordura1 border rounded-xl bg-fundal_card px-5 py-5 shrink-0  top-3`}>
          <div className='flex items-center space-x-3 justify-between pb-3 border-b border-b-bordura1'>
            <button onClick={()=>setShowFilter(!showFilter)} className='cursor-pointer hover:text-grad transition-all duration-300 ease-in-out flex items-center space-x-1.5'>
              <FaFilter className='text-grad '/>
              <p className='font-bold  shrink-0'>Filtreaza produsele</p>
            </button>
            <button className='text-[14px] text-grad cursor-pointer hover:text-grad/80 transition-all duration-300 ease-in-out shrink-0'>Sterge tot</button>
          </div>

          
          {showFilter &&(
            <div>
              <div className='mt-3 pb-1.5 shrink-0'>
                <p className='font-bold text-text_secundar'>Categorii</p>
                <ul className='space-y-1.5 mt-2'>
                  {
                    categorii_produse.map(c=>(
                      <li key={c.id_categorie} className='flex items-center text-[14px] space-x-3 justify-between'>
                        <div className='flex items-center space-x-1.5 text-text_secundar'>
                          <input 
                          value={c.id_categorie}
                          onClick={()=>{navigate(`/categorii-produse/${c.slug}`);
                          setCheckCategorie(c.id_categorie);
                        }}
                          onChange={()=>setCheckCategorie(c.id_categorie)}
                          checked={checkCategorie===c.id_categorie}
                          type="radio" name="" id="" />
                          <p>{c.nume_categorie}</p>
                        </div>
                        <div>
                          <p className='text-[14px] text-text_secundar'>({produse.filter(p=>p.categorie_id === c.id_categorie).length})</p>
                          
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>


              <div className='mt-3 py-3 border-t border-t-bordura1 shrink-0'>
                <p className='font-bold text-text_secundar'>Subcategorii</p>
                <ul className='space-y-1.5 mt-2'>
                  <li key={"toate"} className='flex text-[14px] items-center space-x-3 justify-between'>
                    <div className='flex items-center space-x-1.5 text-text_secundar'>
                      <input type="radio"
                      
                      onChange={()=>setCheckSubCategorie("toate")}
                      onClick={()=>setCheckSubCategorie("toate")}
                      value={"toate"}
                      checked={checkSubCategorie ==="toate"} name="" id="" />
                      <p>Toate categoriile</p>
                    </div>
                    
                  </li>
                  {
                    categorie?.subcategorii?.map(s=>(
                      <li key={s.id_subcategorie} className={`flex text-[14px] items-center space-x-3 justify-between`}>
                        <div className='flex items-center space-x-1.5 text-text_secundar'>
                          <input type="radio"
                          
                          onChange={()=>setCheckSubCategorie(s.id_subcategorie)}
                          onClick={()=>setCheckSubCategorie(s.id_subcategorie)}
                          value={s.id_subcategorie}
                          checked={checkSubCategorie ===s.id_subcategorie} name="" id="" />
                          <p>{s.nume}</p>
                        </div>
                        
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className='mt-3 py-3 border-t border-t-bordura1 shrink-0'>
                <p className='font-bold text-text_secundar'>Interval Pret (LEI)</p>
                <div className='mt-3 flex space-x-3'>
                  <div className='w-1/2'>
                    <p className='text-[14px] text-text_secundar'>Minim (LEI)</p>
                    <input className='border border-bordura1 w-full rounded-lg focus:ring-2 focus:ring-grad transition-all duration-150 ease-in-out px-3 py-1 outline-0 bg-fundal_inp mt-1.5' type="number" name="" onChange={e=>Number(setMin(e.target.value))} defaultValue={min} id="" />
                    
                  </div>
                  
                  <div className='w-1/2'>
                    <p className='text-[14px] text-text_secundar'>Maxim (LEI)</p>
                    <input className='border border-bordura1 w-full rounded-lg focus:ring-2 focus:ring-grad transition-all duration-150 ease-in-out px-3 py-1 outline-0 bg-fundal_inp mt-1.5' type="number" name="" value={value}
                    onChange={e=>Number(setValue(e.target.value))}
                    id="" />
                  </div>
                  
                </div>

                <input min={min} max={max} step={100} value={value}
                onChange={e=>setValue(Number(e.target.value))}
                type="range" className='w-full mt-3' name="" id="" />
              </div>


              <div className=' py-3 border-t border-t-bordura1 shrink-0'>
                <p className='font-bold text-text_secundar'>Disponibilitate</p>
                <ul className='mt-1.5'>
                  {
                    [
                      {id:1,nume:"In Stoc"},{id:2,nume:"Stoc Limitat"},{id:3,nume:"Precomanda"}
                    ].map(d=>(
                      <li onClick={()=>setCheckDisponibilitate(d.id)} key={d.id} className='flex items-center cursor-pointer hover:text-text_principal transition-all duration-300 ease-in-out space-x-3 text-[14px] text-text_secundar '>
                        <input
                        
                        onChange={()=>setCheckDisponibilitate(d.id)}
                        checked={checkDisponibilitate===d.id}
                        type="radio" name="" id="" />
                        <p>{d.nume}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className=' pt-3 border-t border-t-bordura1 shrink-0'>
                <p className='font-bold text-text_secundar'>Rating</p>
                <ul className='mt-1.5 space-y-1.5'>
                  {
                    [
                      {id:1,rating:5},{id:2,rating:4},{id:3,rating:3},{id:4,rating:2},{id:5,rating:1},{id:6,rating:0}
                    ].map(r=>(
                      <li onClick={()=>setCheckRating(r.id)} key={r.id} className='flex cursor-pointer items-center space-x-3'>
                        <input
                        onChange={()=>setCheckRating(r.id)}
                        checked={r.id===checkRating}
                        type="radio" name="" id="" />
                        <ul className='flex items-center space-x-1.5'>
                          {
                            [1,2,3,4,5].map(e=>(
                              <li key={e} className={`${r.rating>=e?"text-orange-400":"text-text_secundar"}`}>
                                <FaStar/>
                              </li>
                            ))
                          }
                        </ul>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          )}
        </div>


        <div className='border-bordura1 border rounded-xl bg-fundal_card px-3 py-3 w-full'>
          <ul className={`mt-4 grid  ${showDisplayProduct==='grila'?"grid-cols-3 max-modf5:grid-cols-2 max-modf:grid-cols-1":"grid-cols-1"} gap-3`}>
            {
              produse.map((p)=>{
    
                return (
                  showDisplayProduct==='grila' &&(<li key={p.id} className={`bg-fundal_card px-4 py-3 transition-all duration-300 ease-in-out rounded-xl border hover:border-hovr3 hover:scale-102 ${(p.categorie_id===checkCategorie && p.subgategorie_id===checkSubCategorie) || (p.categorie_id===checkCategorie && "toate"===checkSubCategorie)?"block":"hidden"} border-bordura `}
                  onMouseEnter={()=>setHoverProdus(p.id)}
                  onMouseLeave={()=>setHoverProdus(null)}
                  >
                    <div className='relative overflow-hidden rounded-lg'>
                      <img className={`w-full h-39 rounded-lg ${hoverProdus===p.id?"scale-110":"scale-100"} transition-all  overflow-hidden duration-300 select-none ease-in-out`} src={p.img} alt="" />
                      <button className='absolute top-3 right-3 bg-fundal_card px-2 py-2 rounded-full border border-bordura1 cursor-pointer text-text_secundar hover:text-text_principal transition-all duration-300 ease-in-out'>
                        <FaRegHeart/>
                      </button>
                      <div className='absolute top-3 left-3 select-none text-[12px] bg-red-500 font-medium px-2 rounded-xl py-0.5'>
                        <p>{p.reducere}</p>
                      </div>
                      <div className={`absolute flex items-center space-x-1 bottom-3 right-3 bg-fundal_card px-2 py-0.5 rounded-xl border cursor-pointer border-bordura1 hover:text-grad transition-all duration-300 ease-in-out ${hoverProdus===p.id?"max-h-100 opacity-100":"max-h-0 opacity-0"} overflow-hidden`}>
                        <IoEyeOutline/>
                        <p className='text-[12px] select-none'>Vizualizare</p>
                      </div>
                    </div>
    
                    <div className='mt-3 flex space-x-1.5 items-center text-[14px]'>
                      <FaStar className='text-yellow-400'/>
                      <p className='font-bold'>{p.rating}</p>
                      <p className='text-text_secundar'>({p.nr_recenzii})</p>
                    </div>
                    <p className={`${hoverProdus===p.id?"text-grad":"text-text_principal"} select-none cursor-pointer text-[14px] font-bold`}>{p.nume}</p>
                    <p className='text-[14px] text-text_secundar line-clamp-2  mt-1'>{p.info}</p>
    
                    <div className='mt-5 flex justify-between items-center'>
                      <div>
                        <p className='text-[12px] text-text_secundar line-through'>{p.pret} LEI</p>
                        <p className='font-bold'>{p.pret_redus} <span className='text-grad text-[13px]'>LEI</span></p>
                      </div>
                      <button className='border border-bordura1 cursor-pointer text-grad bg-butoane/15 hover:bg-grad hover:text-text_principal transition-all duration-300 ease-in-out px-2 py-2 rounded-xl'>
                        <IoBagHandleOutline/>
                      </button>
                    </div>
                  </li>)
                  ||
                  showDisplayProduct==='lista' &&(<li key={p.id} className={`bg-fundal_card px-3 py-3 transition-all space-x-3 duration-300 ease-in-out rounded-xl flex border hover:border-hovr3 hover:scale-102 border-bordura ${(p.categorie_id===checkCategorie && p.subgategorie_id===checkSubCategorie) || (p.categorie_id===checkCategorie && "toate"===checkSubCategorie)?"block":"hidden"}`}
                  onMouseEnter={()=>setHoverProdus(p.id)}
                  onMouseLeave={()=>setHoverProdus(null)}
                  >
                    
                    <div className='relative overflow-hidden rounded-lg w-48 shrink-0 max-modf4:h-28 max-modf4:w-35'>
                      <img className={`w-full h-33 rounded-lg max-modf4:h-28 ${hoverProdus===p.id?"scale-110":"scale-100"} transition-all overflow-hidden duration-300 select-none ease-in-out`} src={p.img} alt="" />
                      <button className='absolute top-1.5 right-1.5 bg-fundal_card px-2 py-2 rounded-full border border-bordura1 cursor-pointer text-text_secundar hover:text-text_principal transition-all duration-300 ease-in-out'>
                        <FaRegHeart/>
                      </button>
                      <div className='absolute top-1.5 left-1.5 select-none text-[12px] bg-red-500 font-medium px-2 rounded-xl py-0.5'>
                        <p>{p.reducere}</p>
                      </div>
                      <div className={`absolute flex items-center space-x-1 bottom-1.5 right-1.5 bg-fundal_card px-2 py-0.5 rounded-xl border cursor-pointer border-bordura1 max-modf4:right-1 max-modf4:bottom-1 hover:text-grad transition-all duration-300 ease-in-out ${hoverProdus===p.id?"max-h-100 opacity-100":"max-h-0 opacity-0"} overflow-hidden`}>
                        <IoEyeOutline/>
                        <p className='text-[12px] select-none'>Vizualizare</p>
                      </div>
                    </div>

                    <div className='w-full'>
                      <p className={`${hoverProdus===p.id?"text-grad":"text-text_principal"} select-none cursor-pointer text-[14px] font-bold`}>{p.nume}</p>
                      <p className='text-[14px] text-text_secundar line-clamp-3  mt-1'>{p.info}</p>
                      <div className='mt-3 flex space-x-1.5 items-center text-[14px]'>
                        <FaStar className='text-yellow-400'/>
                        <p className='font-bold'>{p.rating}</p>
                        <p className='text-text_secundar'>({p.nr_recenzii})</p>
                      </div>
                      
                    </div>
    
                    
    
                    <div className='mt-5 flex  flex-col border-l pl-3 max-modf4:w-20 border-l-bordura max-modf4:shrink-0 w-40'>
                      <div className='text-end'>
                        <p className='text-[12px] text-text_secundar line-through'>{p.pret} LEI</p>
                        <p className='font-bold'>{p.pret_redus} <span className='text-grad text-[13px]'>LEI</span></p>
                      </div>
                      <button className='w-full mt-5 flex items-center modf4:space-x-1.5 border border-bordura1 cursor-pointer text-grad bg-butoane/15 hover:bg-grad hover:text-text_principal transition-all duration-300 ease-in-out px-2 justify-center py-2 rounded-xl'>
                        <IoBagHandleOutline/>
                        <p className='max-modf4:hidden'>Adauga</p>
                      </button>
                    </div>
                  </li>)
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Categorie
