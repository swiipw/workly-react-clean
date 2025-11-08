import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const FloatingAssistantButton = ({ onAssistantClick }) => {
  // Estado para controlar si el mensaje de bienvenida está visible
  const [showWelcome, setShowWelcome] = useState(true);
    
  // Efecto para ocultar el mensaje de bienvenida después de 5 segundos
  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 5000); // 5000 milisegundos = 5 segundos
      
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  const handleButtonClick = (e) => {
    // Si la funcionalidad no está implementada (solo demo)
    alert("¡Abriendo el chat del Asistente Josué!"); 
    
    setShowWelcome(false); // Siempre ocultamos el mensaje al hacer clic en el botón
    if (onAssistantClick) {
        onAssistantClick(); // Abre el modal de chat en MainAppScreen
    }
  };
    
  const handleCloseMessage = (e) => {
      // 🛑 CORRECCIÓN CLAVE: Detiene la propagación del evento
      // Esto previene que el click en la 'X' active el onClick del botón flotante
      e.stopPropagation(); 
      setShowWelcome(false);
  }

  return (
    <div className="fixed bottom-24 right-4 md:right-10 z-20">
      
      {/* Mensaje de Bienvenida de Josué */}
      {showWelcome && (
        <div 
          className="absolute right-16 bottom-1/2 translate-y-1/2 
                     bg-white text-gray-800 p-3 rounded-xl shadow-lg 
                     max-w-xs transition-opacity duration-300 transform opacity-100"
        >
          {/* Botón de CERRAR (X) */}
          <button 
            onClick={handleCloseMessage} 
            className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
            aria-label="Cerrar mensaje"
          >
            <X className="w-4 h-4" />
          </button>
          
          <p className="font-semibold text-sm pr-4">
            ¡Hola, soy Josué! Tu asistente virtual. ¿Necesitas ayuda?
          </p>
        </div>
      )}

      {/* Círculo con la Imagen de Josué (Botón principal) */}
      <button
        // 🛑 CORRECCIÓN CLAVE: El click en el botón debe detener la propagación
        // para asegurar que si hay un click en la burbuja de mensaje (que está sobre el botón), 
        // solo se active la acción de la burbuja (aunque lo ideal es que la burbuja esté fuera del botón)
        onClick={handleButtonClick} // Al hacer clic, abre el chat
        className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center 
                   border-4 border-[#1ABC9C] transition-all duration-300 transform hover:scale-105"
        aria-label="Asistente Virtual Josué"
      >
        <img 
          src="/josue.png" // Ruta de la imagen en public/
          alt="Asistente Josué" 
          className="w-full h-full object-cover rounded-full p-[3px]"
        />
      </button>
    </div>
  );
};

export default FloatingAssistantButton;
