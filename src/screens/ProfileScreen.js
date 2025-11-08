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
                // LÍNEA CORREGIDA 1: Se envuelve la clave dinámica en `{}` y se usan backticks ``
                <Star key={`full-${i}`} className="w-5 h-5 fill-current" />
            ))}
            {hasHalfStar && (
                // Simulamos media estrella con un clip para mostrar solo la mitad
                <div key="half" className="relative w-5 h-5 overflow-hidden">
                    <Star className="absolute w-5 h-5 fill-current" />
                    <div className="absolute w-1/2 h-full bg-white right-0"></div>
                </div>
            )}
            {[...Array(emptyStars)].map((_, i) => (
                // LÍNEA CORREGIDA 2: Se envuelve la clave dinámica en `{}` y se usan backticks ``
                <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
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
