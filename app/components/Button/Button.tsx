import React, { useState } from 'react'
import './styles/Button.css'

function Button() {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleClick = async () => {
        setIsLoading(true);
        
        try {
            const response = await fetch('/cv/CV.pdf');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'CV Tomás Gauna.pdf'; // Nombre personalizado del archivo
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            setIsLoading(false);
        } catch (error) {
            console.error('Error al descargar el archivo:', error);
            setIsLoading(false);
        }
    };

    return (
        <button onClick={handleClick} className={`button ${isLoading ? "loading" : ""}`}>
          {/* <img src={iconSettings} /> */}
            <span>{isLoading ? "Descargando..." : "Descargar CV"}</span>
        </button>
    );
}

export default Button