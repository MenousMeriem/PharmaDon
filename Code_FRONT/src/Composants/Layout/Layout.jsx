import React from 'react'

function Layout() {
  return (
    <div>
        {/* Barre de navigation  */}
        <div className="navbar bg-base-100 p-5">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">PharmaDon</a>
            </div>
            <div className="navbar-center hidden text-[#203374] lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className=''><a>Accueil</a></li>
                    <li><a>Nos services</a></li>
                    <li><a>A propos de nous</a></li>
                </ul>
            </div>

            <div className="navbar-end ">
                <a className="btn text-[#203374] bg-white border-[#203374] hover:bg-[#203374] hover:text-white mr-3">Se connecter</a>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                        <a className="btn text-white bg-[#0DC4C7] border-none hover:bg-indigo-50 hover:text-[#0DC4C7]">S'inscrire</a>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-52 text-[#203374]">
                        <li><a>Pharmacien</a></li>
                        <li><a>Association</a></li>
                        <li><a>Donneur</a></li>
                        <li><a>Patient</a></li>
                    </ul>
                </div>
            </div>
        </div>
         {/* Barre de navigation  */}


          {/* Footer */}


          {/* Footer */}
    </div>
  )
}

export default Layout