import React from 'react'
import Lottie from 'lottie-react'
import animation from '../../assets/Annimations/37851-e-health-app-user.json'


function Divider() {
  return (
    <div>
      <div className='flex flex-col-2 mt-5 w-full rounded-lg bg-[#0DC4C7] bg-opacity-20 '>
        <div className='p-10 w-full'>
          <div className="card card-side w-fit rounded-xl border-4 border-[#0DC4C7]">
            <div>
              <Lottie className='h-80 w-60' animationData={animation}/>
            </div>
            <div className="card-body bg-white rounded-r-lg text-[#203374]">
              <div>
                {/* ETIQUETTE  */}
              </div>
              <p className="card-title text-justify text-lg"> En faisant don de vos médicaments, vous participez à la lutte contre 
              le gaspillage et contribuez à aider ceux qui ne peuvent pas se permettre d'acheter les médicaments dont ils ont besoin. 
              </p>
              <div className="card-actions justify-center">
                <button className="btn bg-[#0DC4C7] hover:bg-[#203374] border-none">Afficher tous</button>
              </div>
            </div>
          </div>
        </div>
        <div className='p-10 w-full'>
          <div className="card card-side w-fit rounded-lg border-4 border-[#0DC4C7] ">
          <div>
              <Lottie className='h-80 w-60' animationData={animation}/>
            </div>
            <div className="card-body bg-white rounded-r-lg text-[#203374] ">
              <p className="card-title text-justify text-lg"> En faisant don de vos médicaments, vous participez à la lutte contre 
              le gaspillage et contribuez à aider ceux qui ne peuvent pas se permettre d'acheter les médicaments dont ils ont besoin. 
              </p>
              <div className="card-actions justify-center">
                <button className="btn bg-[#0DC4C7] hover:bg-[#203374] border-none">Afficher tous</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Divider