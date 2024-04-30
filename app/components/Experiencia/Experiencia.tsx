import React from 'react'
import Image from "next/image";
import Box from '../Box/Box';

function Experiencia() {
  const projects = [
  {
    title: "Proyecto 1",
    description: "Una breve descripción del proyecto 1.",
    images: ["/iconos/linkedin.png", "/iconos/github.png"],
    repoLink: "https://github.com/example/repo1"
  },
  {
    title: "Proyecto 2",
    description: "Una breve descripción del proyecto 2.",
    images: ["/iconos/github.png"],
    repoLink: "https://github.com/example/repo2"
  },
];

  return (
    <div>
      <h1>Mis Proyectos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Box key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Experiencia