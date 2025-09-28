

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact";
import Testinomial from "./pages/testinomial/testionial";



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
    }
  
  ]);
  return(
    <>
          <RouterProvider router={router} />
          
    </>
  ) 
     
  
}

export default App
