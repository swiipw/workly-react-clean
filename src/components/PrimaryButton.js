import React from 'react';

// Se corrige el error de sintaxis forzando el retorno implícito con paréntesis
const PrimaryButton = ({ children, onClick, type = 'button', disabled = false }) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`w-full py-3 px-4 rounded-xl font-bold text-white transition-all duration-300 ${
            disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#F39C12] hover:bg-[#E67E22]'
        }`}
    >
        {children}
    </button>
);

export default PrimaryButton;
