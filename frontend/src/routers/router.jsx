import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "../App";
import { Bs0Circle } from "react-icons/bs";
import Home from "../pages/Home";
import OferteFlash from "../pages/OferteFlash/OferteFlash";
import CentruAjutor from "../components/footer/CentruAjutor";
import Retur from "../components/footer/Retur";
import TermeniSiConditii from "../components/footer/TermeniSiConditii";
import Contact from "../pages/home/Contact.jsx";
import PoliticaDeCofidentialitate from "../components/footer/PoliticaDeCofidentialitate.jsx";
import GarantieSiServicii from "../components/footer/GarantieSiServicii.jsx";
import PoliticaCookie from "../components/footer/PoliticaCookie.jsx";
import CategoriiProduse from "../pages/home/CategoriiProduse.jsx";
import Categorie from "../pages/home/Categorie.jsx";
import Login from "../pages/account/Login.jsx";
import Register from "../pages/account/Register.jsx";
import Favorite from "../pages/Cont/Favorite.jsx";
const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: '/categorii-produse',
        element: <CategoriiProduse/>
      },
      {
        path: "/categorii-produse/:slug",
        element: <Categorie/>
        
      },
      {
        path: "/recomandate",
        element: <div>dsad</div>
      },
      {
        path: "/oferte",
        element: <OferteFlash/>
      },
      {
        path: "/recenzii",
        element: <div>dsad</div>
      },
      {
        path:"/favorite",
        element:<Favorite/>
      },
      ,
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/centru-ajutor",
        element: <CentruAjutor />
      },
      {
        path: "/retur",
        element: <Retur/>
      },
      {
        path: "/termeni-si-conditii",
        element: <TermeniSiConditii/>
      },
      {
        path: "/politica-de-cofidentialitate",
        element: <PoliticaDeCofidentialitate/>
      },
      {
        path:"/garantii-si-servicii",
        element: <GarantieSiServicii/>
      },
      {
        path:"/cookies",
        element: <PoliticaCookie/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
]);

export default router;