import React, { useState } from 'react';
import { Search, BookOpen, Clock, BarChart2, Star } from 'lucide-react';

// Datos de curso de ejemplo
const courseData = [
    { id: 1, title: "Introducción a React Hooks", category: "desarrollo", instructor: "Ana López", duration: "10h", level: "Básico", rating: 4.8, tags: ["React", "Frontend", "JavaScript"], imageUrl: "https://placehold.co/400x200/5499C7/FFFFFF?text=React+Hooks" },
    { id: 2, title: "Figma para Diseñadores UX", category: "diseñouxui", instructor: "Carlos Ruiz", duration: "15h", level: "Intermedio", rating: 4.5, tags: ["UX/UI", "Diseño", "Figma"], imageUrl: "https://placehold.co/400x200/F39C12/FFFFFF?text=Figma+UX" },
    { id: 3, title: "SEO Avanzado y Estrategia", category: "marketing", instructor: "Elena Gómez", duration: "8h", level: "Avanzado", rating: 4.9, tags: ["SEO", "Marketing Digital"], imageUrl: "https://placehold.co/400x200/27AE60/FFFFFF?text=SEO+Avanzado" },
    { id: 4, title: "Fundamentos de Python para Data Science", category: "datascience", instructor: "David Silva", duration: "25h", level: "Básico", rating: 4.7, tags: ["Python", "Data", "ML"], imageUrl: "https://placehold.co/400x200/8E44AD/FFFFFF?text=Python+Data" },
    { id: 5, title: "Comunicación Efectiva en el Trabajo", category: "softskills", instructor: "Marta Pérez", duration: "5h", level: "Básico", rating: 4.6, tags: ["Liderazgo", "Habilidades Blandas"], imageUrl: "https://placehold.co/400x200/E67E22/FFFFFF?text=Soft+Skills" },
    { id: 6, title: "Desarrollo con Next.js", category: "desarrollo", instructor: "Pedro Ramos", duration: "18h", level: "Avanzado", rating: 4.9, tags: ["React", "Fullstack", "Next.js"], imageUrl: "https://placehold.co/400x200/2C3E50/FFFFFF?text=Next.js" },
];

// Componente para una tarjeta de Curso
const CourseCard = ({ course }) => {
    // Definimos los colores basados en el nivel para usar en las clases dinámicas
    const levelColor = {
        'Básico': 'text-[#1ABC9C] bg-[#E8F8F5]',
        'Intermedio': 'text-[#F39C12] bg-[#FEF9E7]',
        'Avanzado': 'text-[#E74C3C] bg-[#FADBD8]',
    };

    const colorClass = levelColor[course.level] || 'text-gray-600 bg-gray-100';

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl cursor-pointer">
            <img 
                src={course.imageUrl} 
                alt={course.title} 
                className="w-full h-40 object-cover" 
            />
            <div className="p-4">
                <h3 className="text-lg font-bold text-[#17202A] mb-2">{course.title}</h3>
                
                <p className="text-sm text-gray-500 mb-2">Instructor: {course.instructor}</p>

                {/* Info Rápida */}
                <div className="flex items-center text-sm text-gray-600 space-x-3 mb-3">
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1 text-[#F39C12]" /> {course.duration}</span>
                    <span className="flex items-center"><Star className="w-4 h-4 mr-1 text-[#3498DB]" /> {course.rating.toFixed(1)}</span>
                </div>

                {/* Nivel CORREGIDO: Se usa la sintaxis de template literal para colorClass */}
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colorClass}`}>
                    {course.level}
                </span>

                {/* Tags CORREGIDO: Se usa la sintaxis correcta para la key dinámica */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {course.tags.map((tag, index) => (
                        <span 
                            key={`tag-${index}`} // <-- CORREGIDO: Se usa backticks y llaves para la key
                            className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};


const CoursesScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('todos');

    // Lógica de filtrado
    const filteredJobs = courseData
        .filter(course => {
            // Filtrar por término de búsqueda (título o instructor)
            const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

            // Filtrar por pestaña activa
            const categoryMap = {
                'desarrollo': 'desarrollo',
                'diseñouxui': 'diseñouxui',
                'marketing': 'marketing',
                'datascience': 'datascience',
                'softskills': 'softskills',
                'todos': 'todos',
            };
            
            const matchesTab = activeTab === 'todos' || categoryMap[activeTab] === course.category;

            return matchesSearch && matchesTab;
        });

    // CORREGIDO: Clases dinámicas del botón de pestaña
    const baseButtonClass = "flex-shrink-0 px-4 py-2 rounded-lg font-semibold transition duration-200 text-sm whitespace-nowrap";
    const buttonClasses = (tab) => 
      `${baseButtonClass} ${activeTab === tab 
        ? 'bg-[#1ABC9C] text-white shadow-md' 
        : 'bg-white text-gray-700 hover:bg-gray-100'}`;

    return (
        <div className="p-4 space-y-6">
            
            {/* 1. BARRA DE BÚSQUEDA */}
            <div className="sticky top-0 bg-gray-50 pt-4 pb-3 z-10">
                <div className="relative shadow-md rounded-xl">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Buscar cursos por título o instructor..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1ABC9C] focus:border-transparent transition"
                    />
                </div>
            </div>
            
            {/* 2. FILTROS DE CATEGORÍA (Pestañas) */}
            <h2 className="text-xl font-bold text-[#17202A] flex items-center">
                <BarChart2 className="w-6 h-6 mr-2 text-[#F39C12]" />
                Explorar Categorías
            </h2>
            
            <div className="flex space-x-2 p-2 bg-gray-100 rounded-xl shadow-inner mb-6 overflow-x-auto">
                {['Todos', 'Desarrollo', 'Diseño UX/UI', 'Marketing', 'Data Science', 'Soft Skills'].map(tab => {
                    const tabValue = tab.toLowerCase().replace(/\s/g, ''); // Transforma "Diseño UX/UI" a "diseñouxui"
                    return (
                        <button
                            key={tabValue}
                            onClick={() => setActiveTab(tabValue)}
                            className={buttonClasses(tabValue)} // <-- CORREGIDO: Uso de buttonClasses
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>

            {/* 3. RESULTADOS DE LA BÚSQUEDA */}
            <h2 className="text-xl font-bold text-[#17202A] mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-[#1ABC9C]" />
                Cursos Encontrados ({filteredJobs.length})
            </h2>
            
            <section className="space-y-4">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))
                ) : (
                    <p className="text-gray-500 text-center p-6 bg-white rounded-xl shadow-inner">
                        No se encontraron cursos que coincidan con tu búsqueda.
                    </p>
                )}
            </section>
            
        </div>
    );
};

export default CoursesScreen;
