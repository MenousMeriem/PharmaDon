import React from 'react'
import { Link } from 'react-router-dom'

function Inscription() {
  return (
    <div className=''>
        <h1 className='text-center text-lg md:mt-5 md:text-3xl lg:text-4xl text-[#203374] py-12 underline underline-offset-8 decoration-[#0DC4C7]'> Créer votre compte ! </h1>
        <div className='text-center flex flex-col justify-center items-center gap-4 md:grid md:grid-cols-3 md:gap-1 md:justify-items-center md:py-8 md:mb-20 text-[#203374]'>
            <div className="card w-72 h-96 md:w-96 md:h-96 bg-base-100 shadow-xl border-8 border-[#203374]">
                {/* <figure><img src={image}></img></figure> */}
                <div className="card-body">
                    <h2 className=" text-lg md:text-lg font-bold ">Vous etes pharmacien ?</h2>
                    <p className='text-sm md:text-sm'>Créer votre compte</p>
                    <div className="card-actions justify-end"></div>
                    <Link to={'/InscriptionPharmacien'}>
                        <button className="btn text-sm md:text-lg border-none bg-[#203374] hover:bg-[#219EBC] text-white">Afficher plus</button>
                    </Link>
                </div>
            </div>   
            <div className="card w-72 h-96 md:w-96 md:h-96 bg-base-100 shadow-xl border-8 border-[#203374]">
                {/* <figure><img src={image1} className='w-60'></img></figure> */}
                <div className="card-body">
                    <h2 className=" text-lg md:text-lg font-bold ">Vous etes une association ?</h2>
                    <p className='text-sm md:text-sm'>Créer votre compte</p>
                    <div className="card-actions justify-end"></div>
                    <Link to={'/InscriptionAssociation'}>
                        <button className="btn text-sm md:text-lg border-none bg-[#203374] hover:bg-[#219EBC] text-white">Afficher plus</button>
                    </Link>
                </div>
            </div>
            <div className="card w-72 h-96 md:w-96 md:h-96 bg-base-100 shadow-xl border-8 border-[#203374]">
                {/* <figure><img src={image}></img></figure> */}
                <div className="card-body">
                    <h2 className=" text-lg md:text-xl font-bold ">Vous etes un patient ?</h2>
                    <p className='text-sm md:text-xl'>Créer votre compte</p>
                    <div className="card-actions justify-end"></div>
                    <Link to={'/InscriptionPatient'}>
                        <button className="btn text-sm md:text-lg border-none bg-[#203374] hover:bg-[#219EBC] text-white">Afficher plus</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inscription