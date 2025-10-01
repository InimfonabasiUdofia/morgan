

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import Testinomial from "./pages/testinomial/testionial";
import Service from "./pages/service/service";
import Potfolio1 from "./pages/gallary/potfolio1";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home></Home></>,
    }, 
    {
      path: "/about",
      element: <><About></About></>,
    }, 
      {
      path: "/blog",
      element: <><Blog></Blog></>,
    },
     {
      path: "/contact",
      element: <><Contact></Contact></>,
    },
      {
      path: "/testionomial",
      element: <><Testinomial></Testinomial></>,
    },
    {
      path: "/service",
      element: <><Service></Service></>,
    },
       {
      path: "/potfolio1",
      element: <><Potfolio1></Potfolio1></>,
    }
  
  ]);
  return(
    <>
          <RouterProvider router={router} />
          
    </>
  ) 
     
  
}

export default App
