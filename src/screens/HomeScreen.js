import React from 'react';
import { Home } from 'lucide-react';

const HomeScreen = () => {
  return (
    <div className="p-4 space-y-4">
        <h1 className="text-3xl font-bold text-[#17202A] flex items-center">
            <Home className="w-7 h-7 mr-2 text-[#1ABC9C]" />
            Panel Principal
        </h1>
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#F39C12] text-gray-700">
            <h2 className="text-xl font-semibold mb-2">¡Bienvenido a Workly.AI!</h2>
            <p>Este es el inicio de tu experiencia. Aquí verás recomendaciones personalizadas, tu progreso y actividades recientes.</p>
        </div>
        
        {/* Contenido Dummy de Recomendaciones */}
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#17202A]">Recomendaciones de Empleo</h3>
            <div className="bg-white p-4 rounded-xl shadow-md text-gray-600">
                <p>Analizando tu perfil para ofrecerte las mejores oportunidades...</p>
            </div>
            <h3 className="text-xl font-bold text-[#17202A]">Cursos Populares</h3>
            <div className="bg-white p-4 rounded-xl shadow-md text-gray-600">
                <p>Pronto verás aquí cursos de IA y Desarrollo Web.</p>
            </div>
        </div>
    </div>
  );
};

export default HomeScreen;
