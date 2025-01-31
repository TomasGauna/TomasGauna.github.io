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

  const IMAGE_LANGUAGE_PATH = '/iconos/idiomas.png';

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
      {/* <header className='w-screen bg-gray-100'>
        <div className='container mx-auto py-5 px-4 md:px-8 lg:px-16 xl:px-5 flex justify-between items-center lg:flex-row flex-col lg:gap-0 gap-4'>
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
            <div className='flex items-center'>
              <select value={language} onChange={handleLanguageChange} className='p-2'>
                <option value='es'>Español</option>
                <option value='en'>English</option>
              </select>
            </div>
          </div>
        </div>
      </header> */}

      {/* <header className="overflow-x-hidden top-0 left-0 z-10 backdrop-blur-lg subpixel-antialiased fixed w-screen h-[5rem] flex justify-between items-center px-7"> */}

      <header className="w-full overflow-x-hidden h-20 flex justify-center dark:bg-dusky bg-opacity-70 dark:bg-opacity-70 fixed top-0 left-0 z-10 backdrop-blur-lg subpixel-antialiased">
        <div className="w-1/2 h-full flex items-center justify-center">
          <Image src={IMAGE_LANGUAGE_PATH} alt="Selector de idiomas" width={40} height={40} />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <button
            type="button"
            className="text-black bg-zinc-100 hover:bg-zinc-400 border border-zinc-200 
                 focus:ring-4 focus:outline-none focus:ring-zinc-200 font-medium 
                 rounded-lg text-base px-6 py-2 text-center inline-flex items-center 
                 dark:focus:ring-zinc-800 dark:bg-zinc-200 dark:border-zinc-400 
                 dark:text-black dark:hover:bg-zinc-300 gap-2 h-12"
          >
            <svg className='block group-hover:hidden' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                fill="#000000"
              ></path>
              <path
                d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                fill="#000000"
              ></path>
            </svg>
            <span>Descargar CV</span>
          </button>
        </div>
      </header>
    </>
  );
}
