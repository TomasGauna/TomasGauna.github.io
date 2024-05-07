import React from 'react';
import Image from 'next/image';

function Stack() {
  const tecnologias = [
    { 
      name: 'C', 
      image: '/iconos/c.png' 
    },
    { 
      name: 'C++', 
      image: '/iconos/cplus.png' 
    },
    { 
      name: 'C#', 
      image: '/iconos/csharp.png' 
    },
    { 
      name: '.NET', 
      image: '/iconos/net.png' 
    },
    { 
      name: 'Js', 
      image: '/iconos/js.png' 
    },
    { 
      name: 'Ts', 
      image: '/iconos/ts.png' 
    },
    { 
      name: 'React', 
      image: '/iconos/react.png' 
    },
    { 
      name: 'PHP', 
      image: '/iconos/php.png' 
    },
    { 
      name: 'Ruby', 
      image: '/iconos/ruby.png' 
    },
    { 
      name: 'Python', 
      image: '/iconos/python.png' 
    },
    { 
      name: 'HTML', 
      image: '/iconos/html.png' 
    },
    { 
      name: 'Node', 
      image: '/iconos/node.png' 
    },
    { 
      name: 'Slim', 
      image: '/iconos/slim.png' 
    },
    { 
      name: 'Jquery', 
      image: '/iconos/jquery.png' 
    },
    { 
      name: 'CSS', 
      image: '/iconos/css.png' 
    },
    { 
      name: 'Sass', 
      image: '/iconos/sass.png' 
    },
    { 
      name: 'Tailwind', 
      image: '/iconos/tailwind.png' 
    },
    { 
      name: 'Bootstrap', 
      image: '/iconos/bootstrap.png' 
    },
    { 
      name: 'Angular', 
      image: '/iconos/angular.png' 
    },
    { 
      name: 'Ionic', 
      image: '/iconos/ionic.png' 
    },
    { 
      name: 'Django', 
      image: '/iconos/django.png' 
    },
    { 
      name: 'Docker', 
      image: '/iconos/docker.png' 
    },
    { 
      name: 'Firebase', 
      image: '/iconos/firebase.png' 
    },
    { 
      name: 'Git', 
      image: '/iconos/git.png' 
    },
    { 
      name: 'Linux', 
      image: '/iconos/linux.png' 
    },
    { 
      name: 'SQL', 
      image: '/iconos/sql.png' 
    },
    { 
      name: 'MongoDB', 
      image: '/iconos/mongodb.png' 
    },
    { 
      name: 'MySQL', 
      image: '/iconos/mysql.png' 
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center mt-8 w-full mb-8'>
      {/* <h1 className='text-5xl mb-8'>Experiencia</h1> */}
      <p className='lg:text-5xl text-4xl'>Conocimientos</p>
      {/* <div className='flex justify-center gap-6 w-full overflow-x-auto'> */}
      {/* <div className='mb-16 lg:flex h-96 w-screen justify-center lg:gap-8'>   */}
      <div className='grid grid-cols-7 gap-14'>
        {tecnologias.map((tecnologia, index) => (
          <div key={index} className="mb-8 mt-8">
              <Image src={tecnologia.image} alt={`Imagen ${tecnologia.name}`} width={75} height={75}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stack