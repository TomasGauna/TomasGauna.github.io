import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Project {
    title: string;
    description: string;
    repoLink?: string;
    images: string[]; // Array de URL de las imágenes
}

function BoxComponent({ title, description, repoLink, images } : Project) {
    return (
        <div className='h-96 lg:h-72 bg-[#1c1e23] flex flex-col w-80 lg:w-64 rounded-lg shadow-lg hover:scale-110 transition-transform mt-4'>
            <div className='flex justify-center'>
                <p className='mb-2 mt-4 text-xl font-semibold'>{title}</p>
            </div>
            <div className='ml-4 mr-4'>
                <p className='leading-relaxed text-sm'>{description}</p>
            </div>
            <div className='mt-auto mb-2 flex flex-col justify-center'>
                <div className='flex justify-center gap-3 mb-4 w-full'>
                    {images?.map((image, index) => (
                        <Image key={index} src={image} alt={`Language ${index}`} width={25} height={25}/>
                    ))}
                </div>
                {repoLink && (
                    <Link href={repoLink} target='_blank' className='text-blue-500 text-center hover:underline'>
                        Ver repositorio
                    </Link>
                )}
            </div>
        </div>
    )
}

export default BoxComponent