import React from 'react'
import image from '../../assets/PlusieursPharmacies/medicament.jpg'

function CarteMedicament() {
  return (
    <div className='px-10 py-10'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-10 text-[#203374]">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title"> Médicament 1</h2>
                <p>Petite description </p>
                <div className="card-actions justify-end">
                <button className="btn bg-[#0DC4C7] border-none">Commander</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarteMedicament