import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavberList from '../component/NavberList'
import { FaShoppingBag } from 'react-icons/fa'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Container from '../component/Container';
import Image from '../component/Image';
import Panto from '../assets/panto.png'
const Navber = () => {
  let [deing,setDeing]=useState(false)
  
   const [scrolled, setScrolled] = useState(false);
  let hadle=()=>(
    setDeing(!deing)
  )

   useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section>
   <nav className={`fixed top-0 left-0 w-full py-6 z-50 transition duration-500 hidden md:block
      ${scrolled ? "bg-blue-600 text-black shadow-md" : "bg-transparent text-white"}`}>
      
      <Container>
          
          
           <div className='flex justify-between px-6'>
               
            <a href="#home">
                        <Image src={Panto} />
            </a>

          {/* <Link to='/'><Image src={Panto} /></Link>
          
            <div > */}
            <div>
                <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
                   <Link to="#shop"><NavberList text='Furniture'/></Link>
                   <Link to="#shop"><NavberList text='Shop'/></Link>
                 <Link to="/product"><NavberList text='Products'/></Link>
                  <Link to="#about">   <NavberList text='About Us'/></Link>
                  <Link to="#contact">  <NavberList text='Contact'/></Link>
                </ul>
            </div>
            <div  className='hidden md:block cursor-pointer relative'>
             <FaShoppingBag className='text-lg text-white'/>
               <span className='absolute text-amber-50 bg-amber-500 top-0 -right-3  h-5 w-5 rounded-full flex justify-center items-center'>
                0
              </span>  
              </div>
            
         </div> 
     
        
        
          
        </Container>
</nav>


        {/* mobile */}
       
        <nav className={`md:hidden flex items-center justify-between fixed w-full p-4 z-50
   ${scrolled ? "bg-blue-600 text-black shadow-md" : "bg-transparent"}`}>
              <a href="#home">
                        <Image src={Panto} className="h-8" />
            </a>
           <div>
      
           </div>
          <div >
            {
              deing? null:<FaBars className='absolute top-0 right-0 m-3 hover:text-amber-500 duration-500 text-2xl' onClick={hadle}/>
            
            }
            
      
     
          
          </div>
  
  {
    deing ?
          <div className='h-screen w-full bg-[#000001b3] absolute top-0 left-0 z-50'>
      

       < ImCross className='text-white m-3 absolute top-0 right-0 text-2xl'  onClick={hadle}/>
       <div className='top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2'>
                <ul className='flex flex-col items-center gap-8'>
                      
               
                    
                   <Link to="#shop" onClick={hadle}><NavberList text='Furniture'/></Link>
                    <Link to="#shop" onClick={hadle}><NavberList text='Shop'/></Link>
                       <Link to="/product" onClick={hadle}><NavberList text='Products'/></Link>
                       <Link to="#about" onClick={hadle}>   <NavberList text='About Us'/></Link>
                 <Link to="#contact" onClick={hadle}>  <NavberList text='Contact'/></Link>
                </ul>
            </div>
          </div>:null
  }
          
       <div>
            
       </div>
         
         
        </nav>
       
    </section>
  )
}

export default Navber