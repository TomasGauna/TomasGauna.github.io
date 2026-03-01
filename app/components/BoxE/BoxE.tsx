import React from 'react'
import Image from 'next/image'

interface BoxProps {
    education: {
        imgSrc: string,
        description: string,
        date: string,
    },
    isDark?: boolean
}

function BoxE({ education, isDark = false }: BoxProps) {
    return (
        <div className={`w-full rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <div className='p-5 flex flex-col gap-3'>
                <div className='flex flex-col lg:flex-row items-center gap-4'>
                    <Image
                        src={education.imgSrc}
                        alt={education.description}
                        width={200}
                        height={200}
                        className="object-contain"
                    />
                    <p className={`text-base lg:text-lg ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        {education.description}
                    </p>
                </div>
                <p className={`text-center text-sm italic lg:mt-0 mt-2 ${isDark ? 'text-gray-400' : 'text-zinc-500'}`}>
                    {education.date}
                </p>
            </div>
        </div>
    )
}

export default BoxE