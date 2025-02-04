import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TechSlider = () => {
    const technologies = [
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
        },
        {
            name: 'NestJS',
            image: '/iconos/nestjs.png',
            url: 'https://nestjs.com/'
        },
        {
            name: 'NextJS',
            image: '/iconos/nextjs.png',
            url: 'https://nextjs.org/'
        }
    ];

    return (
        <div className="relative w-full overflow-hidden py-4 bg-[#1c1e23] rounded-3xl">
            <div className="flex w-max animate-slider gap-12">
                {/* Duplicamos tres veces los elementos para crear un ciclo continuo */}
                {technologies.concat(technologies, technologies).map((tech, index) => (
                    <Link
                        key={`tech-${index}`}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0"
                    >
                        <Image
                            src={tech.image}
                            alt={tech.name}
                            className="h-20 w-20 grayscale hover:grayscale-0"
                            width={80}
                            height={80}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TechSlider;