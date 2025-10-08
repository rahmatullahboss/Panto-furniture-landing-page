import React from 'react'
import Navber from '../layout/Navber'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


const Rootpage = () => {
  return (
    <div>
        <Navber />
        
         <Outlet/>
        
        
        <Footer/>
    </div>
  )
}

export default Rootpage