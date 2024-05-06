import React from 'react';
import Box from '../Box/Box';

function Experiencia() {
  const projects = [
    {
      title: "Tabla Didáctica",
      description: "Aplicación android que le enseña a niños los animales, colores y numeros en 3 idiomas que son el ingles, portugues y español",
      images: ["/iconos/angular.png", "/iconos/ionic.png", "/iconos/html.png", "/iconos/css.png", "/iconos/sass.png"],
      repoLink: "https://github.com/TomasGauna/app_tabla-didactica_android"
    },
    {
      title: "Proyecto 2",
      description: "Una breve descripción del proyecto 2.",
      images: ["/iconos/angular.png"],
      repoLink: "https://github.com/example/repo2"
    },
    {
      title: "Proyecto 3",
      description: "Una breve descripción del proyecto 3.",
      images: ["/iconos/github.png"],
      repoLink: "https://github.com/example/repo3"
    },
    {
      title: "Proyecto 4",
      description: "Una breve descripción del proyecto 4.",
      images: ["/iconos/github.png"],
      repoLink: "https://github.com/example/repo4"
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center mt-8 w-full mb-8'>
      {/* <h1 className='text-5xl mb-8'>Experiencia</h1> */}
      <p className='lg:text-5xl text-4xl'>Experiencia</p>
      {/* <div className='flex justify-center gap-6 w-full overflow-x-auto'> */}
      <div className='mb-16 grid lg:flex h-96 w-screen justify-center lg:gap-6'>  
        {projects.map((project, index) => (
          <div key={index} className="mb-8 mt-8">
            <Box {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiencia;
