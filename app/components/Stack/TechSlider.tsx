import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface TechSliderProps {
    isDark?: boolean;
    translations: {
        titulo: string;
        categorias: {
            lenguajes: string;
            frameworks: string;
            databases: string;
            devops: string;
        };
    };
}

const TechSlider = ({ isDark = false, translations }: TechSliderProps) => {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            label: translations.categorias.lenguajes,
            techs: [
                { name: 'C', image: '/iconos/c.png', url: 'https://en.cppreference.com/w/c' },
                { name: 'C++', image: '/iconos/cplus.png', url: 'https://en.cppreference.com/w/cpp' },
                { name: 'C#', image: '/iconos/csharp.png', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
                { name: 'JavaScript', image: '/iconos/js.png', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { name: 'TypeScript', image: '/iconos/ts.png', url: 'https://www.typescriptlang.org/' },
                { name: 'PHP', image: '/iconos/php.png', url: 'https://www.php.net/' },
                { name: 'Ruby', image: '/iconos/ruby.png', url: 'https://www.ruby-lang.org/en/' },
                { name: 'Python', image: '/iconos/python.png', url: 'https://www.python.org/' },
                { name: 'HTML', image: '/iconos/html.png', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { name: 'CSS', image: '/iconos/css.png', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
            ],
        },
        {
            label: translations.categorias.frameworks,
            techs: [
                { name: 'React', image: '/iconos/react.png', url: 'https://reactjs.org/' },
                { name: 'Angular', image: '/iconos/angular.png', url: 'https://angular.io/' },
                { name: 'Ionic', image: '/iconos/ionic.png', url: 'https://ionicframework.com/' },
                { name: 'Django', image: '/iconos/django.png', url: 'https://www.djangoproject.com/' },
                { name: 'Node', image: '/iconos/node.png', url: 'https://nodejs.org/' },
                { name: 'NestJS', image: '/iconos/nestjs.png', url: 'https://nestjs.com/' },
                { name: 'NextJS', image: '/iconos/nextjs.png', url: 'https://nextjs.org/' },
                { name: '.NET', image: '/iconos/net.png', url: 'https://dotnet.microsoft.com/' },
                { name: 'Slim', image: '/iconos/slim.png', url: 'https://www.slimframework.com/' },
                { name: 'jQuery', image: '/iconos/jquery.png', url: 'https://jquery.com/' },
                { name: 'Sass', image: '/iconos/sass.png', url: 'https://sass-lang.com/' },
                { name: 'Tailwind', image: '/iconos/tailwind.png', url: 'https://tailwindcss.com/' },
                { name: 'Bootstrap', image: '/iconos/bootstrap.png', url: 'https://getbootstrap.com/' },
            ],
        },
        {
            label: translations.categorias.databases,
            techs: [
                { name: 'SQL', image: '/iconos/sql.png', url: 'https://www.w3schools.com/sql/' },
                { name: 'NoSQL', image: '/iconos/nosql.png', url: 'https://en.wikipedia.org/wiki/NoSQL' },
                { name: 'MongoDB', image: '/iconos/mongodb.png', url: 'https://www.mongodb.com/' },
                { name: 'PostgreSQL', image: '/iconos/postgresql.png', url: 'https://www.postgresql.org/' },
                { name: 'MySQL', image: '/iconos/mysql.png', url: 'https://www.mysql.com/' },
            ],
        },
        {
            label: translations.categorias.devops,
            techs: [
                { name: 'Git', image: '/iconos/git.png', url: 'https://git-scm.com/' },
                { name: 'Docker', image: '/iconos/docker.png', url: 'https://www.docker.com/' },
                { name: 'Linux', image: '/iconos/linux.png', url: 'https://www.kernel.org/' },
                { name: 'Firebase', image: '/iconos/firebase.png', url: 'https://firebase.google.com/' },
                { name: 'AWS', image: '/iconos/aws.png', url: 'https://aws.amazon.com/' },
                { name: 'Vercel', image: '/iconos/vercel.png', url: 'https://vercel.com/' },
                { name: 'Power Automate', image: '/iconos/powerautomate.png', url: 'https://flow.microsoft.com/' },
            ],
        },
    ];

    const allTechnologies = categories.flatMap(c => c.techs);

    const TechItem = ({ tech }: { tech: typeof allTechnologies[0] }) => (
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
            <p className="lg:text-4xl text-3xl mb-14 text-center">{translations.titulo}</p>

            <div className="w-full rounded-3xl transition-colors duration-300">

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
                        {allTechnologies.concat(allTechnologies, allTechnologies).map((tech, index) => (
                            <TechItem key={`slider-${index}`} tech={tech} />
                        ))}
                    </div>
                </div>

                {/* Tabs categorized — solo en mobile */}
                <div className="md:hidden">
                    {/* Tab buttons */}
                    <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6 overflow-x-auto scrollbar-hide">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(i)}
                                className={`
                                    flex-1 min-w-[72px] py-2 px-3 text-xs font-mono font-medium whitespace-nowrap
                                    border-b-2 transition-colors duration-200
                                    ${activeCategory === i
                                        ? isDark
                                            ? 'border-white text-white'
                                            : 'border-gray-900 text-gray-900'
                                        : isDark
                                            ? 'border-transparent text-gray-500 hover:text-gray-300'
                                            : 'border-transparent text-gray-400 hover:text-gray-600'
                                    }
                                `}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Tech grid for active category */}
                    <div className="grid grid-cols-4 gap-x-2 gap-y-6 px-4 pb-6">
                        {categories[activeCategory].techs.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center hover:scale-110 transition-transform">
                                <Link href={tech.url} target="_blank" rel="noopener noreferrer">
                                    <Image src={tech.image} alt={tech.name} width={48} height={48} className="w-12 h-12" />
                                </Link>
                                <span className={`text-xs font-mono mt-1 text-center leading-tight ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TechSlider;