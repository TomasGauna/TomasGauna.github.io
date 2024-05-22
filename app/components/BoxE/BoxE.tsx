import React from 'react'
import Image from 'next/image'

interface BoxProps {
    education: {
        imgSrc: string,
        description: string,
        date: string,
    }
}

function BoxE({education}: BoxProps) {
    return (
        <div className='w-10/12 h-full bg-white rounded-md shadow-md hover:scale-105 transition-transform duration-300 overflow-hidden'>
            <div className='p-5 flex flex-col gap-3'>
                <div className='flex flex-row items-center text-xl'>
                    <Image src={education.imgSrc} alt={""} width={200} height={200}></Image>
                    <p className='break-all'>{education.description}</p>
                </div>
                <p className='text-center text-lg italic text-zinc-500'>{education.date}</p>
            </div>
        </div>
    )
}

export default BoxE