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
    <section className="bg-white w-full mt-20 flex items-center">
        <div className='w-8/12 h-full bg-yellow-100'>
            a
        </div>
        <div className='w-4/12 bg-red-100'>
          a
        </div>
    </section>
  );
};

export default Presentacion;
