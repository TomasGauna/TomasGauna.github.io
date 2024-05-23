import Link from 'next/link';
import React from 'react';

function Contacto() {
  const numeroTelefono = "+54 388-500-5210";
  const email = "tomi.gauna08@gmail.com";

  return (
    <>
      <div className='flex flex-col items-center justify-start mt-8 w-full mb-8'>
        <p className='text-5xl lg:text-6xl text-center mb-8'>Contacto</p>
        <div className='flex flex-wrap justify-center items-center gap-10'>
          <div className="flex flex-col gap-px items-center">
            <Link href="https://wa.me/+543885005210" target="_blank" rel="noopener noreferrer">
              <img src="/contacto/whatsapp.png" alt="WhatsApp" className="w-32 h-32 mb-2 hover:scale-105 transition-transform active:scale-100" />
            </Link>
            <p className="text-lg">Teléfono: {numeroTelefono}</p>
          </div>
          <div className="flex flex-col gap-px items-center">
            <Link href="mailto:tomi.gauna08@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="/contacto/gmail.png" alt="Gmail" className="w-32 h-32 mb-2 hover:scale-105 transition-transform active:scale-100" />
            </Link>
            <p className="text-lg">Email: {email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
