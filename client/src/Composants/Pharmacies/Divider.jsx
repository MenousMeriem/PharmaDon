import React from 'react'
import image1 from '../../assets/Pharmacies/imageHero.jpg'
import { Link } from 'react-router-dom'

function Divider() {
  return (
    <div className='p-5'>
      <div className="hero min-h-full shadow-xl rounded-lg bg-[#86bdbea1]">
        <div className="hero-content flex-col lg:flex-row ">
          {/* <img src={image1} className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div>
            <h1 className="text-2xl font-bold text-[#203374]">Engagés envers le bien-être de tous  !</h1>
            <p className="py-6 text-base leading-8 text-[#203374]">Notre engagement envers la satisfaction des patients et le bien-être de tous est au cœur 
            de notre mission. En collaborant avec des associations, nous nous efforçons de fournir des soins de santé complets, 
            notamment des médicaments</p>
            <Link to={'/AProposdeNous'}>
              <button className="btn text-sm md:text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white float-right">Voir plus </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Divider