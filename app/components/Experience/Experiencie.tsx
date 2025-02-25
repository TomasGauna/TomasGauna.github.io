import React from 'react'
import BoxExperiencie from './BoxExperiencie';

interface ExperiencieProps {
    experiencies: Experiencie[]
}

interface Experiencie {
    title: string;
    from: string;
    to: string;
    description: string;
    imagePath: string;
}

function Experiencie({experiencies}: ExperiencieProps) {
    return (
        <div className='flex justify-center gap-6'>
            {experiencies.map((experiencie) => (
                <BoxExperiencie key={experiencie.title} {...experiencie}/>
            ))}
        </div>
    )
}

export default Experiencie