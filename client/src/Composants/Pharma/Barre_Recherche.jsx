import React from 'react'
import {MdLocalPharmacy} from 'react-icons/md'
import {BiCurrentLocation} from 'react-icons/bi'
import wilaya from '../../assets/Data/Wilaya_Of_Algeria.json'

function Barre_Recherche() {
  return (
    <div>
        <h1 className='text-center text-[#203374] text-lg md:text-3xl lg:text-4xl md:py-5 mt-10 underline underline-offset-8 decoration-[#0DC4C7]'>PLONGEZ DANS L'AVENTURE DE LA RECHERCHE</h1>
        <div className='p-10 '>
            <div className='w-full h-full bg-[#0DC4C7] py-8 px-10 rounded-xl '>
                <div className='lg:flex lg:items-center lg:justify-evenly gap-2'>
                    <MdLocalPharmacy className='hidden lg:block w-14 h-10 text-white'/>
                    <input type="text" placeholder="Votre pharmacie" className="input flex-1 input-bordered border-2 border-[#0DC4C7] w-full my-2"/>
                    <BiCurrentLocation className='hidden lg:block lg:w-14 lg:h-10 text-white'/>  
                    <select defaultValue="" className="select select-bordered max-w-xs border-2 border-[#0DC4C7] w-full my-2 ">
                      <option disabled hidden  value=""> Votre wilaya </option>
                      {wilaya.map(w => {
                       return <option key={w.id} value={w.name}>{w.code} - {w.name}</option>
                      }) }
                    </select>
                    <div className='flex items-center justify-center lg:px-2'>
                      <button className="btn bg-white border-none text-[#203374] hover:bg-[#203374] hover:text-white my-2">Recherche</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Barre_Recherche