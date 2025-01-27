import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Stack() {
  const tecnologias = [
    { 
      name: 'C', 
      image: '/iconos/c.png',
      url: 'https://en.cppreference.com/w/c'
    },
    { 
      name: 'C++', 
      image: '/iconos/cplus.png',
      url: 'https://en.cppreference.com/w/cpp'
    },
    { 
      name: 'C#', 
      image: '/iconos/csharp.png',
      url: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
    },
    { 
      name: '.NET', 
      image: '/iconos/net.png',
      url: 'https://dotnet.microsoft.com/'
    },
    { 
      name: 'Js', 
      image: '/iconos/js.png',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    { 
      name: 'Ts', 
      image: '/iconos/ts.png',
      url: 'https://www.typescriptlang.org/'
    },
    { 
      name: 'React', 
      image: '/iconos/react.png',
      url: 'https://reactjs.org/'
    },
    { 
      name: 'PHP', 
      image: '/iconos/php.png',
      url: 'https://www.php.net/'
    },
    { 
      name: 'Ruby', 
      image: '/iconos/ruby.png',
      url: 'https://www.ruby-lang.org/en/'
    },
    { 
      name: 'Python', 
      image: '/iconos/python.png',
      url: 'https://www.python.org/'
    },
    { 
      name: 'HTML', 
      image: '/iconos/html.png',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    { 
      name: 'Node', 
      image: '/iconos/node.png',
      url: 'https://nodejs.org/'
    },
    { 
      name: 'Slim', 
      image: '/iconos/slim.png',
      url: 'https://www.slimframework.com/'
    },
    { 
      name: 'Jquery', 
      image: '/iconos/jquery.png',
      url: 'https://jquery.com/'
    },
    { 
      name: 'CSS', 
      image: '/iconos/css.png',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    { 
      name: 'Sass', 
      image: '/iconos/sass.png',
      url: 'https://sass-lang.com/'
    },
    { 
      name: 'Tailwind', 
      image: '/iconos/tailwind.png',
      url: 'https://tailwindcss.com/'
    },
    { 
      name: 'Bootstrap', 
      image: '/iconos/bootstrap.png',
      url: 'https://getbootstrap.com/'
    },
    { 
      name: 'Angular', 
      image: '/iconos/angular.png',
      url: 'https://angular.io/'
    },
    { 
      name: 'Ionic', 
      image: '/iconos/ionic.png',
      url: 'https://ionicframework.com/'
    },
    { 
      name: 'Django', 
      image: '/iconos/django.png',
      url: 'https://www.djangoproject.com/'
    },
    { 
      name: 'Docker', 
      image: '/iconos/docker.png',
      url: 'https://www.docker.com/'
    },
    { 
      name: 'Firebase', 
      image: '/iconos/firebase.png',
      url: 'https://firebase.google.com/'
    },
    { 
      name: 'Git', 
      image: '/iconos/git.png',
      url: 'https://git-scm.com/'
    },
    { 
      name: 'Linux', 
      image: '/iconos/linux.png',
      url: 'https://www.kernel.org/'
    },
    { 
      name: 'SQL', 
      image: '/iconos/sql.png',
      url: 'https://www.w3schools.com/sql/'
    },
    { 
      name: 'MongoDB', 
      image: '/iconos/mongodb.png',
      url: 'https://www.mongodb.com/'
    },
    { 
      name: 'MySQL', 
      image: '/iconos/mysql.png',
      url: 'https://www.mysql.com/'
    }
  ];

  return (
    <div className='flex flex-col items-center justify-center mt-8 w-full mb-8'>
      {/* <h1 className='text-5xl mb-8'>Experiencia</h1> */}
      <p className='lg:text-5xl text-4xl mb-14'>Conocimientos</p>
      {/* <div className='flex justify-center gap-6 w-full overflow-x-auto'> */}
      {/* <div className='mb-16 lg:flex h-96 w-screen justify-center lg:gap-8'>   */}
      <div className='grid lg:grid-cols-7 grid-cols-4 gap-4 lg:gap-14 mt-6'>
        {tecnologias.map((tecnologia, index) => (
          <div key={index} className="mb-8 mt-8 hover:scale-110 transition-transform">
              <Link href={tecnologia.url} target="_blank">
                <Image src={tecnologia.image} alt={`Imagen ${tecnologia.name}`} width={75} height={75}/>
              </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stack