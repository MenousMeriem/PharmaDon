import Layout from "./Composants/Layout/Layout"
import Accueil from "./Pages/PageAccueil/Accueil"
import Connexion from './Pages/PageConnex/Connexion'
import InscriptionPharmacien from './Pages/PageInsc/InscriptionPharmacien'
import InscriptionAssociation from "./Pages/PageInsc/InscriptionAssociation"
import InscriptionPatient from './Pages/PageInsc/InscriptionPatient'
import InformationsAssociationPersonnelles from "./Composants/Inscription/Association/InformationsAssociationPersonnelles"
import InformationsAssociationProfessionnelles from "./Composants/Inscription/Association/InformationsAssociationProfessionnelles"
import InformationsPharmacienPersonnelles from './Composants/Inscription/Pharmacien/InformationsPharmacienPersonnelles'
import InformationsPharmacienProfesionnelles from "./Composants/Inscription/Pharmacien/InformationsPharmacienProfesionnelles"
import InformationsPatientPersonnelles from "./Composants/Inscription/Patient/InformationsPatientPersonnelles"
import InformationsPatientProfesionnelles from "./Composants/Inscription/Patient/InformationsPatientProfesionnelles"
import PlusieursPharmacies from "./Pages/Page_Pharm/PlusieursPharmacies"
import UnePharmacie from './Pages/Page_Pharm/UnePharmacie'
import { 
          Route, 
          createBrowserRouter,
          createRoutesFromElements,
          RouterProvider
        } from "react-router-dom"


const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<Layout/>}>
      <Route path="/Accueil" element={<Accueil/>}/>
      <Route path="/Connexion" element={<Connexion/>}/>
      <Route path="/InscriptionPharmacien" element={<InscriptionPharmacien/>}/>
      <Route path="/InscriptionAssociation" element={<InscriptionAssociation/>}/>
      <Route path="/InscriptionPatient" element={<InscriptionPatient/>}/>
      <Route path="/InformationsAssociationPersonnelles" element={<InformationsAssociationPersonnelles/>}/>
      <Route path="/InformationsAssociationProfessionnelles" element={<InformationsAssociationProfessionnelles/>}/>
      <Route path="/InformationsPharmacienPersonnelles" element={<InformationsPharmacienPersonnelles/>}/> 
      <Route path="/InformationsPharmacienProfesionnelles" element={<InformationsPharmacienProfesionnelles/>}/> 
      <Route path="/InformationsPatientPersonnelles" element={<InformationsPatientPersonnelles/>}/>
      <Route path="/InformationsPatientProfesionnelles" element={<InformationsPatientProfesionnelles/>}/>
      <Route path="/PlusieursPharmacies" element={<PlusieursPharmacies/>}/>
      <Route path="/UnePharmacie" element={<UnePharmacie/>}/>
    </Route>
  )
)


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
