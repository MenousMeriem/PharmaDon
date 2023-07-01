import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/Accueil/PHARMA.png'
import image1 from '../../assets/Accueil/Associations.avif'
import img from '../../assets/Accueil/association.avif'

function NosServices() {
  return (
    <div className=''>
        <h1 className='text-center text-lg md:mt-5 md:text-3xl lg:text-4xl text-[#203374] py-12 underline underline-offset-8 decoration-[#0DC4C7]'> NOS SERVICES </h1>
        <div className='text-center flex flex-col justify-center items-center gap-10 lg:grid lg:grid-cols-3 lg:justify-items-center text-[#203374]'>
            <div className="card w-72 h-96 md:w-96 md:h-96 bg-base-100 shadow-xl border-l-8 border-b-8 border-[#FFB703]">
                <figure><img className='max-w-full max-h-full' src={image}></img></figure>
                <div className="card-body">
                    <h2 className=" text-lg md:text-lg font-bold ">Trouver une pharmacie près de chez vous</h2>
                    <p className='text-sm md:text-sm'>Trouver une pharmacie près de chez vous</p>
                    <div className="card-actions justify-end"></div>
                    <Link to={'/PagePharmacies'}>
                        <button className="btn text-sm md:text-lg border-none bg-[#203374] hover:bg-[#FFB703] text-white">Afficher plus</button>
                    </Link>
                </div>
            </div>   
            <div className="card w-72 h-96 md:w-96 md:h-96 bg-base-100 shadow-xl border-t-8 border-r-8 border-[#219EBC]">
                <figure><img src={image1} className='w-60'></img></figure>
                <div className="card-body">
                    <h2 className=" text-lg md:text-lg font-bold ">Trouver une association près de chez vous</h2>
                    <p className='text-sm md:text-sm'>Trouver une association près de chez vous</p>
                    <div className="card-actions justify-end"></div>
                    <Link to={'/PageAssociations'}>
                        <button className="btn text-sm md:text-lg border-none bg-[#203374] hover:bg-[#219EBC] text-white">Afficher plus</button>
                    </Link>                
                </div>
            </div>
            <div className="card w-72 h-96 md:w-96 md:h-96 bg-base-100 shadow-xl border-l-8 border-b-8 border-[#ab3428]">
                <figure><img className='max-w-full max-h-full' src={img}></img></figure>
                <div className="card-body">
                    <h2 className="text-lg md:text-xl font-bold"> </h2>
                    <p className='text-sm md:text-xl'>Trouver vos médicaments</p>
                    <div className="card-actions justify-end"></div>
                    <Link to={'/Medicaments'}>
                        <button className="btn text-sm md:text-lg border-none bg-[#203374] hover:bg-[#ab3428] text-white">Afficher plus</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}



export default NosServices