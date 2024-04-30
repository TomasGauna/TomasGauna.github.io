// components/Box.tsx

import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  repoLink?: string;
  images: string[]; // Array de URL de las imágenes
}

const Box: React.FC<Project> = ({ title, description, repoLink, images }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex justify-center items-center space-x-4">
        {images.map((image, index) => (
          <div key={index} className="w-12 h-12 relative">
            <Image
              src={image}
              alt={`Imagen ${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        ))}
      </div>
      {repoLink && (
        <a href={repoLink} className="text-blue-500 hover:underline block mt-2">Ver Repositorio</a>
      )}
    </div>
  );
};

export default Box;
