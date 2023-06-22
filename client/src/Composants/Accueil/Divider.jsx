import React from 'react'
import image from '../../assets/Accueil/association.avif'
import img from '../../assets/Accueil/Associations.avif'

function Divider() {
  return (
    <div>
      <div className="flex flex-col w-full lg:flex-row mt-14 mb-10">
        <div className="grid flex-grow card rounded-box place-items-center p-6">
          <div className="card w-3/4 bg-base-100 shadow-xl image-full">
            <figure><img src={image} /></figure>
            <div className="card-body">
              <h2 className="card-title">Donner des médicaments </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn text-sm md:text-lg border-none  bg-[#203374] hover:bg-[#219EBC] text-white">Afficher plus</button>
              </div>
            </div>
          </div>
        </div> 
        {/* <div className="divider lg:divider-horizontal">OR</div>  */}
        <div className="grid flex-grow card rounded-box place-items-center p-6">
          <div className="card w-3/4 bg-base-100 shadow-xl image-full">
              <figure><img src={img} /></figure>
              <div className="card-body">
                <h2 className="card-title">Récupérer des médicaments !</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn text-sm md:text-lg border-none  bg-[#203374] hover:bg-[#219EBC] text-white">Afficher plus</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Divider