import React from 'react';
import { Briefcase } from 'lucide-react';

const JobsScreen = () => {
  return (
    <div className="p-4 text-center text-gray-500">
        <Briefcase className="w-10 h-10 mx-auto mb-2 text-[#1ABC9C]" />
        <h2 className="text-xl font-bold">Búsqueda de Empleos</h2>
        <p>Aquí construiremos la lista de vacantes. ¡Volveremos aquí pronto!</p>
    </div>
  );
};

export default JobsScreen;
