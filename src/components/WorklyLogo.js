import React from 'react';
import { Briefcase } from 'lucide-react'; // Importamos Briefcase para fallback

// El componente WorklyLogo ahora renderizará tu logo oficial y el nombre.

const WorklyLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Usaremos una imagen de ícono simplificado del logo. 
        Asegúrate de que el archivo 'workly_icon.png' (solo la W) esté en public/
      */}
      <img 
        src="/workly_logo.png" // RUTA: Icono simplificado (solo la W)
        alt="Workly Logo"
        className="w-14 h-8 object-contain"
        onError={(e) => { 
          // Fallback por si la imagen no carga: muestra un ícono genérico
          e.target.style.display = 'none';
          e.target.parentNode.innerHTML = '<Briefcase class="w-8 h-8 text-[#1ABC9C]" />';
        }}
      />
      <span className="text-2xl font-extrabold text-[#17202A]">
        Workly
      </span>
    </div>
  );
};

export default WorklyLogo;
