import React from 'react'
import BoxComponent from './BoxComponent'

interface ProjectsProps {
    projects: Project[];
}

interface Project {
    title: string;
    description: string;
    images: string[];
    repoLink: string;
}

function Projects({projects}: ProjectsProps) {
    return (
        <div className='flex flex-col items-center justify-center mt-10 w-auto mb-8'>
            <div className='mb-16 flex lg:flex-row flex-col h-full items-center lg:items-baseline lg:h-96 w-screen justify-center lg:gap-6'>
                {projects.map((project, index) => (
                    <div key={index} className='mb-8 mt-8'>
                        <BoxComponent {...project}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects