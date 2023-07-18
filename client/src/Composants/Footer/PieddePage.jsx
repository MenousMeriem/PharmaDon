import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/Footer/logo.png'

function PieddePage() {
  return (
        <footer className="footer p-10 bg-[#219dbc19] text-base-content">
            <div>
               <Link to={'/Accueil'}><img src={img} className='w-48 h-48' /> </Link>   
            </div> 
            <div className='text-[#203374]'>
                <span className="text-lg">Services</span> 
                <Link to={'/PagePharmacies'} className="link link-hover">Pharmacies</Link> 
                <Link to={"/PageAssociations"} className="link link-hover">Associations</Link> 
                <Link to={"/Medicaments"}className="link link-hover">Médicaments</Link> 
                {/* <Link className="link link-hover">Advertisement</Link> */}
            </div> 
            <div className=' text-[#203374]'>
                <span className="text-lg">Company</span> 
                <Link to={'/AProposdeNous'} className="link link-hover">A propos de nous</Link> 
                {/* <Link className="link link-hover">Contactez nous</Link>  */}
                <Link to={'/Inscription'} className="link link-hover">Devenir client </Link> 
                {/* <Link className="link link-hover">Press kit</Link> */}
            </div> 
            {/* <div>
                <span className="footer-title">Legal</span> 
                <Link className="link link-hover">Terms of use</Link> 
                <Link className="link link-hover">Privacy policy</Link> 
                <Link className="link link-hover">Cookie policy</Link>
            </div> */}
        </footer>
  )
}

export default PieddePage