import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface HeaderProps {
  onLanguageChange: (language: string) => void;
  onThemeChange: (isDark: boolean) => void;
}

export function Header({ onLanguageChange, onThemeChange }: HeaderProps) {
  const [language, setLanguage] = useState('es');
  const [isDark, setIsDark] = useState(false);

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

  const handleThemeChange = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    onThemeChange(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
  }

  return (
    <header className={`w-full shadow-md fixed top-0 left-0 z-50 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className='max-w-4xl mx-auto py-4 px-6 flex justify-between items-center'>
        
        <span className={`font-medium text-sm sm:text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Tomas Gauna
        </span>

        <div className='flex gap-2 sm:gap-3 items-center'>
          <Link href='https://github.com/TomasGauna/' target="_blank">
            <Image
              alt='Icono de Github'
              src='/iconos/github.png'
              width={26}
              height={26}
              className='cursor-pointer hover:scale-110 transition-transform duration-300'
            />
          </Link>
          <Link href='https://www.linkedin.com/in/tomas-agustin-gauna-373290292/' target="_blank">
            <Image
              alt='Icono de LinkedIn'
              src='/iconos/linkedin.png'
              width={26}
              height={26}
              className='cursor-pointer hover:scale-110 transition-transform duration-300'
            />
          </Link>
          
          <select 
            value={language} 
            onChange={handleLanguageChange} 
            className={`p-1 sm:p-2 bg-transparent text-sm sm:text-base cursor-pointer ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            <option value='es'>Español</option>
            <option value='en'>English</option>
          </select>

          <button
            onClick={handleThemeChange}
            className={`p-1.5 rounded-full transition-colors duration-300 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}