// "use client"

// import './globals.css';
// import { Header } from './components/Header/Header';
// import { ToastContainer } from 'react-toastify';
// import Presentacion from './components/Presentacion/Presentacion';
// import Experiencia from './components/Experiencia/Experiencia';
// import Educacion from './components/Educacion/Educacion';
// import Stack from './components/Stack/Stack';
// import Contacto from './components/Contacto/Contacto';
// import Footer from './components/Footer/Footer'
// import translationsES from './translations/es.json';
// import translationsEN from './translations/en.json';
// import { useState } from 'react';
// import { Reveal } from './components/Reveal/Reveal';

// export default function Home() {
//   const [language, setLanguage] = useState('es');
//   const handleLanguageChange = (language: string) => {
//     setLanguage(language);
//   };

//   const translations = language === 'es' ? translationsES : translationsEN;


//   return (
//     <div className='w-screen h-screen lg:p-0 p-2 pt-0'>
//       <Header onLanguageChange={handleLanguageChange} />
//       <Presentacion translations={translations.presentacion} />
//       <Experiencia translations={translations.experiencia}/>
//       <Stack />
//       <Educacion />
//       <Contacto />
//       <Footer />
//       <ToastContainer />
//     </div>
//   );
// }
"use client"

import './globals.css';
import { Header } from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import Presentacion from './components/Presentacion/Presentacion';
import Experiencia from './components/Experiencia/Experiencia';
import Educacion from './components/Educacion/Educacion';
import Stack from './components/Stack/Stack';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer'
import translationsES from './translations/es.json';
import translationsEN from './translations/en.json';
import { useState } from 'react';
import { Reveal } from './components/Reveal/Reveal';
import Separator from './components/Separator/Separator';
import Image from 'next/image'

export default function Home() {
  const [language, setLanguage] = useState('es');
  const handleLanguageChange = (language: string) => {
    setLanguage(language);
  };

  const translations = language === 'es' ? translationsES : translationsEN;

  const IMAGE_LANGUAGE_PATH = '/iconos/idiomas.png';
  const IMAGE_DARK_THEME_PATH = '/iconos/oscuro.png';
  const IMAGE_LIGHT_THEME_PATH = '/iconos/claro.png';
  const IMAGE_PHOTO_LANDSCAPE_PATH = '/foto/propia_grande.png';
  const EMAIL = "tomi.gauna08@gmail.com"
  const SVG_ITEM = <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="#000000"></path> <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#000000"></path> </g></svg>;

  return (
    <div className="max-w-6xl flex flex-col items-center justify-center mx-auto">
      {/* Header */}
      <header className="w-full flex items-center justify-between p-4 mt-2 text-white">
        <div className="w-1/2">
          <span className="cursor-pointer">{EMAIL}</span>
        </div>
        <div className="w-1/2 flex justify-end gap-2">
          <Image
            src={IMAGE_LANGUAGE_PATH}
            alt="Selector de idioma"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <Image
            src={IMAGE_LIGHT_THEME_PATH}
            alt="Selector de tema"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
      </header>

      {/* Main */}
      <main className="w-full flex items-center justify-center p-3 mt-2 text-white">
        <section className="w-full flex justify-evenly gap-4">
          <div className="w-2/3 relative">
            <Image
              src={IMAGE_PHOTO_LANDSCAPE_PATH}
              alt="Foto propia en formato landscape"
              width={800}
              height={100}
              className="rounded-3xl"
            />
            <span className="absolute bottom-0 left-0 p-2 rounded-br-xl">
              Tomas Gauna
            </span>
          </div>
          <div className="w-1/3 grid grid-cols-2 gap-4">
            {/* Primer grid item con altura fija */}
            <div className="col-span-2 rounded-3xl w-full h-44 px-8 py-6 gap-3 bg-[#1c1e23] bg-opacity-70 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold">Sobre mí</h2>
              <p className="text-sm text-justify leading-relaxed">
                Soy un desarrollador que busca demostrar su pasión por resolver problemas, mediante soluciones efectivas y de alta calidad.
              </p>
            </div>
            {/* Segundo grid item con altura fija */}
            <div className="col-span-2 rounded-3xl w-full h-44 p-4 bg-[#1c1e23] bg-opacity-70 flex items-center justify-center">
              <span>Algo sobre mí</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
