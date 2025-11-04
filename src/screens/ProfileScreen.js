import React from 'react';

const ProfileScreen = ({ user, onLogout }) => {
    return (
        <div className="p-4 text-center animate-fade-in-up">
            <h2 className="text-2xl font-bold text-[#17202A]">Perfil de Usuario</h2>
            <div className="mt-4 p-6 bg-white shadow rounded-lg max-w-sm mx-auto">
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
                <p className="text-[#1ABC9C] mt-2">Suscripción Premium</p>
            </div>
            
            <button 
                onClick={onLogout} 
                className="mt-6 w-full max-w-xs mx-auto py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition"
            >
                Cerrar Sesión
            </button>
        </div>
    );
};

export default ProfileScreen;
