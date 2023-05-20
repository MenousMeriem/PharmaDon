import React from 'react'
import {GiMedicinePills} from 'react-icons/gi'
import {BiCurrentLocation} from 'react-icons/bi'

function BarreRecherche() {
  return (
    <div>
        <div className='p-10 '>
            <div className='w-full h-full bg-[#0DC4C7] py-10 px-10 rounded-xl '>
                <div className='flex flex-col-3 gap-8'>
                    <GiMedicinePills className='w-14 h-10 bg-white text-[#FB8500]'/>
                    <input type="text" placeholder="Votre médicament" className="input input-bordered border-2 border-[#0DC4C7] w-full"/>
                    <BiCurrentLocation className='w-14 h-10 bg-white text-[#FB8500]'/>
                    <input type="text" placeholder="Lieux de recherche" className="input input-bordered border-2 border-[#0DC4C7] w-full " />
                    <button className="btn bg-white border-none text-[#FB8500] hover:bg-[#FB8500] hover:text-white ">Recherche</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BarreRecherche