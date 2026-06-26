import React from 'react'

const Contactus = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen w-full'>
          <div className='w-full md:w-1/2 h-64 md:h-screen'>
          <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1681989490797-dbe51c438b61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww"/>
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center p-8 md:p-20 gap-6 bg-gray-300'>
          <h1 className='text-5xl md:text-8xl text-orange-500'>Contact Us</h1>
          <h1 className='font-bold text-orange-500 text-3xl md:text-5xl'>Azizur Rehman and Associates</h1>
          <div>
          <p className='text-orange-500 text-lg md:text-xl leading-relaxed'>Pandua Kalbazar, Hooghly, West Bengal, 712149
        <br/>Phone: +91 9046371961</p>
            </div>
          </div>
          </div>

  )
}

export default Contactus
