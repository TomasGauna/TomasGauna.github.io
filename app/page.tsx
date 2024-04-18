"use client"

import './globals.css';
import { Reveal } from "./components/Reveal/Reveal";
import { Header } from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import Presentacion from './components/Presentacion/Presentacion';

export default function Home() {
  return (
    <div className='w-screen'>
      <Header/>
      <Presentacion/>
      Experiencia
      <ToastContainer/>
    </div>
  );
}
