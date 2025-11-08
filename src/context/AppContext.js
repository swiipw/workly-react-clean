import React, { createContext, useContext } from 'react';
import { courseData } from '../data/constants';

// --- 1. Crear el Contexto ---
const AppContext = createContext();

// --- 2. Proveedor del Contexto ---
export const AppProvider = ({ children }) => {
    // Aquí puedes manejar el estado global (ej. user, settings, etc.)
    
    // Los valores que estarán disponibles para toda la aplicación
    const contextValue = {
        courses: courseData,
        // Aquí irían las funciones de login/logout si no estuvieran en App.js
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

// --- 3. Hook Personalizado para usar el Contexto ---
export const useAppContext = () => {
    return useContext(AppContext);
};
