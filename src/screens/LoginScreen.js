import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import WorklyLogo from '../components/WorklyLogo'; 
import PrimaryButton from '../components/PrimaryButton'; 

const LoginScreen = ({ onLogin }) => { 
  const [email, setEmail] = useState('nombre@workly.com'); 
  const [password, setPassword] = useState('123456'); 
  // ... (Simplificado para la compilación)
    
  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de validación
    onLogin({ name: 'Usuario Demo', email: email });
  };
    
  return (
    <div className="p-4 bg-gray-50">
      <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
      <form onSubmit={handleLogin} className="space-y-4 pt-4">
        {/* Usamos los componentes que crearás */}
        <PrimaryButton type="submit">Ingresar</PrimaryButton>
      </form>
    </div>
  );
};

export default LoginScreen;
