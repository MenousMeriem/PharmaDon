import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'
import Layout from "./Composants/Layout/Layout"
import Accueil from "./Pages/PageAccueil/Accueil"
import Connexion from './Pages/PageConnex/Connexion'
import Inscription from "./Composants/Inscription/Inscription"
import InscriptionPharmacien from './Pages/PageInsc/InscriptionPharmacien'
import InscriptionAssociation from "./Pages/PageInsc/InscriptionAssociation"
import InscriptionPatient from './Pages/PageInsc/InscriptionPatient'
import InformationsAssociation from "./Composants/Inscription/Association/InformationsAssociation"
import InformationsPharmacien from './Composants/Inscription/Pharmacien/InformationsPharmacien'
import InformationsPatient from "./Composants/Inscription/Patient/InformationsPatient"
import PageProfilPharmacien from './Pages/PageProfil/PageProfilPharmacien'
import PageProfilPatient from './Pages/PageProfil/PageProfilPatient'
import PageProfilAdmin from './Pages/PageProfil/PageProfilAdmin'
import PageProfilAssociation from './Pages/PageProfil/PageProfilAssociation'
import PageMesAnnonces from './Pages/PageMesAnnonces/PageMesAnnonces'
import PagePharmacies from "./Pages/PagePharmacies/PagePharmacies"
import PageUnePharmacie from './Pages/PagePharmacies/PageUnePharmacie'
import PageAssociations from './Pages/PageAssociation/PageAssociations'
import NosServices from "./Pages/PageServices/NosServices"
import Propos from "./Pages/PagePropos/Propos"
import NotFound from "./Pages/NotFound"
 
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
      <Route path="/Accueil" element={<Accueil/>}/>
      <Route path='/NosServices' element={<NosServices/>}/>
      <Route path="/AProposdeNous" element={<Propos/>}/>
      <Route path="/Connexion" element={<Connexion/>}/> 
      <Route path="/Inscription" element={<Inscription/>}/>
      <Route path="/InscriptionPharmacien" element={<InscriptionPharmacien/>}/>
      <Route path="/InscriptionAssociation" element={<InscriptionAssociation/>}/>
      <Route path="/InscriptionPatient" element={<InscriptionPatient/>}/>
      <Route path="/InformationsAssociation" element={<InformationsAssociation/>}/>
      <Route path="/InformationsPharmacien" element={<InformationsPharmacien/>}/> 
      <Route path="/InformationsPatient" element={<InformationsPatient/>}/>
      <Route path="/PageMesAnnonces" element={<PageMesAnnonces/>}/> 
      <Route path="/PageProfilPharmacien" element={<PageProfilPharmacien/>}/>
      <Route path="/PageProfilAssociation" element={<PageProfilAssociation/>}/>
      <Route path="/PageProfilAdmin" element={<PageProfilAdmin/>}/>
      <Route path="/PageProfilPatient" element={<PageProfilPatient/>}/>
      <Route path="/PagePharmacies" element={<PagePharmacies/>}/>
      <Route path="/PageUnePharmacie" element={<PageUnePharmacie/>}/>
      <Route path="/PageAssociations" element={<PageAssociations/>}/>
      <Route path="/*" element={<NotFound/>}/>
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
