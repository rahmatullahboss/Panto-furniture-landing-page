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
                   <a href="#shop"><NavberList text='Furniture'/></a>
                   <a href="#shop"><NavberList text='Shop'/></a>
                 <a href="#about">   <NavberList text='About Us'/></a>
                  <a href="#contact">  <NavberList text='Contact'/></a>
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
       
        <nav className={`md:hidden flex items-center justify-between fixed w-full p-4 
   ${scrolled ? "bg-blue-600 text-black shadow-md" : "bg-transparent"}`}>
              <a href="#home">
                        <Image src={Panto} />
            </a>
           <div>
      
           </div>
          <div >
            {
              deing? null:<FaBars className='absolute top-0 right-0 m-3 hover:text-amber-500 duration-500' onClick={hadle}/>
            
            }
            
      
     
          
          </div>
  
  {
    deing ?
          <div className='h-screen   w-full bg-[#000001b3] absolute top-0 left-0'>
      

       < ImCross className='text-white m-3 absolute top-0 right-0'  onClick={hadle}/>
       <div className='top-[50%] left-[50%] absolute -translate-[50%]'>
                <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
                      
               
                    
                   <a href="#shop"><NavberList text='Furniture'/></a>
                    <a href="#shop"><NavberList text='Shop'/></a>
                       <a href="#about">   <NavberList text='About Us'/></a>
                 <a href="#contact">  <NavberList text='Contact'/></a>
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