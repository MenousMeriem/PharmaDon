import Layout from "./Composants/Layout/Layout"
import Accueil from "./Pages/PageAccueil/Accueil"
import Connexion from './Pages/PageConnex/Connexion'
import InscriptionPharmacien from './Pages/PageInsc/InscriptionPharmacien'
import InscriptionAssociation from "./Pages/PageInsc/InscriptionAssociation"
import InscriptionPatient from './Pages/PageInsc/InscriptionPatient'
import InformationsAssociation from "./Composants/Inscription/Association/InformationsAssociation"
import InformationsPharmacien from './Composants/Inscription/Pharmacien/InformationsPharmacien'
import InformationsPatient from "./Composants/Inscription/Patient/InformationsPatient"
import PageProfilPharmacien from './Pages/PageProfil/PageProfilPharmacien'
import PageAnnoncesPharmacien from './Pages/PagesAnnonces/PageAnnoncesPharmacien'
import PageProfilAdmin from './Pages/PageProfil/PageProfilAdmin'
import PlusieursPharmacies from "./Pages/Page_Pharm/PlusieursPharmacies"
import UnePharmacie from './Pages/Page_Pharm/UnePharmacie'
import NosServices from "./Pages/PageServices/NosServices"

import { 
          Route, 
          createBrowserRouter,
          createRoutesFromElements,
          RouterProvider,
          Navigate
        } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'
 
const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<Layout/>}>
      <Route path="/Accueil" element={<Accueil/>}/>
      <Route path='/NosServices' element={<NosServices/>}/>
      <Route path="/Connexion" element={<Connexion/>}/> 
      <Route path="/InscriptionPharmacien" element={<InscriptionPharmacien/>}/>
      <Route path="/InscriptionAssociation" element={<InscriptionAssociation/>}/>
      <Route path="/InscriptionPatient" element={<InscriptionPatient/>}/>
      <Route path="/InformationsAssociation" element={<InformationsAssociation/>}/>
      <Route path="/InformationsPharmacien" element={<InformationsPharmacien/>}/> 
      <Route path="/InformationsPatient" element={<InformationsPatient/>}/>
      <Route path="/PageProfilPharmacien" element={<PageProfilPharmacien/>}/>
      <Route path="/PageAnnoncesPharmacien" element={<PageAnnoncesPharmacien/>}/> 
        {/* <Route index element={<PageProfil/>}/>
        </Route>*/}
      <Route path="/PageProfilAdmin" element={<PageProfilAdmin/>}/>
      <Route path="/PlusieursPharmacies" element={<PlusieursPharmacies/>}/>
      <Route path="/UnePharmacie" element={<UnePharmacie/>}/>
    </Route>
  )
)


function App() {

  return (
    <>
      <RouterProvider router={router}/>
     <ToastContainer/> 
    </>
  )
}

export default App
