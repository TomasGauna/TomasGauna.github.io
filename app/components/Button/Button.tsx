import React, { useState } from 'react';
import './styles/Button.css';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  const [isLoading, setIsLoading] = useState(false);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const handleClick = async () => {
    setIsLoading(true);
    
    try {
      // Introducir un retraso de 2 segundos (2000 milisegundos)
      await delay(1500);

      const response = await fetch('/cv/CV.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CV Tomás Gauna.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleClick} className={`button ${isLoading ? "loading" : ""}`}>
      <span>{isLoading ? "Descargando..." : label}</span>
    </button>
  );
};

export default Button;
