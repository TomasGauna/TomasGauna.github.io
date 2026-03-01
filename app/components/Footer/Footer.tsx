import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
    const redes = [
        { 
            name: 'Linkedin', 
            imgSrc: '/iconos/linkedin.png', 
            link: 'https://www.linkedin.com/in/tomas-agustin-gauna-373290292/'
        },
        {
            name: 'GitHub',
            imgSrc: '/iconos/github.png',
            link: 'https://github.com/TomasGauna/'
        },
        {
            name: 'Discord',
            imgSrc: '/iconos/discord.webp',
            link: 'https://discordapp.com/users/_tewan'
        },
        {
            name: 'X',
            imgSrc: '/iconos/x.png',
            link: 'https://x.com/tomi_atienzo?s=11'
        },
        {
            name: 'Instagram',
            imgSrc: '/iconos/instagram.png',
            link: 'https://www.instagram.com/tomi_atienzo/'
        },
    ];

    return (
        <footer className='border-t border-t-gray-200 pt-10 text-base'>
            <div className='text-center mt-10 p-3 flex items-center justify-center lg:gap-5 gap-2'>
                <p>&copy; {new Date().getFullYear()} Tomás Gauna. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
