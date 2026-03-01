import React from 'react';
import Image from 'next/image';

interface Education {
  imgSrc: string;
  institution: string;
  description: string;
  date: string;
}

interface EducacionProps {
  isDark?: boolean;
  translations: {
    title: string;
    educations: Education[];
  };
}

function Educacion({ isDark = false, translations }: EducacionProps) {
  return (
    <div className='flex flex-col items-center justify-start mt-8 w-full mb-6'>
      <p className='lg:text-5xl text-4xl text-center mb-14'>{translations.title}</p>

      <div className='w-full flex flex-col gap-0'>
        {translations.educations.map((education, index) => (
          <div
            key={index}
            className={`flex items-center gap-6 py-6 ${index !== translations.educations.length - 1
                ? `border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`
                : ''
              }`}
          >
            {/* Fecha fija a la izquierda */}
            <div className="w-28 sm:w-40 shrink-0">
              <p className={`text-xs font-mono ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                {education.date}
              </p>
            </div>

            {/* Logo + info */}
            <div className="flex items-center gap-3 flex-grow">
              <Image
                src={education.imgSrc}
                alt={education.institution}
                width={40}
                height={40}
                className="rounded-lg w-10 h-10 object-contain shrink-0"
              />
              <div>
                <p className={`font-semibold text-sm sm:text-base mb-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {education.institution}
                </p>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {education.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Educacion;