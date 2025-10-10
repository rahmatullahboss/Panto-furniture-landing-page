import React from 'react'
import Hero from '../component/Hero'
import Choose from './Choose'
import Shop from './Shop'
import Expreance from './Expreance'
// import Matarial from './matarial'
import Tetimonial from './Tetimonial'

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Choose/>
      <Shop/>
      <Expreance/>
      {/* <Matarial/> */}
      {/* <Tetimonial/> */}
    </div>
  )
}

export default Homepage