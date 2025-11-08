import React from 'react';
import { Navbar, Footer, CallToAction, CourseCard, Features } from '../components';

// Datos de ejemplo para los cursos
const courses = [
  { id: 1, title: 'Introducción a React', description: 'Aprende los fundamentos de React y JSX.', level: 'Básico', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 2, title: 'Desarrollo con Node.js', description: 'Crea APIs robustas y escalables con Node.', level: 'Intermedio', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 3, title: 'Diseño UX/UI Avanzado', description: 'Mejora la experiencia de usuario de tus aplicaciones.', level: 'Avanzado', imageUrl: 'https://via.placeholder.com/300x200' },
];

const CoursesScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Features /> 
        
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Nuestros Cursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default CoursesScreen;
