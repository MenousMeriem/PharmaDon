import React from 'react'
import image from '../../assets/G2.png'
function Hero() {
  return (
    <div>
        <div className="hero h-full py-10 my-10">
          <img src={image}></img> 
          <div className='mr-64'>
            <h1 className='text-5xl font-bold text-[#203374] mb-5'> PharmaDon </h1>
            <p className='text-[#203374]'>Ensemble, nous pouvons améliorer la santé et le bien-être de notre communauté. </p>
            <button className="btn text-white bg-[#0DC4C7] border-none hover:bg-indigo-50 hover:text-[#0DC4C7]"> 
              En savoir plus 
            </button>
          </div>
          {/* mb-20 leading-[10] */}
        </div>
    </div>
  )
}

export default Hero