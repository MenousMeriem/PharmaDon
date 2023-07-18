import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowAltCircleLeft} from 'react-icons/fa'


function Breadcrumbs() {
  return (
    <div>
        <div className="text-lg breadcrumbs text-[#203374] ml-14 mt-20">
            <ul>
                <li><Link to={'/PagePharmacies'}><FaArrowAltCircleLeft className='w-10 h-10'/></Link></li> 
            </ul>
        </div>
    </div>
  )
}

export default Breadcrumbs