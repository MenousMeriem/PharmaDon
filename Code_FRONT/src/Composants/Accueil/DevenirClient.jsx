import React from 'react'
import image from '../../assets/image3.jpg'

function DevenirClient() {
  return (
    <div>
        <div className='flex'>
            <div className='bg-red-50 flex-1'>
                <figure> <img src={image} className='w-fill' /> </figure>
            </div>
            <div className=' bg-yellow-400 flex-1'>
                <h1> Devenir client gratuitement ! </h1>
                <h3> Commander vos médicaments Commander vos médicaments ! Commander vos </h3>
                <button className="btn text-white bg-[#0DC4C7] border-none hover:bg-indigo-50 hover:text-[#0DC4C7]">En savoir plus</button>
            </div>
        </div>
    </div>
  )
}

export default DevenirClient