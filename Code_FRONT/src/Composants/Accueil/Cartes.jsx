import React from 'react'

function Cartes() {
  return (
    <div>
        <h1 className='text-center text-5xl text-[#203374]'>Nos services </h1>
        <div className='flex justify-center items-center gap-14 p-10 text-[#203374] text-center'>
            <div className="card w-96 h-72 bg-base-100 shadow-xl ">
                <div className="card-body p-5 ">
                    <h2 className=" text-2xl font-bold ">Pharmacies</h2>
                    <p className='text-xl'>Commandez vos médicaments</p>
                    <div className="card-actions justify-end"></div>
                </div>
            </div>
            <div className="card w-96 h-72 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Associations</h2>
                    <p className='text-xl'>Commandez vos médicaments</p>
                    <div className="card-actions justify-center"> icone</div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Cartes