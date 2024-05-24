
import React from 'react';
import Image from 'next/image';
import BoxE from '../BoxE/BoxE';

const educations = [
  {
    imgSrc: '/educacion/arg-programa-inv.png',
    description: 'Descripción del curso/programa Arg Programa',
    date: 'Feb 2022  - Mar 2022',
  },
  {
    imgSrc: '/educacion/utn-2.png',
    description: 'Descripción del curso/programa UTN',
    date: 'Feb 2022 - Dic 2023',
  },
  {
    imgSrc: '/educacion/codo-codo.png',
    description: 'Descripción del curso/programa Codo a Codo',
    date: 'Mar 2024 - En Curso',
  },
];

function Educacion() {
  return (
    <div className='flex flex-col items-center justify-start mt-8 w-full mb-6'>
      <p className='lg:text-5xl text-4xl text-center mb-14'>Educación</p>
      <div className='w-full flex flex-col items-center space-y-8 mt-10 mb-10'>
          <div className='w-full h-full flex flex-col gap-5 items-center justify-center'>
          {educations.map((education, index) => (
            <BoxE key={index} education={education} />
          ))}
          </div>
      </div>
    </div>
  );
}

export default Educacion;
