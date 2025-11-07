import React from 'react';
import { BookOpen } from 'lucide-react';

const CoursesScreen = () => {
  return (
    <div className="p-4 text-center text-gray-500">
        <BookOpen className="w-10 h-10 mx-auto mb-2 text-[#1ABC9C]" />
        <h2 className="text-xl font-bold">Cursos y Formación</h2>
        <p>Pronto podrás acceder a tu catálogo de cursos y certificaciones.</p>
    </div>
  );
};

export default CoursesScreen;
