import React from 'react';

const HomeScreen = ({ user }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">¡Hola, {user.name}!</h2>
            <p className="text-gray-600">Bienvenido a Workly.</p>
        </div>
    );
};

export default HomeScreen;
