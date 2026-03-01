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
    <div>
      
      {/* HERO con imagen de fondo */}
      <div className="relative flex items-center justify-center overflow-hidden min-h-[600px] pt-16">
        
        {/* Imagen de fondo */}
        <Image
          src="/foto/fondo-presentacion.jpg"
          alt="Fondo"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/40" />

        {/* Contenido */}
        <div className="relative z-10 flex justify-center items-center gap-10 lg:gap-24 lg:flex-row flex-col w-full max-w-5xl mx-auto px-8 lg:px-12 py-16 lg:py-24">
          
          {/* Foto - arriba en mobile, derecha en desktop */}
          <div className="flex justify-center shrink-0 lg:order-2">
            <Image
              src="/foto/tomi.jpg"
              alt="Foto de perfil"
              width={320}
              height={320}
              className="rounded-full shadow-2xl border-4 border-white/40 hover:scale-105 transition-transform duration-300 lg:w-[300px] lg:h-[300px] w-40 h-40 object-cover"
            />
          </div>      

          {/* Texto - abajo en mobile, izquierda en desktop */}
          <div className="flex flex-col gap-2 lg:gap-4 text-center lg:text-left text-white w-full lg:order-1">
            <p className="lg:text-7xl text-5xl font-black leading-tight tracking-wide">
              {translations.nombre}
            </p>
            <p className="lg:text-2xl text-lg font-semibold tracking-widest uppercase mt-1 lg:mt-2">
              {translations.titulo}
            </p>
            <p className="lg:text-lg text-sm text-gray-300 font-light">
              {translations.educacion}
            </p>
            <div className="flex justify-center mt-2 lg:mt-4">
              <Button label={translations.boton} />
            </div>
          </div>
        </div>
      </div>

      {/* Descripción debajo del hero */}
      <div className="text-center lg:mt-16 lg:text-xl mt-10 text-sm w-11/12 mx-auto flex flex-col items-center gap-3 mb-14">
        <p>{translations.descripcion1}</p>
        <p>
          {translations.descripcion2}{' '}
          <Link className="hover:underline text-blue-500 active:text-blue-900" href="https://www.netnix.net/" target="_blank">
            NETNIX
          </Link>
          .
        </p>
        <p>{translations.descripcion3}</p>
      </div>

    </div>
  );
};

export default Presentacion;