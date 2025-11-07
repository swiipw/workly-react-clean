import React, { useState } from 'react';
import { Mail, Briefcase, Star, Clock, Heart, Edit3, Camera, User, BookOpen, Edit, Save, X, Cake } from 'lucide-react';

// Datos simulados para la demostración de Trayectoria (no editables por ahora)
const simulatedCareerData = {
    completedCourses: 7,
    performanceRating: 4.5, // 4.5 estrellas de 5
    totalHours: 120,
};

// Componente para renderizar estrellas de rendimiento
const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
        <div className="flex items-center text-[#F39C12]">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={full-${i}} className="w-5 h-5 fill-current" />
            ))}
            {hasHalfStar && (
                // Simulamos media estrella con un clip para mostrar solo la mitad
                <div key="half" className="relative w-5 h-5 overflow-hidden">
                    <Star className="absolute w-5 h-5 fill-current" />
                    <div className="absolute w-1/2 h-full bg-white right-0"></div>
                </div>
            )}
            {[...Array(emptyStars)].map((_, i) => (
                <Star key={empty-${i}} className="w-5 h-5 text-gray-300" />
            ))}
            <span className="text-sm text-gray-600 ml-2">({rating.toFixed(1)} / 5)</span>
        </div>
    );
};


// Componente principal ProfileScreen
// Recibe user, onLogout y onUpdateUser
const ProfileScreen = ({ user, onLogout, onUpdateUser }) => {
    const [isEditing, setIsEditing] = useState(false);
    
    // Estado inicial del formulario. Aseguramos que los valores sean iniciales
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        age: user?.age || '',
        preferences: user?.preferences || ''
    });

    // Esta función se llama al iniciar la edición para asegurarse de que el formulario tenga los datos más recientes
    const handleEditClick = () => {
        setFormData({
            name: user?.name || '',
            email: user?.email || '',
            age: user?.age || '',
            preferences: user?.preferences || ''
        });
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (!formData.name || !formData.email) {
            console.error("El nombre y el correo electrónico son obligatorios.");
            return;
        }
        
        // Llamada a la función de actualización del componente padre
        onUpdateUser(formData); 
        setIsEditing(false); // Sale del modo de edición
    };

    const username = user?.name?.toLowerCase().replace(/\s/g, '') || 'usuario';
    const profileImageUrl = "https://i.pravatar.cc/150?img=33";
    const preferencesList = user?.preferences ? user.preferences.split(',').map(p => p.trim()).filter(p => p.length > 0) : [];
    
    const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ABC9C] focus:border-[#1ABC9C]";
    const labelClasses = "block text-sm font-medium text-gray-700 mb-1 mt-3";

    // --- MODO DE EDICIÓN (Formulario) ---
    if (isEditing) {
        return (
            <div className="p-4 space-y-6">
                <h1 className="text-3xl font-extrabold text-[#17202A] flex items-center mb-6">
                    <Edit className="w-6 h-6 mr-2 text-[#F39C12]" /> Editar Perfil
                </h1>
                
                <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
                    
                    <div>
                        <label htmlFor="name" className={labelClasses}>Nombre Completo *</label>
                        <input 
                            id="name"
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className={labelClasses}>Correo Electrónico *</label>
                        <input 
                            id="email"
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className={inputClasses}
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="age" className={labelClasses}>Edad</label>
                        <input 
                            id="age"
                            type="number" 
                            name="age" 
                            value={formData.age} 
                            onChange={handleChange} 
                            className={inputClasses}
                            placeholder="Edad en años"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="preferences" className={labelClasses}>Gustos y Preferencias (Separar por coma)</label>
                        <textarea 
                            id="preferences"
                            name="preferences" 
                            value={formData.preferences} 
                            onChange={handleChange} 
                            rows="3"
                            className={inputClasses}
                            placeholder="Ej: Programación, Diseño, Remoto"
                        />
                    </div>
                    
                    <button
                        onClick={handleSave}
                        className="w-full flex items-center justify-center py-3 bg-[#1ABC9C] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-[#17202A] transition mt-6"
                    >
                        <Save className="w-5 h-5 mr-2" />
                        Guardar Cambios
                    </button>
                    
                    <button
                        onClick={() => setIsEditing(false)}
                        className="w-full flex items-center justify-center py-2 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition"
                    >
                        <X className="w-5 h-5 mr-2" />
                        Cancelar
                    </button>
                </div>
            </div>
        );
    }
    
    // --- MODO VISTA (Por defecto, con toda la estructura) ---
    return (
        <div className="p-4 space-y-8">
            {/* 1. SECCIÓN DE INFORMACIÓN BÁSICA Y FOTO */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1ABC9C]">
                
                {/* Contenedor de Foto y Botón de Edición (Foto no editable aún) */}
                <div className="relative mb-4">
                    <img 
                        src={profileImageUrl} 
                        alt="Foto de Perfil"
                        className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-md"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/EEEEEE/AAAAAA?text=U"; }}
                    />
                    <button 
                        className="absolute bottom-0 right-0 p-2 bg-[#F39C12] text-white rounded-full hover:bg-[#E67E22] transition shadow-md"
                        aria-label="Cambiar foto"
                        onClick={() => console.log("Simulando cambio de foto")}
                    >
                        <Camera className="w-4 h-4" />
                    </button>
                </div>

                <h2 className="text-3xl font-extrabold text-[#17202A]">{user?.name}</h2>
                <p className="text-gray-500 text-lg mb-4">@{username}</p>
                
                <div className="w-full space-y-2 text-gray-700">
                    <p className="flex items-center"><Mail className="w-5 h-5 mr-3 text-[#1ABC9C]" /> {user?.email}</p>
                    <p className="flex items-center"><Cake className="w-5 h-5 mr-3 text-[#1ABC9C]" /> {user?.age || 'Edad no especificada'} años</p>
                </div>
                
                {/* Botón principal para ir al formulario de edición de datos */}
                <button
                    onClick={handleEditClick}
                    className="mt-4 flex items-center justify-center px-4 py-2 text-sm font-bold bg-[#F39C12] text-white rounded-lg shadow-md hover:bg-[#E67E22] transition"
                >
                    <Edit className="w-4 h-4 mr-1" />
                    Editar Datos Personales
                </button>
            </div>

            {/* 2. GUSTOS Y PREFERENCIAS */}
            <section className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h3 className="text-xl font-bold text-[#17202A] flex items-center"><Heart className="w-5 h-5 mr-2 text-red-500" /> Gustos y Preferencias</h3>
                    {/* El botón de edición de preferencias lleva al mismo formulario */}
                    <button onClick={handleEditClick} className="text-[#1ABC9C] hover:text-[#17202A]"><Edit3 className="w-5 h-5" /></button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {preferencesList.length > 0 ? (
                        preferencesList.map((pref, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                {pref}
                            </span>
                        ))
                    ) : (
                        <span className="text-gray-500 italic">Haz clic en Editar Datos Personales para añadir tus gustos.</span>
                    )}
                </div>
            </section>

            {/* 3. MI TRAYECTORIA (NO EDITABLE, Muestra el avance del usuario) */}
            <section className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#17202A] mb-4 flex items-center"><Briefcase className="w-5 h-5 mr-2 text-[#F39C12]" /> Mi Trayectoria</h3>
                
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <p className="flex items-center text-gray-700"><BookOpen className="w-5 h-5 mr-2 text-[#1ABC9C]" /> Cursos Completados:</p>
                        <span className="font-bold text-lg">{simulatedCareerData.completedCourses}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <p className="flex items-center text-gray-700"><Clock className="w-5 h-5 mr-2 text-[#1ABC9C]" /> Horas de Aprendizaje:</p>
                        <span className="font-bold text-lg">{simulatedCareerData.totalHours}h</span>
                    </div>
                    
                    <div className="border-t pt-3">
                        <p className="text-gray-700 font-semibold mb-1">Rendimiento (Promedio de Estrellas):</p>
                        <StarRating rating={simulatedCareerData.performanceRating} />
                    </div>
                </div>
            </section>

            {/* BOTÓN DE CERRAR SESIÓN */}
            <div className="pt-4 pb-12">
                <button
                    onClick={onLogout}
                    className="w-full py-3 bg-red-600 text-white font-bold rounded-xl shadow-md hover:bg-red-700 transition"
                >
                    Cerrar Sesión
                </button>
            </div>
            
        </div>
    );
};

export default ProfileScreen;
