import React from 'react'
import image from '../../assets/Accueil/association.avif'
import img from '../../assets/Accueil/Associations.avif'
import { Link } from 'react-router-dom'

function Divider() {
  return (
    <div>
      <div className="flex flex-col w-full lg:flex-row mt-14 mb-10">
        <div className="grid flex-grow card rounded-box place-items-center p-6">
          <div className="card w-3/4 bg-base-100 shadow-xl image-full">
          
            <figure><img src={image} /></figure>
            <div className="card-body">
              <h2 className="card-title">Donner des médicaments </h2>
              <p> Grâce à ces partenariats, nous assurons un processus de don fiable et responsable.</p>
              <div className="card-actions justify-end">
                <Link to={'/Don'}>
                  <button className="btn text-sm md:text-lg border-none  bg-[#203374] hover:bg-[#219EBC] text-white">Afficher plus</button>
                </Link>
              </div>
            </div>
          </div>
        </div> 
        <div className="grid flex-grow card rounded-box place-items-center p-6">
          <div className="card w-3/4 bg-base-100 shadow-xl image-full">
            <figure><img src={img} /></figure>
            <div className="card-body">
              <h2 className="card-title">Récupérer des médicaments !</h2>
              <p>Grâce à ces partenariats, nous assurons un processus de récuperation fiable et responsable.</p>
              <div className="card-actions justify-end">
                <Link to={'/Recuperation'}>
                  <button className="btn text-sm md:text-lg border-none  bg-[#203374] hover:bg-[#219EBC] text-white">Afficher plus</button>
                </Link>              
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Divider