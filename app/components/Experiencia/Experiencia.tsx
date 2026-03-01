import React from 'react';
import Box from '../Box/Box';
import Image from 'next/image';
import Link from 'next/link';

interface Company {
  name: string;
  role: string;
  period: string;
  present?: string;
  description: string;
  logo: string;
  logoDark?: string;
  url: string;
}

interface ExperienciaProps {
  translations: {
    title: string;
    companies: Company[];
    projectsTitle: string;
    projects: {
      title: string;
      description: string;
      images: string[];
      repoLink: string;
    }[];
    boxTranslations: {
      verRepositorio: string;
    };
  };
  isDark: boolean;
}

const Experiencia: React.FC<ExperienciaProps> = ({ translations, isDark }) => {
  return (
    <div className={`flex flex-col items-center justify-center mt-10 w-full mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <p className='lg:text-5xl text-4xl mb-16'>{translations.title}</p>

      {/* Cards empresas */}
      <div className="w-full flex flex-col gap-4 mb-16">
        {translations.companies.map((company, index) => (
          <div
            key={index}
            className={`w-full rounded-2xl p-6 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">

              {/* Logo a la izquierda, más grande */}
              <div className="shrink-0">
                <Image
                  src={isDark && company.logoDark ? company.logoDark : company.logo}
                  alt={company.name}
                  width={64}
                  height={64}
                  className="rounded-xl w-16 h-16 object-contain"
                />
              </div>

              {/* Info a la derecha */}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <Link
                    href={company.url}
                    target="_blank"
                    className="font-bold text-xl hover:text-blue-500 transition-colors duration-200"
                  >
                    {company.name}
                  </Link>
                </div>

                <p className={`text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {company.role}
                </p>

                <p className={`text-xs font-mono mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {company.period}
                </p>

                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {company.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Proyectos */}
      {/* <p className='lg:text-3xl text-2xl mb-10 self-start'>{translations.projectsTitle}</p>
      <div className='flex lg:flex-row flex-col gap-6 w-full'>
        {translations.projects.map((project, index) => (
          <Box key={index} {...project} translations={translations.boxTranslations} />
        ))}
      </div> */}

    </div>
  );
};

export default Experiencia;