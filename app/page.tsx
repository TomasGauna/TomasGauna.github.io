"use client"

import './globals.css';
import { Reveal } from "./components/Reveal/Reveal";
import { Header } from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import Presentacion from './components/Presentacion/Presentacion';
import Experiencia from './components/Experiencia/Experiencia';
import Educacion from './components/Educacion/Educacion';
import Stack from './components/Stack/Stack';

export default function Home() {
  return (
    <div className='w-screen h-screen lg:p-0 p-2 pt-0'>
      <Header/>
      <Presentacion/>
      <Experiencia/>
      {/* <Educacion/> */}
      <Stack/>
      <ToastContainer/>
    </div>
  );
}
