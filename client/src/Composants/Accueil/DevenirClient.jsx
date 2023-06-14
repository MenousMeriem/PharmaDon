import React from 'react'
import image from '../../assets/DevenirClient/client.jpg'
import { Link } from 'react-router-dom'

function DevenirClient() {
  return (
    <div className='my-12'>
        <h1 className='text-center text-[#203374] text-lg md:text-3xl lg:text-4xl md:py-11 mb-5  underline underline-offset-8 decoration-[#0DC4C7]'> DEVENIR CLIENT </h1>      
        <div className='w-full h-[200px] lg:w-full lg:h-[600px] mx-auto relative overflow-hidden group'>
          <img src={image} className='w-full h-[200px] lg:h-full object-cover shadow-xl shadow-gray-300 bg-cover'/>
          <div className='flex flex-col h-full gap-3 justify-between items-center absolute inset-0 py-5 md:py-20 md:px-36 px-12 bg-black bg-opacity-70 translate-y-full transition-transform duration-300 group-hover:translate-y-0'>
            <h1 className='text-sm lg:text-5xl text-white 2xl:text-6xl'> Devenir client gratuitement </h1>
            <p className='text-white text-[13px] lg:p-10 lg:leading-loose text-justify md:text-center xl:text-xl 2xl:text-2xl 2xl:leading-loose'> 
            PharmaDon est conçue pour répondre à vos besoins avec 
            simplicité et efficacité. <br /> Rejoignez-nous dès maintenant et découvrez comment notre plateforme innovante peut 
            transformer votre expérience en ligne.</p>
            <Link to={'/Inscription'}>
              <button className="btn text-sm md:text-lg border-none  text-[#203374] hover:bg-[#219EBC] bg-white">Afficher plus</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default DevenirClient