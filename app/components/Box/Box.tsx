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
    <div className="bg-white rounded-lg shadow-md p-6 md:p-9 w-80 h-80 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mb-2 whitespace-no-wrap">{description}</p>
      </div>
      <div className="flex flex-col justify-end space-y-2">
        <div className="flex justify-start space-x-4">
          {images.map((image, index) => (
            <div key={index} className="w-10 h-10 relative rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`Imagen ${index}`}
                layout="fill"
                objectFit="contain" // Utilizamos objectFit="contain" para mostrar toda la imagen
              />
            </div>
          ))}
        </div>
        {repoLink && (
          <a href={repoLink} className="text-blue-500 hover:underline block">Ver Repositorio</a>
        )}
      </div>
    </div>
  );
};

export default Box;
