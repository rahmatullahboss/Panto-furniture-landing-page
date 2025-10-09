import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Homepage from './page/Homepage';
import About from './page/About';
import Contact from './page/Contact';
import Shop from './page/Shop';
import Product from './page/Product';
import Rootpage from './page/Rootpage';
const router = createBrowserRouter(
  createRoutesFromElements(
 <>
   <Route
      path="/"
      element={< Rootpage/>}
     
    >
     <Route
      index
      element={< Homepage/>}
     
    >
   
    </Route>
     <Route
      path="/about"
      element={< About/>}
     
    >
   
    </Route>
     <Route
      path="/contact"
      element={< Contact/>}
     
    >
   
    </Route>
     <Route
      path="/shop"
      element={< Shop/>}
     
    >
   
    </Route>
    
    <Route
      path="/product"
      element={< Product/>}
     
    >
   
    </Route>
    
    
    </Route>
 </>
  )
);

const App = () => {
  return (
    // <div className="bg-amber-700 text-blue-700">App</div>
     <RouterProvider router={router} />
      
       
  )
}

export default App