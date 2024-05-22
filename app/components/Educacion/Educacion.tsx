
import React from 'react';
import Image from 'next/image';
import BoxE from '../BoxE/BoxE';

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
          <div className='w-full h-full flex items-center justify-center'>
          {educations.map((education, index) => (
            <BoxE />
          ))}
          </div>
      </div>
    </div>
  );
}

export default Educacion;
