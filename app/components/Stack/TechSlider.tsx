import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface TechSliderProps {
    isDark?: boolean;
    translations: {
        titulo: string;
    };
}

const TechSlider = ({ isDark = false, translations }: TechSliderProps) => {
    const technologies = [
        { name: 'C', image: '/iconos/c.png', url: 'https://en.cppreference.com/w/c' },
        { name: 'C++', image: '/iconos/cplus.png', url: 'https://en.cppreference.com/w/cpp' },
        { name: 'C#', image: '/iconos/csharp.png', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
        { name: '.NET', image: '/iconos/net.png', url: 'https://dotnet.microsoft.com/' },
        { name: 'JavaScript', image: '/iconos/js.png', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'TypeScript', image: '/iconos/ts.png', url: 'https://www.typescriptlang.org/' },
        { name: 'React', image: '/iconos/react.png', url: 'https://reactjs.org/' },
        { name: 'PHP', image: '/iconos/php.png', url: 'https://www.php.net/' },
        { name: 'Ruby', image: '/iconos/ruby.png', url: 'https://www.ruby-lang.org/en/' },
        { name: 'Python', image: '/iconos/python.png', url: 'https://www.python.org/' },
        { name: 'HTML', image: '/iconos/html.png', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'Node', image: '/iconos/node.png', url: 'https://nodejs.org/' },
        { name: 'Slim', image: '/iconos/slim.png', url: 'https://www.slimframework.com/' },
        { name: 'jQuery', image: '/iconos/jquery.png', url: 'https://jquery.com/' },
        { name: 'CSS', image: '/iconos/css.png', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'Sass', image: '/iconos/sass.png', url: 'https://sass-lang.com/' },
        { name: 'Tailwind', image: '/iconos/tailwind.png', url: 'https://tailwindcss.com/' },
        { name: 'Bootstrap', image: '/iconos/bootstrap.png', url: 'https://getbootstrap.com/' },
        { name: 'Angular', image: '/iconos/angular.png', url: 'https://angular.io/' },
        { name: 'Ionic', image: '/iconos/ionic.png', url: 'https://ionicframework.com/' },
        { name: 'Django', image: '/iconos/django.png', url: 'https://www.djangoproject.com/' },
        { name: 'Docker', image: '/iconos/docker.png', url: 'https://www.docker.com/' },
        { name: 'Firebase', image: '/iconos/firebase.png', url: 'https://firebase.google.com/' },
        { name: 'Git', image: '/iconos/git.png', url: 'https://git-scm.com/' },
        { name: 'Linux', image: '/iconos/linux.png', url: 'https://www.kernel.org/' },
        { name: 'SQL', image: '/iconos/sql.png', url: 'https://www.w3schools.com/sql/' },
        { name: 'MongoDB', image: '/iconos/mongodb.png', url: 'https://www.mongodb.com/' },
        { name: 'MySQL', image: '/iconos/mysql.png', url: 'https://www.mysql.com/' },
        { name: 'NestJS', image: '/iconos/nestjs.png', url: 'https://nestjs.com/' },
        { name: 'NextJS', image: '/iconos/nextjs.png', url: 'https://nextjs.org/' },
        { name: 'AWS', image: '/iconos/aws.png', url: 'https://aws.amazon.com/' },
        { name: 'Vercel', image: '/iconos/vercel.png', url: 'https://vercel.com/' },
        { name: 'Power Automate', image: '/iconos/powerautomate.png', url: 'https://flow.microsoft.com/' },
    ];

    const TechItem = ({ tech }: { tech: typeof technologies[0] }) => (
        <Link
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex flex-col items-center gap-2 group"
        >
            <Image
                src={tech.image}
                alt={tech.name}
                width={48}
                height={48}
                className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
            />
            <span className={`text-xs font-mono transition-colors duration-300 ${isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-900'}`}>
                {tech.name}
            </span>
        </Link>
    );

    return (
        <div className="w-full mt-14 lg:mb-14">
            <p className="lg:text-5xl text-4xl mb-14 text-center">{translations.titulo}</p>

            <div className={`w-full rounded-3xl transition-colors duration-300`}>

                {/* Slider — solo en desktop */}
                <div className="hidden md:block relative overflow-hidden py-6">
                    <style>{`
                        @keyframes slide {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-33.333333%); }
                        }
                        .slider-track {
                            animation: slide 40s linear infinite;
                        }
                        .slider-track:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                    <div className="slider-track flex w-max gap-10 will-change-transform">
                        {technologies.concat(technologies, technologies).map((tech, index) => (
                            <TechItem key={`slider-${index}`} tech={tech} />
                        ))}
                    </div>
                </div>

                {/* Grid — solo en mobile */}
                <div className="grid grid-cols-4 gap-4 py-6 px-4 md:hidden">
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center mb-4 mt-4 hover:scale-110 transition-transform">
                            <Link href={tech.url} target="_blank" rel="noopener noreferrer">
                                <Image src={tech.image} alt={tech.name} width={55} height={55} />
                            </Link>
                            <span className={`text-xs font-mono mt-1 text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default TechSlider;