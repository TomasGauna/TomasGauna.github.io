import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function Presentacion() {
    return (
        <div>
            <div className="flex justify-center lg:gap-12 lg:mt-16">
                <div className='flex justify-center'>
                    <Image
                        src={"/foto/tomi.jpg"}
                        alt={""}
                        width={500}
                        height={500}
                        className="rounded-full shadow-xl hover:scale-110 transition-transform"
                    />
                </div>
                <div className='flex justify-center items-center text-center'>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='lg:text-9xl font-black'>TOMAS GAUNA</p>
                        <p className='lg:text-5xl lg:mt-6'>JUNIOR DEVELOPER</p>
                        <p className='lg:text-2xl'>Tecnico Universitario en Programacion de UTN.</p>
                    </div>
                </div>
            </div>
            <div className='text-center lg:mt-28'>
                <p>Porteño, que su afecto por el mundo de la programacion lo impulsa a encontrar innovadoras respuestas a los desafíos del desarrollo de software.</p>
                <p>Con 2 años de experiencia programando y actualmente trabajando como consultor trainee en <Link className='hover:underline' rel="stylesheet" href="https://www.netnix.net/">NETNIX</Link>.</p>
                <p>Disfruto tanto del backend como del frontend.</p>
            </div>
        </div>
    )
}

export default Presentacion