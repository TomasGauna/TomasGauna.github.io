import React from 'react'
import Image from 'next/image'

function BoxE() {
    return (
        <div className='w-10/12 h-full bg-white rounded-md shadow-md hover:scale-105 transition-transform duration-300'>
            <div className='p-5 flex flex-col gap-3'>
                <div className='flex flex-row items-center text-xl'>
                    <Image src={"/educacion/codo-codo.png"} alt={""} width={300} height={300}></Image>
                    <p className='break-all'>Descripcion</p>
                </div>
                <p className='text-center text-lg italic text-zinc-500'>2024 - En Curso</p>
            </div>
        </div>
    )
}

export default BoxE