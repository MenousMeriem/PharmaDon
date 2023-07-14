import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'
import React from "react"
import Layout from "./Composants/Layout/Layout"
import Accueil from "./Pages/PageAccueil/Accueil"
import NosServices from "./Pages/PageServices/NosServices"
import Propos from "./Pages/PagePropos/Propos"
import Connexion from './Pages/PageConnex/Connexion'
import InscriptionPharmacien from './Pages/PageInsc/InscriptionPharmacien'
import InscriptionAssociation from "./Pages/PageInsc/InscriptionAssociation"
import InscriptionPatient from './Pages/PageInsc/InscriptionPatient'
import PageProfilPharmacien from './Pages/PageProfil/PageProfilPharmacien'
import PageProfilPatient from './Pages/PageProfil/PageProfilPatient'
import PageProfilAdmin from './Pages/PageProfil/PageProfilAdmin'
import PageProfilAssociation from './Pages/PageProfil/PageProfilAssociation'
import Inscription from "./Composants/Inscription/Inscription"
import ReinitialiserMdp from "./Composants/MotDePasse/ReinitialiserMdp"
import Mail from "./Composants/MotDePasse/Mail"
import Reactivation from "./Pages/PageConnex/Reactivation"
import PageMesAnnonces from './Pages/PageMesAnnonces/PageMesAnnonces'
import PagePharmacies from "./Pages/PagePharmacies/PagePharmacies"
import PageUnePharmacie from './Pages/PagePharmacies/PageUnePharmacie'
import PageAssociations from './Pages/PageAssociation/PageAssociations'
import PageUneAssociation from "./Pages/PageAssociation/PageUneAssociation"
import Medicaments from "./Pages/PageMedicament/Medicaments"
import NotFound from "./Pages/NotFound"
import LayoutDashboard from "./Composants/Dashboard/LayoutDashboard"
import Chart from "./Composants/Dashboard/Chart"
import ProfilAdmin from "./Composants/Dashboard/ProfilAdmin"
import Utilisateurs from "./Pages/PageDashboard/Utilisateurs"
import Signalements from './Composants/Dashboard/Signalements'
import ListeAttente from "./Composants/Dashboard/ListeAttente"
import Don from "./Pages/PageAccueil/Don"
import Recuperation from "./Pages/PageAccueil/Recuperation"
import ProtectAdmin from "./Composants/Dashboard/ProtectAdmin"
 
import { 
          Route, 
          createBrowserRouter,
          createRoutesFromElements,
          RouterProvider,
          Navigate
        } from "react-router-dom"

 
const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<Layout/>}>
      <Route index element={<Accueil/>}/>
      <Route path='/Accueil' element={<Accueil/>}/>
      <Route path='/NosServices' element={<NosServices/>}/>
      <Route path="/AProposdeNous" element={<Propos/>}/>
      <Route path="/Connexion" element={<Connexion/>}/> 
      <Route path="/Inscription" element={<Inscription/>}/>
      <Route path="/resetPassword" element={<ReinitialiserMdp/>}/>
      <Route path="/Reactivation" element={<Reactivation/>}/>
      <Route path="/Mail" element={<Mail/>} />
      <Route path="/InscriptionPharmacien" element={<InscriptionPharmacien/>}/>
      <Route path="/InscriptionAssociation" element={<InscriptionAssociation/>}/>
      <Route path="/InscriptionPatient" element={<InscriptionPatient/>}/>
      <Route path="/PageMesAnnonces" element={<PageMesAnnonces/>}/> 
      <Route path="/PageProfilPharmacien" element={<PageProfilPharmacien/>}/>
      <Route path="/PageProfilAssociation" element={<PageProfilAssociation/>}/>
      <Route path="/PageProfilAdmin" element={<PageProfilAdmin/>}/>
      <Route path="/PageProfilPatient" element={<PageProfilPatient/>}/>
      <Route path="/PagePharmacies" element={<PagePharmacies/>}/>
      <Route path="/PageUnePharmacie/:id" element={<PageUnePharmacie/>}/>
      <Route path="/PageAssociations" element={<PageAssociations/>}/>
      <Route path="/PageUneAssociation/:id" element={<PageUneAssociation/>}/>
      <Route path="/Medicaments" element={<Medicaments/>}/>
      <Route path="/Don" element={<Don/>}/>
      <Route path="/Recuperation" element={<Recuperation/>}/>
      <Route element={<ProtectAdmin role={role}/>}>
        <Route path="/Dashboard" element={<LayoutDashboard/>}>
          <Route index  element={<Chart/>}/>
          <Route path="Profil" element={<ProfilAdmin/>}/>
          <Route path="Utilisateurs" element={<Utilisateurs/>}/>
          <Route path="Signalements" element={<Signalements/>} />
          <Route path="Attente" element={<ListeAttente/>} />
        </Route>
      </Route>
      <Route path="/*" element={<NotFound/>}/>
    </Route>
  )
)


function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router}/>
      <ToastContainer/> 
    </React.Fragment>
  )
}

export default App
