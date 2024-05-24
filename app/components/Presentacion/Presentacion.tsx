import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

interface PresentacionProps {
    translations: {
        nombre: string;
        titulo: string;
        educacion: string;
        boton: string;
        descripcion1: string;
        descripcion2: string;
        descripcion3: string;
    };
}

const Presentacion: React.FC<PresentacionProps> = ({ translations }) => {
  return (
    <div className='mb-14'> {/* ACA SEPARO DEL SEPARATOR */}
      <div className="flex justify-center lg:gap-14 lg:mt-16 mt-10 lg:flex-row flex-col">
        <div className="flex justify-center">
          <Image
            src={'/foto/tomi.jpg'}
            alt={''}
            width={400}
            height={400}
            className="rounded-full shadow-xl hover:scale-110 transition-transform lg:w-[400px] lg:h-[400px] w-72"
          />
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="flex flex-col gap-1 w-full">
            <p className="lg:text-7xl text-4xl lg:mt-0 mt-10 font-black">{translations.nombre}</p>
            <p className="lg:text-3xl text-xl lg:mt-6 mt-4">{translations.titulo}</p>
            <p className="lg:text-xl text-sm">{translations.educacion}</p>
            <div className="flex justify-center gap-20 lg:mt-4 mt-6">
              <Button label={translations.boton} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center lg:mt-28 lg:text-2xl mt-14 text-md w-11/12 mx-auto flex flex-col items-center">
        <p className="mb-1">{translations.descripcion1}</p>
        <p className="mb-2">
          {translations.descripcion2}{' '}
          <Link className="hover:underline text-blue-600 active:text-blue-900" href="https://www.netnix.net/">
            NETNIX
          </Link>
          .
        </p>
        <p className="mb-4">{translations.descripcion3}</p>
      </div>
    </div>
  );
};

export default Presentacion;
