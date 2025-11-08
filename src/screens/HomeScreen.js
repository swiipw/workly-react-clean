import React from 'react';

const HomeScreen = ({ user }) => {
    return (
        <div className="p-4 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-[#17202A]">¡Hola, {user.name}!</h2>
            <p className="text-gray-600 mt-2">Tu panel de control.</p>
        </div>
    );
};

export default HomeScreen;
