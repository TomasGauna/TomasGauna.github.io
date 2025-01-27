import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  repoLink?: string;
  images: string[]; // Array de URL de las imágenes
}

interface BoxProps extends Project {
  translations?: {
    verRepositorio: string;
  };
}

const Box: React.FC<BoxProps> = ({ title, description, repoLink, images, translations }) => {
  return (
    <div className='h-96 lg:h-72 bg-white flex flex-col w-80 lg:w-64 rounded-lg shadow-lg hover:scale-110 transition-transform mt-4'>
      <div className='flex justify-center'>
        <p className='mb-2 mt-4 text-xl font-semibold'>{title}</p>
      </div>
      <div className='ml-4 mr-4'>
        <p className='leading-relaxed text-sm'>{description}</p>
      </div>
      <div className='mt-auto mb-2 flex flex-col justify-center'>
        <div className='flex justify-center gap-3 mb-4 w-full'>
          {images?.map((image, index) => (
            <Image key={index} src={image} alt={`Imagen ${index}`} width={25} height={25} />
          ))}
        </div>
        {repoLink && translations && (
          <Link href={`${repoLink}`} className='text-blue-500 text-center hover:underline'>
            {translations.verRepositorio}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Box;



// <div className="bg-white rounded-lg shadow-md p-6 md:p-9 w-80 h-80 flex flex-col justify-between hover:scale-110 transition-transform">
//   <div>
//     <h3 className="text-xl font-semibold">{title}</h3>
//     <p className="text-gray-600 mb-2 whitespace-no-wrap mt-4">{description}</p>
//   </div>
//   <div className="flex flex-col justify-end space-y-2">
//     <div className="flex justify-start space-x-4">
//       {images.map((image, index) => (
//         <div key={index} className="w-10 h-10 relative rounded-lg overflow-hidden hover:scale-110">
//           <Image
//             src={image}
//             alt={`Imagen ${index}`}
//             layout="fill"
//             objectFit="contain"
//           />
//         </div>
//       ))}
//     </div>
//     {repoLink && (
//       <Link href={repoLink} className="text-blue-500 hover:underline block">Ver Repositorio</Link>
//     )}
//   </div>
// </div>
