import React from 'react';
import Image from 'next/image';

const educations = [
  {
    imgSrc: '/educacion/arg-programa.png',
    altText: 'Descripción de la imagen de Arg Programa',
    description: 'Descripción del curso/programa Arg Programa',
    date: 'Feb 2022  - Mar 2022',
  },
  {
    imgSrc: '/educacion/UTN.png',
    altText: 'Descripción de la imagen de UTN',
    description: 'Descripción del curso/programa UTN',
    date: 'Feb 2022 - Dic 2023',
  },
  {
    imgSrc: '/educacion/codo-a-codo.png',
    altText: 'Descripción de la imagen de Codo a Codo',
    description: 'Descripción del curso/programa Codo a Codo',
    date: 'Mar 2024 - En Curso',
  },
];

function Educacion() {
  return (
    <div className='flex flex-col items-center justify-start mt-8 w-full mb-8'>
      <p className='lg:text-5xl text-4xl text-center mb-8'>Educación</p>
      <div className='w-full flex flex-col items-center space-y-8'>
        {educations.map((education, index) => (
          <div key={index} className='flex flex-col md:flex-row items-center md:items-start w-3/4'>
            <div className='flex flex-col items-center'>
              <Image
                src={education.imgSrc}
                alt={education.altText}
                width={200}
                height={200}
              />
              <p className='text-gray-500 italic mt-2'>{education.date}</p>
            </div>
            <div className='md:ml-8 mt-4 md:mt-0 text-center md:text-left flex flex-col justify-center'>
              <p>{education.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Educacion;
