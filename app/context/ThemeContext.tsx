'use client'

import { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

// Creamos el contexto con un valor inicial undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook useTheme que retorna el contexto
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// ThemeProvider que proporciona el contexto a los componentes hijos
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>('black'); // Default theme

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
