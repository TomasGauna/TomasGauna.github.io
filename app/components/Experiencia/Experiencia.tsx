import React from 'react';
import Box from '../Box/Box';

interface ExperienciaProps {
  translations: {
    title: string;
    projects: {
      title: string;
      description: string;
      images: string[];
      repoLink: string;
    }[];
    boxTranslations: {
      verRepositorio: string;
    };
  }
}

const Experiencia: React.FC<ExperienciaProps> = ({ translations }) => {
  return (
    <div className='flex flex-col items-center justify-center mt-10 w-full mb-8'> {/* ACA SEPARO DEL SEPARATOR */}
      <p className='lg:text-5xl text-4xl mb-14'>{translations.title}</p>
      <div className='mb-16 flex lg:flex-row flex-col h-full items-center lg:items-baseline lg:h-96 w-screen justify-center lg:gap-6'>
        {translations.projects.map((project, index) => (
          <div key={index} className='mb-8 mt-8'>
            <Box {...project} translations={translations.boxTranslations} />
          </div>
        ))}
      </div>
      <div>
        {/* <p>ACA IRIA LO QUE HAGO EN NETNIX, QUE LO TENGO QUE PENSAR BIEN</p> */}
      </div>
      
    </div>
  );
};

export default Experiencia;
