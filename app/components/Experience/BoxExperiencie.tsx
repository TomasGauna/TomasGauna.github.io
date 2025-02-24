import React from 'react'

interface Experiencie {
    title: string;
    from: string;
    to: string;
    description: string;
    imagePath: string;
}

function BoxExperiencie({ title, from, to, description, imagePath }: Experiencie) {
    return (
        <div
            className="w-80 h-[500px] rounded-lg bg-cover bg-center relative flex flex-col text-white shadow-lg hover:"
            style={{ backgroundImage: `url(${imagePath})` }}
        >
            <div className="absolute inset-0 bg-[#1c1e23]/60 rounded-lg"></div>
            <div className='flex justify-center items-center relative z-10'>
                <p className='p-5 text-xl'>{title}</p>
            </div>
            <div className='p-4 flex-1 relative z-10'>
                <p className='leading-relaxed text-base'>{description}</p>
            </div>
            <div className='mb-2 flex justify-center items-center relative z-10'>
                <p>{from} - {(to === "" ? "Actualidad" : to)}</p>
            </div>
        </div >
    )
}

export default BoxExperiencie