import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function Presentacion() {
    return (
        <div>
            <div className="flex justify-center lg:gap-12 lg:mt-16 mt-10">{/*items-center m-auto */}
                <div className='flex justify-center'>
                    <Image
                        src={"/foto/tomi.jpg"}
                        alt={""}
                        width={400}
                        height={400}
                        className="rounded-full shadow-xl hover:scale-110 transition-transform"
                    />
                </div>
                <div className='flex justify-center items-center text-center'>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='lg:text-7xl text-4xl font-black'>TOMAS GAUNA</p>
                        <p className='lg:text-3xl text-xl lg:mt-6 mt-4'>JUNIOR DEVELOPER</p>
                        <p className='lg:text-xl text-sm'>Tecnico Universitario en Programacion de UTN.</p>
                    </div>
                </div>
            </div>
            <div className='text-center lg:mt-28 lg:text-2xl mt-8 text-md'>
                <p>Porteño, que su afecto por el mundo de la programacion lo impulsa a encontrar innovadoras respuestas a los desafíos del desarrollo de software.</p>
                <p>Con 2 años de experiencia programando y actualmente trabajando como Consultor Trainee en <Link className='hover:underline text-blue-500 active:text-blue-900' rel="stylesheet" href="https://www.netnix.net/">NETNIX</Link>.</p>
                <p>Disfruto tanto del backend como del frontend.</p>
            </div>
        </div>
    );
}

export default Presentacion