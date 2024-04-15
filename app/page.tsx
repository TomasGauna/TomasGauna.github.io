"use client"

import { useState, useEffect } from 'react';
import './globals.css';
import Image from "next/image";
import { Reveal } from "./components/Reveal/Reveal";
import { Header } from './components/Header/Header';
import { FirestoreService } from './lib/clases/firestore.service';
import firebase from 'firebase/compat/app';
import { ToastContainer } from 'react-toastify';
import Link from 'next/link';

export default function Home() {
  // const firestore: FirestoreService = new FirestoreService();
  // const [users, setUsers] = useState<firebase.firestore.DocumentData[]>([]);
  // const [loading, setLoading] = useState(false); // Agregar estado para controlar la carga

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const usersData = await firestore.getUsers();
  //       setUsers(usersData);
  //     } catch (error) {
  //       console.error('Error al obtener usuarios:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []); // Ejecutar solo una vez al montar el componente

  // const agregarUnLoquito = async () => {
  //   setLoading(true); // Establecer loading a true al iniciar la carga
  //   try {
  //     await firestore.addUser({ nombre: 'prueba', password: 'pass' });
  //     const usersData = await firestore.getUsers();
  //     setUsers(usersData);
  //     // Aquí puedes realizar otras acciones después de agregar el usuario
  //   } catch (error) {
  //     console.error('Error al agregar usuario:', error);
  //   } finally {
  //     setLoading(false); // Establecer loading a false al finalizar la carga, ya sea con éxito o error
  //   }
  // };

  // const renderUsers = () => {
  //   return users.map((user: any, index) => (
  //     <div key={index}>
  //       <p>Nombre: {user.nombre}</p>
  //       <p>Password: {user.password}</p>
  //     </div>
  //   ));
  // };

  return (
    <div className='w-screen'>
      <Header />
      <div className="flex justify-center gap-20 mt-20">
        <div className='flex justify-center'>
          <Image
            src={"/foto/tomi.jpg"}
            alt={""}
            width={500}
            height={500}
            className="rounded-full shadow-xl hover:scale-110 transition-transform col-span-1 md:col-span-1 justify-self-center"
          />
        </div>
        <div className='flex justify-center items-center text-center'>
          <div className='flex flex-col gap-1 w-full'>
            <p className='text-9xl font-black'>TOMAS GAUNA</p>
            <p className='text-5xl mt-6'>JUNIOR DEVELOPER</p>
            <p className='text-2xl'>Tecnico Universitario en Programacion de UTN.</p>
          </div>
        </div>
      </div>
      <div className='text-center mt-28'>
          <p>Porteño, que su afecto por el mundo de la programacion lo impulsa a encontrar innovadoras respuestas a los desafíos del desarrollo de software.</p>
          <p>Con 2 años de experiencia programando y actualmente trabajando como consultor trainee en <Link rel="stylesheet" href="https://www.netnix.net/">NETNIX</Link>.</p>
          <p>Disfruto tanto del backend como del frontend.</p>
      </div>
      <ToastContainer />
      {/* <button disabled={loading} onClick={agregarUnLoquito}>Hace click loco!</button> */}
      
      {/* Mostrar usuarios */}
      {/* <div className='h-screen'>
        {users.length > 0 ? (
          renderUsers()
        ) : (
          <p>No hay usuarios</p>
        )}
      </div> */}
    </div>
  );
}
