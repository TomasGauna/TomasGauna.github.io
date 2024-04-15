import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Header() {
  function handleCopyToClipboard(){
    const email = 'tomi.gauna08@gmail.com';
    navigator.clipboard.writeText(email);
    toast.success('Correo copiado al portapapeles', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
  };

  return (
    <header className='w-full bg-gray-100'>
      <div className="container mx-auto py-5 px-4 md:px-8 lg:px-16 xl:px-5">
        <div className="flex flex-row items-center justify-between">
          <div onClick={handleCopyToClipboard} className="flex items-center">
            <span className='cursor-pointer hover:scale-105 hover:text-blue-400 transition-transform duration-300'>tomi.gauna08@gmail.com</span>
          </div>
          <div className="flex flex-row gap-3">
            <Link href={'https://www.linkedin.com/in/tomas-agustin-gauna-373290292/'} passHref>
                <Image
                  alt="Icono de LinkedIn"
                  src={"/iconos/linkedin.png"}
                  width={40}
                  height={40}
                  className="cursor-pointer hover:scale-110 transition-transform duration-300"
                />
            </Link>
            <Link href={'https://github.com/TomasGauna/'} passHref>
              <Image
                  alt="Icono de Github"
                  src={"/iconos/github.png"}
                  width={40}
                  height={40}
                  className="cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}