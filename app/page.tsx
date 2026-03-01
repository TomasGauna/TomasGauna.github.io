"use client"

import './globals.css';
import { Header } from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import Presentacion from './components/Presentacion/Presentacion';
import Experiencia from './components/Experiencia/Experiencia';
import Educacion from './components/Educacion/Educacion';
import Stack from './components/Stack/TechSlider';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer'
import translationsES from './translations/es.json';
import translationsEN from './translations/en.json';
import { useState } from 'react';
import { Reveal } from './components/Reveal/Reveal';
import Separator from './components/Separator/Separator';
import TechSlider from './components/Stack/TechSlider';

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
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header onLanguageChange={handleLanguageChange} onThemeChange={handleThemeChange} isDark={isDark} />
      
      <Reveal width="100%">
        <Presentacion translations={translations.presentacion} isDark={isDark} />
      </Reveal>

      <div className='max-w-4xl mx-auto px-6'>
        <Reveal width='100%'>
          <Separator isDark={isDark} />
        </Reveal>
        <Reveal width="100%">
          <TechSlider isDark={isDark} translations={translations.tecnologia}/>
        </Reveal>
        <Reveal width="100%">
          <Experiencia translations={translations.experiencia} isDark={isDark} />
        </Reveal>
        <Reveal width='100%'>
          <Separator isDark={isDark} />
        </Reveal>
        {/* <Reveal width="100%">
          <Educacion isDark={isDark} />
        </Reveal>
        <Reveal width='100%'>
          <Separator />
        </Reveal>
        <Reveal width="100%">
          <Contacto isDark={isDark} />
        </Reveal> */}
        {/* <Reveal width='100%'>
          <Separator />
        </Reveal>
        <Footer isDark={isDark} /> */}
      </div>
      <ToastContainer />
    </div>
  );
}