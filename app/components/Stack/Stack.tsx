import React from 'react';
import Image from 'next/image';

function Stack() {
  const tecnologias = [
    { 
      name: 'Ts', 
      image: '/iconos/ts.png' 
    },
    { 
      name: 'HTML', 
      image: '/iconos/html.png' 
    },
    { 
      name: 'CSS', 
      image: '/iconos/css.png' 
    },
    { 
      name: 'Sass', 
      image: '/iconos/sass.png' 
    },
    { 
      name: 'Angular', 
      image: '/iconos/angular.png' 
    },
    { 
      name: 'Ionic', 
      image: '/iconos/ionic.png' 
    },
    { 
      name: 'Firebase', 
      image: '/iconos/firebase.png' 
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center mt-8 w-full mb-8'>
      {/* <h1 className='text-5xl mb-8'>Experiencia</h1> */}
      <p className='lg:text-5xl text-4xl'>Tecnologías</p>
      {/* <div className='flex justify-center gap-6 w-full overflow-x-auto'> */}
      {/* <div className='mb-16 lg:flex h-96 w-screen justify-center lg:gap-8'>   */}
      <div className='grid grid-cols-7 gap-14'>
        {tecnologias.map((tecnologia, index) => (
          <div key={index} className="mb-8 mt-8">
              <Image src={tecnologia.image} alt={`Imagen ${tecnologia.name}`} width={75} height={75}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stack