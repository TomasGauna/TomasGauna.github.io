import React, { useState } from 'react';
import './styles/Button.css';

interface ButtonProps {
  label: string;
  language?: string;
}

const Button: React.FC<ButtonProps> = ({ label, language = 'es' }) => {
  const [isLoading, setIsLoading] = useState(false);

  const loadingText = language === 'es' ? 'Descargando...' : 'Downloading...';

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const handleClick = async () => {
    setIsLoading(true);
    
    try {
      await delay(1500);

      const response = language === 'es' ? await fetch('/cv/CV_TomasGauna_Español.pdf') : await fetch('/cv/CV_TomasGauna_English.pdf');
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
      <span>{isLoading ? loadingText : label}</span>
    </button>
  );
};

export default Button;