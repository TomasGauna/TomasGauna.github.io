import React from 'react'

function Contacto() {
  return (
    <div className='flex flex-col items-center justify-start mt-8 w-full mb-8'>
      <p className='lg:text-5xl text-4xl text-center mb-8'>Contacto</p>
      <div className='w-full h-full flex flex-row gap-10 justify-center items-center'>
        <div className='gap-5 flex flex-col'>
          <input type="text" className='rounded-sm w-'/>
          <textarea name="" id="" className='rounded-sm'></textarea>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Contacto