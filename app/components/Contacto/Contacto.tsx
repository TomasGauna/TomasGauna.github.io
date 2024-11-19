import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Contacto() {
  const numeroTelefono = "+549 388-500-5210";
  const email = "tomi.gauna08@gmail.com";

  return (
    <>
      <div className='flex flex-col items-center justify-start mt-8 w-full mb-8'>
        <p className='text-5xl lg:text-6xl text-center mb-10'>Contacto</p>
        <div className='flex flex-wrap lg:flex-row justify-center items-center lg:gap-32 gap-6'>
          <div className="flex flex-col gap-px items-center mt-10">
            <Link href="https://wa.me/+5493885005210" target="_blank" rel="noopener noreferrer" target="_blank">
              <Image src="/contacto/whatsapp.png" width={32} height={32} alt="WhatsApp" className="lg:w-32 lg:h-32 w-20 mb-2 hover:scale-105 transition-transform active:scale-100" />
            </Link>
            <p className="lg:text-lg text-sm">{numeroTelefono}</p>
          </div>
          <div className="flex flex-col gap-px items-center mt-10">
            <Link href="mailto:tomi.gauna08@gmail.com" target="_blank" rel="noopener noreferrer" target="_blank">
              <Image src="/contacto/gmail.png" width={32} height={32} alt="Gmail" className="lg:w-32 lg:h-32 w-20 mb-2 hover:scale-105 transition-transform active:scale-100" />
            </Link>
            <p className="lg:text-lg text-sm">{email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
