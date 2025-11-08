import React from 'react';
import { Navbar, Footer, CallToAction } from '../components';

const ProfileScreen = () => {
  // Datos simulados del usuario
  const user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    role: 'Desarrollador Frontend',
    coursesCompleted: 5,
    lastLogin: 'Hace 2 horas',
    profilePic: 'https://via.placeholder.com/150',
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Perfil de Usuario</h1>
          
          <CallToAction /> 
          
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Información Personal</h2>
            <div className="flex items-center space-x-6 mb-6">
              <img className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500" src={user.profilePic} alt="Foto de perfil" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
                <p className="text-indigo-600">{user.role}</p>
              </div>
            </div>
            
            <hr className="my-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Estadísticas</h3>
                <p className="text-gray-700">Cursos Completados: <span className="font-bold text-indigo-600">{user.coursesCompleted}</span></p>
                <p className="text-gray-700">Último Acceso: {user.lastLogin}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Acciones</h3>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Editar Perfil
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileScreen;
