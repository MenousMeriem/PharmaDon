import Layout from "./Composants/Layout/Layout"
// import Connexion from "./Pages/Page_Connex/Connexion"

import { 
          Route, 
          createBrowserRouter,
          createRoutesFromElements,
          RouterProvider
        } from "react-router-dom"

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<Layout/>}>
      {/* <Route path="/" element={<Connexion/>}/> */}
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
