// src/screens/HomeScreen.js

import React from 'react';
import { Home, Zap, Heart } from 'lucide-react';

const HomeScreen = () => {
  return (
    <div className="p-4 space-y-6">
      <header className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-[#17202A] flex items-center">
          <Home className="w-8 h-8 mr-2 text-[#1ABC9C]" />
          Inicio de Workly
        </h1>
        <p className="text-gray-600 mt-2">Tu panel central para encontrar empleo y avanzar en tu carrera.</p>
      </header>

      <section className="space-y-4">
        <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[#F39C12]">
          <h2 className="text-xl font-bold text-[#17202A] flex items-center mb-1">
            <Zap className="w-5 h-5 mr-2 text-[#F39C12]" />
            Acciones Rápidas
          </h2>
          <p className="text-gray-600">Revisa tus postulaciones recientes o los cursos que estás tomando.</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[#1ABC9C]">
          <h2 className="text-xl font-bold text-[#17202A] flex items-center mb-1">
            <Heart className="w-5 h-5 mr-2 text-[#1ABC9C]" />
            Empleos Recomendados
          </h2>
          <p className="text-gray-600">Echa un vistazo a las ofertas de empleo que hemos seleccionado para ti.</p>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
