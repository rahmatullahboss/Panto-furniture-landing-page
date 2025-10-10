import React, {  useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
   const location = useLocation();
   
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
  
  // Function to handle navigation to homepage sections
  const navigateToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
    } else {
      // If on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu
    setDeing(false);
  };
  
  // Determine text color based on scroll state
  const getTextColor = () => {
    // When scrolled, use white text
    // When not scrolled, use black text
    return scrolled ? "text-white" : "text-black";
  };
  
  // Determine background class based on scroll state
  const getBackgroundClass = () => {
    // When scrolled, use blue background
    // When not scrolled, use transparent background
    return scrolled ? "bg-blue-600" : "bg-transparent";
  };
  
  return (
    <section>
   <nav className={`fixed top-0 left-0 w-full py-6 z-50 transition duration-500 hidden md:block
      ${getBackgroundClass()} ${scrolled ? "shadow-md" : ""}`}>
      
      <Container>
          
          
           <div className='flex justify-between px-6'>
               
            <Link to="/">
              <Image src={Panto} />
            </Link>

            <div>
                <ul className={`flex flex-col md:flex-row items-center md:space-x-8 gap-8 ${getTextColor()}`}>
                   <button onClick={() => navigateToSection('shop')} className="cursor-pointer"><NavberList text='Furniture'/></button>
                   <button onClick={() => navigateToSection('shop')} className="cursor-pointer"><NavberList text='Shop'/></button>
                   <Link to="/product"><NavberList text='Products'/></Link>
                  <button onClick={() => navigateToSection('about')} className="cursor-pointer"><NavberList text='About Us'/></button>
                  <button onClick={() => navigateToSection('contact')} className="cursor-pointer"><NavberList text='Contact'/></button>
                </ul>
            </div>
            <div  className={`hidden md:block cursor-pointer relative ${getTextColor()}`}>
             <FaShoppingBag className='text-lg'/>
               <span className='absolute text-amber-50 bg-amber-500 top-0 -right-3  h-5 w-5 rounded-full flex justify-center items-center text-xs'>
                0
              </span>  
              </div>
            
         </div> 
     
        
        
          
        </Container>
</nav>


        {/* mobile */}
       
        <nav className={`md:hidden flex items-center justify-between fixed w-full p-4 z-50
   ${scrolled ? "bg-blue-600" : "bg-transparent"} ${getTextColor()}`}>
              <Link to="/">
                <Image src={Panto} className="h-8" />
              </Link>
           <div>
      
           </div>
          <div >
            {
              deing? null:<FaBars className={`absolute top-0 right-0 m-3 hover:text-amber-500 duration-500 text-2xl ${getTextColor().includes('white') ? 'text-white' : 'text-black'}`} onClick={hadle}/>
            
            }
            
      
     
          
          </div>
  
  {
    deing ?
          <div className='h-screen w-full bg-[#000001b3] absolute top-0 left-0 z-50'>
      

       < ImCross className={`text-white m-3 absolute top-0 right-0 text-2xl`}  onClick={hadle}/>
       <div className='top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2'>
                <ul className='flex flex-col items-center gap-8 text-white'>
                      
               
                    
                   <button onClick={() => navigateToSection('shop')} className="cursor-pointer"><NavberList text='Furniture'/></button>
                    <button onClick={() => navigateToSection('shop')} className="cursor-pointer"><NavberList text='Shop'/></button>
                       <Link to="/product" onClick={() => setDeing(false)}><NavberList text='Products'/></Link>
                       <button onClick={() => navigateToSection('about')} className="cursor-pointer"><NavberList text='About Us'/></button>
                 <button onClick={() => navigateToSection('contact')} className="cursor-pointer"><NavberList text='Contact'/></button>
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