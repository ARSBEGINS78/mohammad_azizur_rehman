import React, { useRef } from 'react'
import About from './About'
import Home from './Home'
import Nav_im from './Nav_im';
import assoLogo from './assets/asso_logo.png';
import Contactus from './Contactus';

const App = () => {
  
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactusRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  
  return (
    <div className='w-full overflow-hidden'>
    <div className='relative bg-white w-full h-screen'>
        
  <Nav_im scrollToSection={scrollToSection} 
  homeRef={homeRef} 
  aboutRef={aboutRef} 
  contactusRef={contactusRef}
  logo={assoLogo} />

        <div className='absolute top-20 md:top-50 left-5 md:left-20 z-10 p-4 md:p-0'>
          <h1 className='text-orange-500 text-4xl md:text-6xl font-bold text-left'>Do you want to make your<br/>dream home a reality?</h1>   
          <div ref={homeRef}><Home/></div>
      <button onClick={() => scrollToSection(contactusRef)} className='border-4 text-3xl border-orange-500 rounded-2xl bg-white hover:bg-yellow-300 p-1 mt-6'>Contact Me</button>
      </div>
      </div >
        <div ref={aboutRef}><About/></div> 
        <div ref={contactusRef}><Contactus/></div>
      </div>
      )
}

export default App
