import React, { useState, useEffect } from 'react';
// IMPORTACIÓN FALTANTE:
import { X } from 'lucide-react'; 

const FloatingAssistantButton = ({ onAssistantClick }) => {
  // Estado para controlar si el mensaje de bienvenida está visible
  const [showWelcome, setShowWelcome] = useState(true);
  
  // Estado para controlar si el asistente está activo (después del primer click)
  const [isActive, setIsActive] = useState(false);

  // Efecto para ocultar el mensaje de bienvenida después de 5 segundos
  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 5000); // 5000 milisegundos = 5 segundos
      
      // Función de limpieza: se ejecuta si el componente se desmonta
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  const handleClick = () => {
    // Si la funcionalidad no está implementada (solo demo)
    alert("Aquí se abriría el modal o chat del Asistente Josué!"); 
    
    // Ocultamos el mensaje de bienvenida si aún estaba visible
    setShowWelcome(false); 
    
    // Establecemos el estado activo (puedes usar esto para cambiar la apariencia si quieres)
    setIsActive(true);
    
    // Llamamos a la función que se pase como prop (si es que MainAppScreen la usa)
    if (onAssistantClick) {
        onAssistantClick();
    }
  };

  return (
    <div className="fixed bottom-24 right-4 md:right-10 z-20">
      
      {/* Mensaje de Bienvenida de Josué */}
      {(showWelcome || isActive) && (
        <div 
          className={`absolute right-16 bottom-1/2 translate-y-1/2 
                     bg-white text-gray-800 p-3 rounded-xl shadow-lg 
                     max-w-xs transition-opacity duration-300 transform 
                     ${showWelcome ? 'opacity-100 animate-fade-in-up' : isActive ? 'opacity-100' : 'opacity-0'}`}
        >
          <button 
            onClick={() => setShowWelcome(false)} 
            className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
            aria-label="Cerrar mensaje"
          >
            {/* El icono X ahora está definido gracias a la importación */}
            <X className="w-4 h-4" /> 
          </button>
          
          <p className="font-semibold text-sm pr-4">
            ¡Hola, soy Josue! Tu asistente virtual. ¿Necesitas ayuda?
          </p>
        </div>
      )}

      {/* Círculo con la Imagen de Josué */}
      <button
        onClick={handleClick}
        className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center 
                   border-4 border-[#1ABC9C] transition-all duration-300 transform hover:scale-105"
        aria-label="Asistente Virtual Josué"
      >
        <img 
          src="/josue.png" // Ruta de la imagen en public/
          alt="Asistente Josué" 
          className="w-full h-full object-cover rounded-full p-[3px]" // Padding para que no toque el borde
        />
      </button>
    </div>
  );
};

export default FloatingAssistantButton;
