import React from 'react'
import {  Outlet } from 'react-router-dom'
import Navber from './Navber'

const Rootpage = () => {
  return (
   <div>
<Navber/>
        <Outlet/>
        <h1>footer</h1>
    </div>
  )
}

export default Rootpage