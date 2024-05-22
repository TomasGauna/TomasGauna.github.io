"use client"

import './globals.css';
import { Header } from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import Presentacion from './components/Presentacion/Presentacion';
import Experiencia from './components/Experiencia/Experiencia';
import Educacion from './components/Educacion/Educacion';
import Stack from './components/Stack/Stack';
import Contacto from './components/Contacto/Contacto';
import translationsES from './translations/es.json';
import translationsEN from './translations/en.json';
import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState('es');
  const handleLanguageChange = (language: string) => {
    setLanguage(language);
  };

  const translations = language === 'es' ? translationsES : translationsEN;


  return (
    <div className='w-screen h-screen lg:p-0 p-2 pt-0'>
      <Header onLanguageChange={handleLanguageChange} />
      <Presentacion translations={translations.presentacion} />
      <Experiencia translations={translations.experiencia}/>
      <Stack />
      <Educacion />
      <Contacto />
      <ToastContainer />
    </div>
  );
}
