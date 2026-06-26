import React from 'react'

const Nav_im = ({ scrollToSection, homeRef, aboutRef, contactusRef, logo}) => {
  return (
    <div>
          <img className='h-screen w-full object-cover' src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              <img className='absolute top-2 left-2 md:left-4 h-24 md:h-40 z-30' src={logo}/>      
          <nav className='absolute top-0 w-full p-4 md:p-8 flex justify-end gap-4 md:gap-8 text-white font-bold text-sm md:text-lg z-10'>
          <button onClick={() => scrollToSection(homeRef)} className='hover:text-orange-500 transition-colors'>Home</button>
          <button onClick={() => scrollToSection(aboutRef)} className='hover:text-orange-500 transition-colors'>About</button>
          <button onClick={() => scrollToSection(contactusRef)} className='hover:text-orange-500 transition-colors'>Contact us</button>
        </nav>
    </div>
  )
}

export default Nav_im
