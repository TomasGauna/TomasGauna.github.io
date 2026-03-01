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

export default function Home() {
  const [language, setLanguage] = useState('es');
  const [isDark, setIsDark] = useState(false);

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
  };
  
  const handleThemeChange = (dark: boolean) => {
    setIsDark(dark);
  };

  const translations = language === 'es' ? translationsES : translationsEN;

  return (
    <div className='min-h-screen w-full overflow-x-hidden'>
      <Header onLanguageChange={handleLanguageChange} onThemeChange={handleThemeChange} isDark={isDark} />
      
      {/* Presentacion fuera del contenedor centrado, ocupa todo el ancho */}
      <Reveal width="100%">
        <Presentacion translations={translations.presentacion} />
      </Reveal>

      {/* El resto centrado */}
      <div className='max-w-4xl mx-auto px-6'>
        <Reveal width='100%'>
          <Separator />
        </Reveal>
        <Reveal width="100%">
          <Experiencia translations={translations.experiencia} />
        </Reveal>
        <Reveal width='100%'>
          <Separator />
        </Reveal>
        <Reveal width="100%">
          <Stack />
        </Reveal>
        <Reveal width='100%'>
          <Separator />
        </Reveal>
        <Reveal width="100%">
          <Educacion />
        </Reveal>
        <Reveal width='100%'>
          <Separator />
        </Reveal>
        <Reveal width="100%">
          <Contacto />
        </Reveal>
        <Reveal width='100%'>
          <Separator />
        </Reveal>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}