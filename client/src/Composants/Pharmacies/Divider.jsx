import React from 'react'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'

function Divider() {
  return (
    <div>
      <div className='flex flex-col-2 mt-5 ml-5 w-fit rounded-lg bg-[#0DC4C7] bg-opacity-20 '>
        <div className='p-10 w-fit '>
          <div className="card card-side w-fit rounded-lg border-4 border-[#0DC4C7]">
            <img className='w-64 h-60 rounded-l-lg' src={image1}/>
            <div className="card-body bg-white rounded-r-lg text-[#203374] ">
              <p className="card-title text-center text-lg">dans cette page je dois afficher tous les médicaments à donner </p>
              {/* <p className='text-center'> Se faire livrer des médicaments 24/7</p> */}
              <div className="card-actions justify-center">
                <button className="btn bg-[#0DC4C7] border-none">Détail</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='p-10 w-fit'>
          <div className="card card-side w-fit rounded-lg border-4 border-[#0DC4C7] ">
            <img className='w-64 h-60 rounded-l-lg' src={image2}/>
            <div className="card-body bg-white rounded-r-lg text-[#203374] "> */}
            {/* <p className="card-title text-center text-lg">Les médicaments à donner gratuitement </p> */}
              {/* <p className='text-center'> Se faire livrer des médicaments 24/7</p> */}
              {/* <div className="card-actions justify-center">
                <button className="btn bg-[#0DC4C7] border-none">Détail</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Divider