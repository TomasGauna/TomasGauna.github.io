import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface HeaderProps {
  onLanguageChange: (language: string) => void;
}

export function Header({ onLanguageChange }: HeaderProps) {
  const [language, setLanguage] = useState('es');

  const handleCopyToClipboard = () => {
    const email = 'tomi.gauna08@gmail.com';
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = email;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        toast.success('Correo copiado al portapapeles', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error('No se pudo copiar el correo al portapapeles', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      console.error('No se pudo copiar el texto: ', err);
    } finally {
      document.body.removeChild(tempTextarea);
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
  };

  return (
    <>
      <header className='w-full bg-gray-100'>
        <div className='container mx-auto py-5 px-4 md:px-8 lg:px-16 xl:px-5 flex justify-between items-center'>
          <div onClick={handleCopyToClipboard} className='flex items-center'>
            <span className='cursor-pointer hover:scale-105 hover:text-blue-400 transition-transform duration-300'>
              tomi.gauna08@gmail.com
            </span>
          </div>
          <div className='flex gap-3'>
            <Link href={'https://github.com/TomasGauna/'} passHref>
              <Image
                alt='Icono de Github'
                src={'/iconos/github.png'}
                width={40}
                height={40}
                className='cursor-pointer hover:scale-110 transition-transform duration-300'
              />
            </Link>
            <Link href={'https://www.linkedin.com/in/tomas-agustin-gauna-373290292/'} passHref>
              <Image
                alt='Icono de LinkedIn'
                src={'/iconos/linkedin.png'}
                width={40}
                height={40}
                className='cursor-pointer hover:scale-110 transition-transform duration-300'
              />
            </Link>
            {/* Selector de idioma */}
            <div className='flex items-center'>
              <select value={language} onChange={handleLanguageChange} className='p-2'>
                <option value='es'>Español</option>
                <option value='en'>English</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
