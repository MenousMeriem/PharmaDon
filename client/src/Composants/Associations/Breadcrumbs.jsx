import React from 'react'
import { Link } from 'react-router-dom'


function Breadcrumbs() {
  return (
    <div>
        <div className="text-lg breadcrumbs text-[#203374] ml-14 mt-5">
            <ul>
                <li><Link to={'/PageAssociations'}>Associations </Link></li> 
                <li>Nom de l'association</li> 
            </ul>
        </div>
    </div>
  )
}

export default Breadcrumbs