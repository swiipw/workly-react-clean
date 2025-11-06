import React, { useState } from 'react';
import { User, Mail, LogOut, UserCheck, Edit, Save, X, ChevronRight, Cake, Heart } from 'lucide-react';

// El componente recibe ahora 'user', 'onLogout', y 'onUpdateUser'
const ProfileScreen = ({ user, onLogout, onUpdateUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Estado inicial del formulario basado en los datos del usuario actual
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    age: user.age || '',
    preferences: user.preferences || 'Tecnología, Remoto'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Validaciones simples antes de guardar
    if (!formData.name || !formData.email) {
        alert("El nombre y el correo electrónico son obligatorios.");
        return;
    }
    
    // Llama a la función de actualización pasada desde MainAppScreen
    onUpdateUser(formData); 
    setIsEditing(false); // Sale del modo de edición
  };

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

  // --- MODO VISTA (Por defecto) ---
  return (
    <div className="p-4 space-y-6">
      <header className="bg-white p-6 rounded-xl shadow-lg text-center">
        <User className="w-16 h-16 mx-auto mb-3 text-[#1ABC9C] p-3 bg-[#E8F8F5] rounded-full" />
        <h1 className="text-3xl font-extrabold text-[#17202A]">{user.name}</h1>
        <p className="text-gray-600 flex items-center justify-center mt-1">
          <Mail className="w-4 h-4 mr-1 text-[#F39C12]" />
          {user.email}
        </p>
        
        {/* Botón para entrar en modo edición */}
        <button
            onClick={() => setIsEditing(true)}
            className="mt-4 flex items-center justify-center mx-auto text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
        >
            <Edit className="w-4 h-4 mr-1" />
            Editar Perfil
        </button>
      </header>

      <section className="bg-white p-4 rounded-xl shadow-md space-y-3">
        <h2 className="text-xl font-bold text-[#17202A] mb-3">Detalles</h2>
        <div className="space-y-2">
            <p className="flex items-center text-gray-700">
                <Cake className="w-5 h-5 mr-2 text-red-500" /> 
                Edad: <span className="font-semibold ml-1">{user.age || 'No especificada'}</span>
            </p>
            <p className="flex items-center text-gray-700">
                <Heart className="w-5 h-5 mr-2 text-[#F39C12]" /> 
                Preferencias: <span className="font-semibold ml-1">{user.preferences || 'No especificadas'}</span>
            </p>
        </div>
      </section>
      
      {/* Botón de Cerrar Sesión */}
      <button
        onClick={onLogout}
        className="w-full flex items-center justify-center py-3 bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-red-700 transition"
      >
        <LogOut className="w-5 h-5 mr-2" />
        Cerrar Sesión
      </button>
    </div>
  );
};

export default ProfileScreen;
