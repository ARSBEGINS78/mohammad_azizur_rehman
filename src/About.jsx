import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen w-full'>
          <div className='w-full md:w-1/2 h-64 md:h-screen'>
          <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww"/>
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center p-8 md:p-20 bg-white'>
        <h1 className='text-5xl md:text-8xl text-black'>About</h1>
          <h1 className='font-bold text-orange-500 text-3xl md:text-5xl mt-4'>Azizur Rehman and Associates</h1>
          <div className='flex flex-col'>
          <p className='text-black text-lg md:text-xl mt-6 leading-relaxed'>Azizur Rehman Sheikh has a experience of 20 years. He holds a degree
            in Archtecture. He can do your dreams come true.<br/>
            “To me, a building — if it’s beautiful — is the love of one man. He’s made it out of his love for space, materials, things like that.” — Martha Graham
          </p></div>
          </div>
        </div>
  )
}

export default About
